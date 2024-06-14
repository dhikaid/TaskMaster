import React from "react";

function ButtonHome(props) {
    const { children, onClick } = props;
    return (
        <button
            className="px-6 py-2 rounded-lg inline-block font-semibold text-slate-700 hover:bg-neutral-300"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonHome;
