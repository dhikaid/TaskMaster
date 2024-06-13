import React from "react";

function ButtonHome(props) {
    const { children, onClick } = props;
    return (
        <button
            className=" border-2 border-blue-500 bg-blue-500 px-6 py-2 rounded-lg inline-block font-semibold hover:bg-blue-600 text-white "
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonHome;
