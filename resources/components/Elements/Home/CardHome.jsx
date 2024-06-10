import React from "react";
import { MdVisibility, MdPlayArrow } from "react-icons/md";

const CardHome = ({ task }) => {
    const statusClasses = {
        "On going": { name: "On going", class: "bg-yellow-400" },
        Pending: { name: "Pending", class: "bg-green-400" },
        Error: { name: "Error", class: "bg-red-500" },
        Unknown: { name: "Unknown", class: "bg-gray-400" },
    };

    const statusInfo = statusClasses[task.status] || statusClasses["Unknown"];

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-40">
            <div className="flex justify-between items-center mb-2">
                <div className="text-white text-xs w-10">
                    <span className={` rounded-lg mr-2 ${statusInfo.class}`}>
                        {statusInfo.name}
                    </span>
                </div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
                - {task.assignedTo}
            </p>
            <div className="flex-grow mt-4"></div>
            <div className="flex justify-end space-x-2">
                <button
                    className={`bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none flex items-center`}
                >
                    <MdVisibility className="w-4 h-4 mr-1" />
                    View
                </button>
            </div>
        </div>
    );
};

export default CardHome;
