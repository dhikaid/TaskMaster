import React from "react";

const HeaderHome = ({ onLogout }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Tasks</h1>
            <button
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
                onClick={onLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default HeaderHome;
