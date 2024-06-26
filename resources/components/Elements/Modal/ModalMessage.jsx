import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

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
                        <FaCircleCheck className="text-3xl text-green-500" />
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
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl"
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
