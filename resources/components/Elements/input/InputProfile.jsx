import React from "react";

const InputProfile = ({ label, error, children }) => (
    <div className="formgroup w-full sm:w-10/12 max-auto mx-auto">
        <div className="mb-3">
            <label className="block font-medium text-slate-700 text-start ">
                {label}
            </label>
            <div className="bg-gray-100 p-2 flex items-center rounded-lg">
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
