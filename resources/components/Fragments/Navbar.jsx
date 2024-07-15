import React, { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { BiLogOut } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

const Navbar = ({ user }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [imagePreview, setImagePreview] = useState(
        `/storage/${user.image}` || ""
    );

    const { url } = usePage().props;

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogOut = () => {
        router.post("/logout");
    };

    const handleProfile = () => {
        router.get("/profile");
    };

    const handleNavigation = (path) => {
        router.visit(path);
    };

    const [createteam, setCreateteam] = useState(false);

    const handleCreateTeam = () => {
        setCreateteam(!createteam);
    };

    return (
        <nav className="fixed p-6 flex justify-between text-neutral-800 hover:text-neutral-900 items-center w-full bg-white z-50">
            <Link
                href="/home"
                className="text-2xl font-bold ml-5 tracking-wider"
            >
                TaskMaster
            </Link>

            <div className="relative flex mt-2">
                <button
                    onClick={handleCreateTeam}
                    className="flex mr-8 border rounded-full px-6 py-2 bg-neutral-200 font-semibold"
                >
                    <FaPlus className="w-5 h-5 mr-2 my-auto" />
                    Create Team
                </button>
                <button
                    className="flex items-center focus:outline-none mr-4"
                    onClick={toggleDropdown}
                >
                    <img
                        src={imagePreview}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="uppercase font-medium">
                        {user.firstname}
                    </span>
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-10 w-48 bg-white text-slate-800 rounded-lg shadow-lg z-20">
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-neutral-100"
                            onClick={handleProfile}
                        >
                            Profile
                        </a>
                        <button
                            onClick={() => handleNavigation("/home")}
                            className="px-4 pr-[86px] justify-start py-2 hover:bg-neutral-100"
                        >
                            Workspace
                        </button>
                        <button
                            onClick={() => handleNavigation("/task")}
                            className="px-4 pr-[140px] py-2 hover:bg-neutral-100"
                        >
                            Task
                        </button>
                        <button
                            onClick={handleCreateTeam}
                            className="px-4 pr-[71px] py-2 hover:bg-neutral-100"
                        >
                            Create Team
                        </button>
                        <button
                            onClick={() => handleNavigation("/file-management")}
                            className="px-4 pr-[37px] py-2 hover:bg-neutral-100"
                        >
                            File Management
                        </button>
                        <hr />
                        <a
                            href="#"
                            onClick={handleLogOut}
                            className="px-4 py-2 flex items-center hover:bg-neutral-100"
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
