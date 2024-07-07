import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalChangePw = ({ isOpen, onClose, children, hasError }) => {
    if (!isOpen) return null;

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={handleClose}
                >
                    <FaTimes />
                </button>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default ModalChangePw;
