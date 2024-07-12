import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, router } from "@inertiajs/react";
import { BiLogOut } from "react-icons/bi";
import { useForm } from "@inertiajs/react";

const Navbar = ({ user }) => {
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
    const [imagePreview, setImagePreview] = useState(
        `/storage/${user.image}` || ""
    );

    return (
        <nav className="fixed p-6 flex justify-between text-neutral-800 hover:text-neutral-900 items-center w-full bg-white z-50 ">
            <Link
                href="/home"
                className="text-2xl font-bold ml-5 tracking-wider"
            >
                TaskMaster
            </Link>
            <div className="relative">
                <button
                    className="flex items-center focus:outline-none mr-4"
                    onClick={toggleDropdown}
                >
                    <img
                        src={imagePreview}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2 "
                    />

                    <span className="uppercase font-medium">
                        {user.firstname}
                    </span>
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
