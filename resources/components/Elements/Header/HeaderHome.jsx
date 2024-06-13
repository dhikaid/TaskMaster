import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { router } from "@inertiajs/react";
const handleLogOut = () => {
    router.post("/logout");
};

const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-semibold">Task Master</div>
            <div className="relative">
                <button className="flex items-center focus:outline-none">
                    <MdOutlineAccountCircle className="w-8 h-8 mr-2" />
                    <span>Account</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                        Profile & Visibility
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                        Activity
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                        Cards
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                        Settings
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                        Help
                    </a>
                    <a
                        href="#"
                        onClick={handleLogOut}
                        className="block px-4 py-2 hover:bg-gray-200"
                    >
                        Log Out
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
