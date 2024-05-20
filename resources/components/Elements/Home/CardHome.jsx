import React from "react";
import { MdVisibility, MdPlayArrow } from "react-icons/md";

const CardHome = ({ task }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case "On going":
                return "bg-yellow-400";
            case "Pending":
                return "bg-green-400";
            case "Error":
                return "bg-red-500";
            default:
                return "bg-gray-400";
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-40">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <span
                        className={`w-3 h-3 rounded-full mr-2 ${getStatusClass(
                            task.status
                        )}`}
                    ></span>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                </div>
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
            <div className="flex justify-end space-x-2 mt-2">
                <button
                    className={`bg-${
                        task.status === "Pending" ? "green" : "gray"
                    }-500 text-white rounded px-4 py-2 hover:bg-${
                        task.status === "Pending" ? "green" : "gray"
                    }-600 focus:outline-none flex items-center`}
                >
                    {task.status === "Pending" ? (
                        <>
                            <MdPlayArrow className="w-4 h-4 mr-1" /> Start
                        </>
                    ) : (
                        task.status
                    )}
                </button>
            </div>
        </div>
    );
};

export default CardHome;
