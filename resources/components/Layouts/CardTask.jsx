import React from "react";
import { MdVisibility } from "react-icons/md";

const tasks = [
    {
        id: 1,
        title: "UI Elements Design",
        assignedTo: "Rafli Ganteng",
        status: "On going",
        statusClass: "bg-yellow-400",
    },
    {
        id: 2,
        title: "Project Submission",
        assignedTo: "Shane Wals & Rudy B.",
        status: "On going",
        statusClass: "bg-yellow-400",
    },
    {
        id: 3,
        title: "Front End: Vue JS Part:1",
        assignedTo: "Max R.",
        status: "Pending",
        statusClass: "bg-green-400",
    },
];

const getTaskStatusClass = (status) => {
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

const CardTask = ({ task }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <span
                        className={`w-3 h-3 rounded-full mr-2 ${getTaskStatusClass(
                            task.status
                        )}`}
                    ></span>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">- {task.assignedTo}</p>
            <div className="flex justify-end mt-auto">
                <button className="bg-blue-500 text-white rounded px-4 py-2 mr-2 hover:bg-blue-600 focus:outline-none">
                    <MdVisibility className="w-4 h-4" />
                    <span className="sr-only">View</span>
                </button>
                <button
                    className={`bg-${
                        task.status === "Pending" ? "green" : "gray"
                    }-500 text-white rounded px-4 py-2 hover:bg-${
                        task.status === "Pending" ? "green" : "gray"
                    }-600 focus:outline-none`}
                >
                    {task.status === "Pending" ? (
                        <>
                            <MdVisibility className="w-4 h-4 mr-1" /> Start
                        </>
                    ) : (
                        task.status
                    )}
                </button>
            </div>
        </div>
    );
};

const TaskList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 -100 h-20">
            {tasks.map((task) => (
                <CardTask key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
