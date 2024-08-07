import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalTeam = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl shadow-lg w-11/12 max-w-lg relative p-4">
                <button
                    className="absolute top-3 right-3 text-neutral-800 hover:text-neutral-900 m-2"
                    onClick={handleClose}
                >
                    <AiOutlineCloseCircle className="w-[32px] h-[32px]" />
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default ModalTeam;
