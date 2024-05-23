import React from "react";
const Button = (props) => {
    const { children, onClick } = props;
    return (
        <button
            className="border-2 border-blue-500 bg-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 text-white mt-2"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
