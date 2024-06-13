import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import {
    MdOutlineCalendarToday,
    MdGroup,
    MdOutlineFolder,
    MdSettings,
    MdAdd,
    MdVisibility,
    MdPlayArrow,
} from "react-icons/md";

function App(props) {
    const handleSubmit = () => {
        router.post("/logout");
    };

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "UI Elements Design",
            assignedTo: "John D.",
            status: "On going",
            group: "My Tasks",
        },
        {
            id: 2,
            title: "Project Submission",
            assignedTo: "Shane Wals & Rudy B.",
            status: "On going",
            group: "My Tasks",
        },
        {
            id: 3,
            title: "Front End: Vue JS Part:1",
            assignedTo: "Max R.",
            status: "Pending",
            group: "Pending Tasks",
        },
        {
            id: 4,
            title: "Front End: Form Validation",
            assignedTo: "Max R.",
            status: "Pending",
            group: "Pending Tasks",
        },
        {
            id: 5,
            title: "UI Elements Design",
            assignedTo: "Max R.",
            status: "On going",
            group: "All Tasks",
        },
        {
            id: 6,
            title: "Laravel: Database Integration",
            assignedTo: "Max R.",
            status: "Pending",
            group: "All Tasks",
        },
        {
            id: 7,
            title: "BarCode Integration",
            assignedTo: "Shane Wals & Rudy B.",
            status: "Pending",
            group: "All Tasks",
        },
        {
            id: 8,
            title: "PDF Part (Error)",
            assignedTo: "Shane Wals & Rudy B.",
            status: "Error",
            group: "All Tasks",
        },
    ]);
    const [selectedGroup, setSelectedGroup] = useState("My Tasks");
    const [hoveredGroup, setHoveredGroup] = useState(null);

    const handleGroupChange = (group) => {
        setSelectedGroup(group);
    };

    const handleGroupHover = (group) => {
        setHoveredGroup(group);
    };

    const handleGroupMouseLeave = () => {
        setHoveredGroup(null);
    };

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

    const { csrf } = usePage().props;

    return (
        <>
            <input type="hidden" name="csrf_token" value={csrf} />
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-blue-500 text-white p-4">
                    <h3 className="text-2xl font-semibold my-2">Task Master</h3>
                    <div className="border-2 w-28 border-white inline-block mb-6 ml-5"></div>
                    <ul>
                        <li className="mb-2">
                            <button
                                className={`flex items-center px-4 py-2 rounded ${
                                    selectedGroup === "My Tasks"
                                        ? "bg-blue-600"
                                        : hoveredGroup === "My Tasks"
                                        ? "bg-blue-600"
                                        : "bg-blue-500"
                                }`}
                                onMouseEnter={() =>
                                    handleGroupHover("My Tasks")
                                }
                                onMouseLeave={handleGroupMouseLeave}
                                onClick={() => handleGroupChange("My Tasks")}
                            >
                                <MdOutlineCalendarToday className="w-5 h-5 mr-2" />
                                Tasks
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                className={`flex items-center px-4 py-2 rounded ${
                                    selectedGroup === "Members"
                                        ? "bg-blue-600"
                                        : hoveredGroup === "Members"
                                        ? "bg-blue-600"
                                        : "bg-blue-500"
                                }`}
                                onMouseEnter={() => handleGroupHover("Members")}
                                onMouseLeave={handleGroupMouseLeave}
                                onClick={() => handleGroupChange("Members")}
                            >
                                <MdGroup className="w-5 h-5 mr-2" />
                                Members
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                className={`flex items-center px-4 py-2 rounded ${
                                    selectedGroup === "File Management"
                                        ? "bg-blue-600"
                                        : hoveredGroup === "File Management"
                                        ? "bg-blue-600"
                                        : "bg-blue-500"
                                }`}
                                onMouseEnter={() =>
                                    handleGroupHover("File Management")
                                }
                                onMouseLeave={handleGroupMouseLeave}
                                onClick={() =>
                                    handleGroupChange("File Management")
                                }
                            >
                                <MdOutlineFolder className="w-5 h-5 mr-2" />
                                File Management
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                className={`flex items-center px-4 py-2 rounded ${
                                    selectedGroup === "Settings"
                                        ? "bg-blue-600"
                                        : hoveredGroup === "Settings"
                                        ? "bg-blue-600"
                                        : "bg-blue-500"
                                }`}
                                onMouseEnter={() =>
                                    handleGroupHover("Settings")
                                }
                                onMouseLeave={handleGroupMouseLeave}
                                onClick={() => handleGroupChange("Settings")}
                            >
                                <MdSettings className="w-5 h-5 mr-2" />
                                Settings
                            </button>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Tasks</h1>
                        <div className="flex items-center">
                            <button
                                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
                                onClick={handleSubmit}
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Task Groups */}
                    <div className="flex space-x-4 mb-6">
                        <button
                            className={`px-4 py-2 rounded-full font-medium ${
                                selectedGroup === "My Tasks"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => handleGroupChange("My Tasks")}
                        >
                            My Tasks
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full font-medium ${
                                selectedGroup === "Pending Tasks"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => handleGroupChange("Pending Tasks")}
                        >
                            Pending Tasks
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full font-medium ${
                                selectedGroup === "All Tasks"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => handleGroupChange("All Tasks")}
                        >
                            All Tasks
                        </button>
                    </div>

                    {/* Add New Group */}
                    <div className="mb-6">
                        <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none">
                            <MdAdd className="w-5 h-5 mr-2" /> Add New Group
                        </button>
                    </div>

                    {/* Task List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks
                            .filter((task) => task.group === selectedGroup)
                            .map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-white rounded-lg shadow-md p-4 flex flex-col"
                                >
                                    {/* Task Header */}
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center">
                                            <span
                                                className={`w-3 h-3 rounded-full mr-2 ${getTaskStatusClass(
                                                    task.status
                                                )}`}
                                            ></span>
                                            <h3 className="text-lg font-semibold">
                                                {task.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Task Assignees */}
                                    <p className="text-gray-600 text-sm mb-4">
                                        - {task.assignedTo}
                                    </p>

                                    {/* Task Actions */}
                                    <div className="flex justify-end mt-auto">
                                        <button className="bg-blue-500 text-white rounded px-4 py-2 mr-2 hover:bg-blue-600 focus:outline-none relative">
                                            <MdVisibility className="w-4 h-4" />
                                            <span className="sr-only">
                                                View
                                            </span>
                                        </button>
                                        <button
                                            className={`bg-${
                                                task.status === "Pending"
                                                    ? "green"
                                                    : "gray"
                                            }-500 text-white rounded px-4 py-2 hover:bg-${
                                                task.status === "Pending"
                                                    ? "green"
                                                    : "gray"
                                            }-600 focus:outline-none`}
                                        >
                                            {task.status === "Pending" ? (
                                                <>
                                                    <MdPlayArrow className="w-4 h-4 mr-1" />{" "}
                                                    Start
                                                </>
                                            ) : (
                                                task.status
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
