import React from "react";

const LabelPassword = ({ label, error, children }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-slate-800 pl-1">
            {label}
        </label>
        <div
            className={`p-1 flex items-center rounded-lg bg-gray-100 ${
                error ? "border-red-500 border-2" : "border-gray-300"
            } focus-within:border-blue-500 hover:border-blue-500 shadow-sm focus-within:border-2`}
        >
            {children}
        </div>
        {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
);

export default LabelPassword;
