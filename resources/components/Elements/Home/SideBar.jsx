import React from "react";
import {
    MdOutlineCalendarToday,
    MdGroup,
    MdOutlineFolder,
    MdSettings,
} from "react-icons/md";

const SideBar = ({ selectedGroup, onSelectGroup }) => {
    const groups = [
        {
            name: "My Tasks",
            icon: <MdOutlineCalendarToday className="w-5 h-5 mr-2" />,
        },
        { name: "Members", icon: <MdGroup className="w-5 h-5 mr-2" /> },
        {
            name: "File Management",
            icon: <MdOutlineFolder className="w-5 h-5 mr-2" />,
        },
        { name: "Settings", icon: <MdSettings className="w-5 h-5 mr-2" /> },
    ];

    return (
        <aside className="w-64 bg-blue-700 text-white p-4">
            <h3 className="text-2xl font-semibold my-2">Task Master</h3>
            <div className="border-2 w-28 border-white inline-block mb-6 ml-5"></div>
            <ul>
                {groups.map((group) => (
                    <li key={group.name} className="mb-2">
                        <button
                            className={`flex items-center px-4 py-2 rounded ${
                                selectedGroup === group.name
                                    ? "bg-blue-500"
                                    : ""
                            }`}
                            onClick={() => onSelectGroup(group.name)}
                        >
                            {group.icon}
                            {group.name}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
