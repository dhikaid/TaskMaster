import React from "react";
import Sidebar, { SidebarItem } from "../Fragments/SideBar";
import Navbar from "../Fragments/Navbar";
import {
    MdOutlineCalendarToday,
    MdGroup,
    MdOutlineFolder,
    MdSettings,
    MdHome,
    MdWorkspaces,
} from "react-icons/md";
import { router } from "@inertiajs/react";

const LayoutHome = ({ children, pageTitle, user }) => {
    const handleNavigation = (path) => {
        router.visit(path);
    };

    return (
        <div className="flex flex-col ">
            <Navbar className="z-10" user={user} />
            <div className="flex flex-1 pt-20">
                <Sidebar>
                    <SidebarItem
                        icon={<MdWorkspaces className="w-6 h-6 md:" />}
                        text="Workspace"
                        onClick={() => handleNavigation("/home")}
                    />
                    <SidebarItem
                        icon={<MdOutlineCalendarToday className="w-6 h-6 " />}
                        text="Task"
                        onClick={() => handleNavigation("/task")}
                    />
                    {/* <SidebarItem
                        icon={<MdGroup className="w-6 h-6" />}
                        text="Members"
                        onClick={() => handleNavigation("/members")}
                    /> */}
                    <SidebarItem
                        icon={<MdOutlineFolder className="w-6 h-6" />}
                        text="FileManagement"
                        onClick={() => handleNavigation("/file-management")}
                    />
                </Sidebar>
                <div className="flex-grow p-4 mt-4 justify-center items-center mx-auto bg-neutral-200 w-full rounded-l-[4rem] lg:w-80%">
                    <div className="ml-16 m-8">
                        <h1 className=" text-slate-800 text-4xl font-bold">
                            {pageTitle}
                        </h1>
                        <div className="mt-5">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutHome;
