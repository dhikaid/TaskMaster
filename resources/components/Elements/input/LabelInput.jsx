import React from "react";

const LabelInput = ({ label, icon, error, children }) => {
    return (
        <div className="formgroup w-full max-auto mx-auto">
            <div className="mb-3">
                <label className="block text-sm font-medium text-slate-500 text-start">
                    {label}
                </label>
                <div
                    className={`p-3 flex items-center rounded-lg bg-gray-100 ${
                        error ? "border-red-500 border-2" : "border-gray-300"
                    } focus-within:border-blue-500 hover:border-blue-500 shadow-sm focus-within:border-2`}
                >
                    {icon}
                    {children}
                </div>
                {error && (
                    <div className="text-red-500 text-xs mt-1 text-start">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LabelInput;
