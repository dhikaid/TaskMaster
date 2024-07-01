import React from "react";

const InputProfile2 = ({ label, error, children }) => (
    <div className="formgroup w-80 max-auto mx-auto">
        <div className="mb-3">
            <label className="block text-sm font-semibold text-slate-900 text-start pl-2">
                {label}
            </label>
            <div className=" flex items-center pl-2">{children}</div>
            {error && (
                <div className="text-red-500 text-xs mt-1 text-start">
                    {error}
                </div>
            )}
        </div>
    </div>
);

export default InputProfile2;
