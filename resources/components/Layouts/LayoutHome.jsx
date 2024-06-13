import React from "react";
import SideBarHome from "../Fragments/SideBarHome";

import Navbar from "../Fragments/Navbar";

const LayoutHome = () => {
    return (
        <div className="flex h-screen ">
            <Navbar />
            <div className="flex">
                <div className="flex-1 flex flex-col mt-16 p-6">
                    <main className="flex-1">
                        {/* Your main content goes here */}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default LayoutHome;
