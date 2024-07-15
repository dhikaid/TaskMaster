import React from "react";
import Sidebar, { SidebarItem } from "../Fragments/SideBar";
import Navbar from "../Fragments/Navbar";
import {
    MdOutlineCalendarToday,
    MdOutlineFolder,
    MdWorkspaces,
} from "react-icons/md";
import { router } from "@inertiajs/react";

const LayoutIndex = ({ children, pageTitle, user, hideSidebar }) => {
    const handleNavigation = (path) => {
        router.visit(path);
    };

    return (
        <div className="flex flex-col">
            <Navbar className="z-10" user={user} />
            <div className="flex flex-1 pt-[90px]">
                <Sidebar hide={hideSidebar}>
                    <SidebarItem
                        icon={<MdWorkspaces className="w-6 h-6" />}
                        text="Workspace"
                        onClick={() => handleNavigation("/home")}
                    />
                    <SidebarItem
                        icon={<MdOutlineCalendarToday className="w-6 h-6" />}
                        text="Task"
                        onClick={() => handleNavigation("/task")}
                    />
                    <SidebarItem
                        icon={<MdOutlineFolder className="w-6 h-6" />}
                        text="File Management"
                        onClick={() => handleNavigation("/file-management")}
                    />
                </Sidebar>
                <div className="flex-grow p-4 bg-neutral-200 rounded-l-[4rem]">
                    <div className="m-8">
                        <h1 className="text-slate-800 text-4xl font-bold">
                            {pageTitle}
                        </h1>
                        <div className="mt-5">
                            <div className="w-full bg-neutral-200">
                                <div className="xl:h-[67svh] h-full border-2 border-neutral-200 p-4 rounded-[25px] shadow-sm flex bg-white flex-col md:flex-row">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutIndex;
