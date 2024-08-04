import React from "react";
import { MdPerson } from "react-icons/md";

const CardWorkspace = ({ title, creator, members, onViewTask }) => {
    const maxTitle = title.length > 15 ? `${title.substring(0, 15)}...` : title;
    console.log(members);
    return (
        <div className="bg-gray-200 p-4 h-56 w-full rounded-xl shadow-md flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold mb-2">{maxTitle}</h2>
                <div className="text-gray-700">
                    <div className="flex gap-1 items-center">
                        Created by{" "}
                        <img
                            src={`/storage/${creator.image}`}
                            className="rounded-full w-5 h-5"
                            alt=""
                        />{" "}
                        {creator.username}
                    </div>
                </div>
                <p className="text-gray-700 mt-2">Members</p>
                <div className="flex mt-1">
                    <div className="flex gap-1 items-center">
                        {members.map((member) => (
                            <img
                                key={member.uuid}
                                src={`/storage/${member.image}`}
                                className="rounded-full w-5 h-5"
                                alt=""
                            />
                        ))}
                    </div>
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
