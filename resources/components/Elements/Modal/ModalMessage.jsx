import React from "react";
import { MdError } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ModalMessage = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-25"
                onClick={onClose}
            ></div>
            <div
                className={`relative bg-gray-100 border-t-4 max-w-lg w-full mx-4 ${
                    message.status === 200
                        ? "border-green-500"
                        : "border-red-500"
                } rounded-lg p-4 mb-4 flex flex-col items-center`}
            >
                <div className="flex items-center justify-center rounded-l-lg mb-2 px-2">
                    {message.status === 200 ? (
                        <AiOutlineCheckCircle className="text-4xl text-white bg-green-500 rounded-full" />
                    ) : (
                        <MdError className="text-4xl text-red-500" />
                    )}
                </div>
                <div className="text-center">
                    <h2
                        className={`font-bold text-lg ${
                            message.status === 200
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {message.status === 200 ? "Success!" : "Error!"}
                    </h2>
                    <p
                        className={`text-md ${
                            message.status === 200
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {message.message}
                    </p>
                    <button
                        className="mt-4 bg-neutral-800 hover:bg-neutral-900 border-neutral-600 text-white py-2 px-4 rounded-3xl"
                        onClick={onClose}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalMessage;
