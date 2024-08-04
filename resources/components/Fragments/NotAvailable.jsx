import React from "react";
import PropTypes from "prop-types";

const NotAvailable = ({ message }) => {
    return (
        <div className="flex justify-center items-center w-full h-[50vh]">
            <h1 className="text-3xl font-bold">{message}</h1>
        </div>
    );
};

export default NotAvailable;
