import React from "react";

const InputProfile = ({ label, error, children }) => (
    <div className="formgroup w-full sm:w-10/12 max-auto mx-auto">
        <div className="mb-3">
            <label className="block font-medium text-slate-700 text-start ">
                {label}
            </label>
            <div
                className={`p-2 flex items-center rounded-lg bg-gray-100 ${
                    error ? "border-red-500 border-2" : "border-gray-300"
                } focus-within:border-blue-500 hover:border-blue-500 shadow-sm focus-within:border-2`}
            >
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

export default InputProfile;
