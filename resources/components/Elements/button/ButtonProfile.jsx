import React from "react";

const ButtonProfile = ({ type, onClick, children, className }) => (
    <button
        type={type}
        onClick={onClick}
        className={
            "border-2 border-blue-500 bg-blue-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-blue-600 text-white mt-2 text-sm" +
            className
        }
    >
        {children}
    </button>
);

export default ButtonProfile;
