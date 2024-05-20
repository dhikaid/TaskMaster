import React from "react";
import { MdAdd } from "react-icons/md";

const TaskGroups = ({ selectedGroup, onGroupChange }) => {
    const groups = ["My Tasks", "Pending Tasks", "All Tasks"];

    return (
        <div className="flex space-x-4 mb-6">
            {groups.map((group) => (
                <button
                    key={group}
                    className={`px-4 py-2 rounded-full font-medium ${
                        selectedGroup === group
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => onGroupChange(group)}
                >
                    {group}
                </button>
            ))}
            <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none flex items-center">
                <MdAdd className="w-5 h-5 mr-2" /> Add New Group
            </button>
        </div>
    );
};

export default TaskGroups;
