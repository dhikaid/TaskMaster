import React, { useState, useEffect } from "react";
import { MdPerson } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const TaskCard = ({ task, openModal }) => {
    const [isActive, setIsActive] = useState(false);
    const [isXL, setIsXL] = useState(false);
    const [isMD, setIsMD] = useState(false);

    const handleCardClick = () => {
        setIsActive(!isActive);
        openModal(task);
    };

    const updateScreenSize = () => {
        const width = window.innerWidth;
        setIsXL(width >= 1024);
        setIsMD(width >= 768 || 640);
    };

    useEffect(() => {
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return (
        <button
            onClick={handleCardClick}
            className={`flex ${
                isXL ? "flex-row" : "flex-col"
            } items-stretch justify-between mb-4 bg-neutral-200 rounded-2xl mt-2 focus:outline-none w-full mx-auto border-[3px] hover:border-blue-500`}
        >
            {isMD && !isXL && (
                <>
                    <div
                        className={`relative flex flex-col justify-center text-white rounded-t-xl ${task.bgColor} p-4`}
                    >
                        <p className="font-semibold">{task.status}</p>
                        <p>
                            {task.status === "COMPLETED"
                                ? "COMPLETE:"
                                : "DEADLINE:"}{" "}
                            {task.deadline}
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 pt-1.5 pr-1.5">
                        <BiMenuAltRight className="w-8 h-8" />
                    </div>
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
                </>
            )}

            {isXL && (
                <>
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
                    <div className=" relative top-2 right-2 pt-1.5 pr-1.5">
                        <BiMenuAltRight className="w-8 h-8" />
                    </div>
                    <div
                        className={`relative flex flex-col justify-center text-white rounded-r-xl ${task.bgColor} items-end p-4 w-52`}
                    >
                        <div className="text-right">
                            <p className="font-semibold pt-2">{task.status}</p>
                            <p className="pt-4">
                                {task.status === "COMPLETED"
                                    ? "COMPLETE:"
                                    : "DEADLINE:"}{" "}
                                {task.deadline}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </button>
    );
};

export default TaskCard;
