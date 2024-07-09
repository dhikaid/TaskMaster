import React, { Children } from "react";

const ButtonHome = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="inline-block text text-slate-800 hover:text-slate-900"
        >
            {children}
        </button>
    );
};

export default ButtonHome;
