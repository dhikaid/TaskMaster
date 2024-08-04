import React from "react";
import { MdPerson } from "react-icons/md";
import { BiPencil, BiTrash, BiSolidSend } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";
const ChatTask = ({ task }) => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl ">
                    Task: <span className="font-bold">{task.title}</span>
                    <button>
                        <BiPencil className="w-4 h-4 ml-1 mr-2 mb-2" />
                    </button>
                    <span className="px-4 py-1 rounded-full text-white bg-yellow-500 text-sm ">
                        ON REVIEW
                    </span>
                </h2>
            </div>
            <div className="flex justify-start space-x-2 mb-8 text-sm  ">
                <button className="bg-blue-500 text-white px-6 py-1 rounded-full flex items-center">
                    <HiOutlineStatusOnline className="w-6 h-6 items-center mr-2" />
                    Change Status
                </button>
                <button className="bg-red-500 text-white px-6 py-1 rounded-full flex items-center">
                    <BiTrash className="w-6 h-6 items-center mr-2" />
                    Remove
                </button>
            </div>
            <div className="space-y-6 mb-4 mt-4">
                <div className="flex items-center space-x-2">
                    <MdPerson className="w-6 h-6" />
                    <div className="bg-neutral-300 p-2 rounded-lg flex-1">
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold">BUDI</p>
                            <p className="text-sm text-gray-600">
                                Monday, 10 Aug 2020
                            </p>
                        </div>
                        <p>File project sudah saya serahkan ya pak.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <MdPerson className="w-6 h-6" />
                    <div className="bg-neutral-300 p-2 rounded-lg flex-1">
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold">Me</p>
                            <p className="text-sm text-neutral-600">
                                Monday, 10 Aug 2020
                            </p>
                        </div>
                        <p>IYa R4af1 g4nt3n9</p>
                    </div>
                </div>
            </div>
            <div className="mb-4 mt-4">
                <label className="block text-neutral-700 ">Notes</label>
                <textarea
                    className="w-full p-2 border border-neutral-300 rounded-md"
                    placeholder="Value"
                ></textarea>
            </div>
            <div className="flex justify-end">
                <button className="bg-black text-white px-5 py-2 rounded-full flex">
                    Send <BiSolidSend className="w-5 h-5 items-center ml-2" />
                </button>
            </div>
        </div>
    );
};

export default ChatTask;
