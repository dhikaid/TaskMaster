import React from "react";
import SideBarHome from "../Fragments/SideBarHome";
import Navbar from "../Fragments/Navbar";
import HeaderTask from "../Fragments/HeaderTask";
import TaskList from "./CardTask";

const LayoutHome = () => {
    return (
        <div className="flex h-screen">
            <Navbar />
            <SideBarHome />
            <div className="flex-grow p-4 pl-64 mt-16 relative">
                <HeaderTask />
                <TaskList />
            </div>
        </div>
    );
};

export default LayoutHome;
