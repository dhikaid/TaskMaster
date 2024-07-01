import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, router } from "@inertiajs/react";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const handleLogOut = () => {
        router.post("/logout");
    };

    const handleProfile = () => {
        router.get("/profile");
    };

    const handleHome = () => {
        router.visit("/home");
    };
    return (
        <nav className="p-4 flex justify-between text-slate-700 items-center fixed w-full border-b-2 border-b-slate-200 bg-white z-10 shadow-md">
            <Link href="/home" className="text-xl font-semibold ml-4">
                Task Master
            </Link>
            <div className="relative">
                <button
                    className="flex items-center focus:outline-none mr-4"
                    onClick={toggleDropdown}
                >
                    <MdOutlineAccountCircle className="w-8 h-8 mr-2" />
                    <span>Account</span>
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-slate-800 rounded-lg shadow-lg z-20">
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-neutral-100"
                            onClick={handleProfile}
                        >
                            Profile
                        </a>
                        <hr />
                        <a
                            href="#"
                            onClick={handleLogOut}
                            className=" px-4 py-2 flex items-center hover:bg-neutral-100"
                        >
                            <BiLogOut />
                            <span className="ml-2">Logout</span>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
