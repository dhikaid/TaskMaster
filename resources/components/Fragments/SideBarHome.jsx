import React from "react";
import ButtonHome from "../Elements/button/ButtonHome";
import {
    MdOutlineCalendarToday,
    MdGroup,
    MdOutlineFolder,
    MdSettings,
    MdHome,
} from "react-icons/md";

const SideBarHome = () => {
    return (
        <div className="w-64 text-neutral-800 p-4 h-full border-r-2 bg-white fixed top-0 mt-16 pt-6">
            <ul>
                <li className="mb-2">
                    <ButtonHome>
                        <span className="flex items-center">
                            <MdHome className="w-5 h-5 mr-2" />
                            Home
                        </span>
                    </ButtonHome>
                </li>
                <li className="mb-2">
                    <ButtonHome>
                        <span className="flex items-center">
                            <MdOutlineCalendarToday className="w-5 h-5 mr-2" />
                            Task
                        </span>
                    </ButtonHome>
                </li>
                <li className="mb-2">
                    <ButtonHome>
                        <span className="flex items-center">
                            <MdGroup className="w-5 h-5 mr-2" />
                            Members
                        </span>
                    </ButtonHome>
                </li>
                <li className="mb-2">
                    <ButtonHome>
                        <span className="flex items-center">
                            <MdOutlineFolder className="w-5 h-5 mr-2" />
                            File Management
                        </span>
                    </ButtonHome>
                </li>
                <li className="mb-2">
                    <ButtonHome>
                        <span className="flex items-center">
                            <MdSettings className="w-5 h-5 mr-2" />
                            Settings
                        </span>
                    </ButtonHome>
                </li>
            </ul>
        </div>
    );
};

export default SideBarHome;
