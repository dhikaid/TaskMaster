import React from "react";
import SideBar from "../Elements/Home/SideBar";
import HeaderHome from "../Elements/Header/HeaderHome";

const HomeLayouts = ({ children, selectedGroup, onSelectGroup, onLogout }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <SideBar
                selectedGroup={selectedGroup}
                onSelectGroup={onSelectGroup}
            />
            <main className="flex-1 p-6">
                <HeaderHome onLogout={onLogout} />
                {children}
            </main>
        </div>
    );
};

export default HomeLayouts;
