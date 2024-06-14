import React from "react";

const HeaderTask = () => {
    return (
        <div className="flex-grow p-2 pl-6 relative mt-4">
            <div className="flex space-x-4 mb-6">
                <button className="px-4 py-2 rounded-full font-medium bg-neutral-100">
                    My Task
                </button>
                <button className="px-4 py-2 rounded-full font-medium bg-neutral-100">
                    Pending
                </button>
                <button className="px-4 py-2 rounded-full font-medium bg-neutral-100">
                    All Task
                </button>
            </div>
        </div>
    );
};

export default HeaderTask;
