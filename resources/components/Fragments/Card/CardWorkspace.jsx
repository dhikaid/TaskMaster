import React from "react";
import { MdPerson } from "react-icons/md";

const CardWorkspace = ({ title, creator, members, onViewTask }) => {
    return (
        <div className="bg-gray-200 p-4 h-56 rounded-xl shadow-md w-full m-2 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">
                    Created by <MdPerson className="inline-block" /> {creator}
                </p>
                <p className="text-gray-700 mt-2">Members</p>
                <div className="flex mt-1">
                    {members.map((member, index) => (
                        <MdPerson key={index} className="text-black mr-1" />
                    ))}
                </div>
            </div>
            <button
                onClick={onViewTask}
                className="mt-4 bg-white text-black font-bold py-2 px-2 rounded-xl hover:bg-gray-300"
            >
                VIEW TASK
            </button>
        </div>
    );
};

export default CardWorkspace;
