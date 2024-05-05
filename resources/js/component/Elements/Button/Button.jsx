// Button.jsx
import React from "react";

const Button = ({ onClick, children }) => {
    return (
        <button
            className="border-2 border-sky-300 bg-sky-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-500 text-white mt-2"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
