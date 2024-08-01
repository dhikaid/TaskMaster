import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const TaskCard = ({ task }) => {
    const [isActive, setIsActive] = useState(false);

    const handleCardClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button
            onClick={handleCardClick}
            className={`flex items-stretch justify-between mb-4 bg-neutral-300 rounded-2xl mt-2 focus:outline-none w-full mx-auto ${
                isActive ? "border-4 border-blue-500" : ""
            }`}
        >
            <div className="flex-1 p-4 pl-6 text-left">
                <h3 className="text-lg">Task :</h3>
                <p className="text-lg font-semibold">{task.title}</p>
                <div className="flex space-x-2 mt-2">
                    <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <MdPerson />
                    </div>
                    <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <MdPerson />
                    </div>
                </div>
            </div>
            <div className="top-4 right-2 pt-1.5 pr-1.5">
                <BiMenuAltRight className="w-8 h-8" />
            </div>
            <div
                className={`relative flex flex-col justify-center text-white w-[25%] rounded-r-2xl ${task.bgColor} items-end p-4`}
            >
                <div className="absolute top-0 right-0 p-4 text-right ">
                    <p className="font-semibold text-xl pt-2">{task.status}</p>
                    <p className="text-lg pt-4">
                        {task.status === "COMPLETED"
                            ? "COMPLETE:"
                            : "DEADLINE:"}{" "}
                        {task.deadline}
                    </p>
                </div>
            </div>
        </button>
    );
};

export default TaskCard;
