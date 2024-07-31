import React from "react";
import Sidebar, { SidebarItem, useSidebar } from "../Fragments/SideBar";
import Navbar from "../Fragments/Navbar";
import {
    MdOutlineCalendarToday,
    MdOutlineFolder,
    MdWorkspaces,
} from "react-icons/md";
import { router } from "@inertiajs/react";

const LayoutIndex = ({ children, pageTitle, user, hideSidebar }) => {
    const { expanded } = useSidebar();

    const handleNavigation = (path) => {
        router.visit(path);
    };

    return (
        <div className="flex flex-col">
            <Navbar className="z-10" user={user} />
            <div className="flex flex-1">
                <Sidebar hide={hideSidebar} className="xl:hidden">
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
                <div
                    className={`flex-grow p-4 bg-neutral-200 xl:rounded-l-[4rem] overflow-hidden h-[calc(100dvh-96px)] ${
                        !expanded ? "xl:ml-20" : "xl:ml-72 "
                    }`}
                >
                    <div className="m-2 md:m-8 overflow-auto h-[calc(100dvh-10px)] pb-40 ">
                        <h1 className="text-slate-800 text-2xl md:text-4xl font-bold">
                            {pageTitle}
                        </h1>
                        <div className="mt-5">
                            <div className="w-full bg-neutral-200">
                                <div className="min-h-[calc(100dvh-240px)] border-2 border-neutral-200 p-4 rounded-[25px] shadow-sm flex bg-white flex-col md:flex-row">
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
