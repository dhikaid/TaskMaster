import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { router } from "@inertiajs/react";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const handleLogOut = () => {
        router.post("/logout");
    };
    return (
        <nav className="p-4 flex justify-between text-slate-700 items-center fixed w-full z-10 border-b-2 border-b-slate-200 border-white">
            <div className="text-xl font-semibold ml-4">Task Master</div>
            <div className="text-xl font-semibold">Task</div>
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
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            Profile & Visibility
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            Activity
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            Cards
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            Settings
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            Help
                        </a>
                        <hr />
                        <a
                            href="#"
                            onClick={handleLogOut}
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
