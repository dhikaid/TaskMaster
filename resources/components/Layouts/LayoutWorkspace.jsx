import React from "react";
import SideBarHome from "../Fragments/SideBarHome";
import HeaderTask from "../Fragments/HeaderTask";
import TaskList from "./CardTask";

const LayoutHome = () => {
    return (
        <div className="flex h-screen">
            <SideBarHome />
            <div className="flex-grow p-4 pl-64 mt-16 relative"></div>
        </div>
    );
};

export default LayoutHome;
