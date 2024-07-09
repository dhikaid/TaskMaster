import React from "react";
import Sidebar, { SidebarItem } from "../Fragments/SideBar";
import Navbar from "../Fragments/Navbar";
import {
    MdOutlineCalendarToday,
    MdGroup,
    MdOutlineFolder,
    MdSettings,
    MdHome,
} from "react-icons/md";
import { router } from "@inertiajs/react";

const LayoutHome = ({ children }) => {
    const handleNavigation = (path) => {
        router.visit(path);
    };

    return (
        <div className="flex flex-col ">
            <Navbar className="z-10" />
            <div className="flex flex-1 pt-16">
                <Sidebar>
                    <SidebarItem
                        icon={<MdHome />}
                        text="Home"
                        onClick={() => handleNavigation("/home")}
                    />
                    <SidebarItem
                        icon={<MdOutlineCalendarToday />}
                        text="Task"
                        onClick={() => handleNavigation("/task")}
                    />
                    <SidebarItem
                        icon={<MdGroup />}
                        text="Members"
                        onClick={() => handleNavigation("/members")}
                    />
                    <SidebarItem
                        icon={<MdOutlineFolder />}
                        text="FileManagement"
                        onClick={() => handleNavigation("/file-management")}
                    />
                    <SidebarItem
                        icon={<MdSettings />}
                        text="Settings"
                        onClick={() => handleNavigation("/settings")}
                    />
                </Sidebar>
                <div className="flex-grow p-4 ml-64">{children}</div>
            </div>
        </div>
    );
};

export default LayoutHome;
