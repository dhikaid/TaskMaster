import React from "react";

const InputTeam = ({
    autoComplete,
    name,
    value,
    onChange,
    className,
    placeholder,
    error,
}) => {
    return (
        <div className="relative w-full flex items-center">
            <input
                autoComplete={autoComplete}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className={`${className} ${
                    error ? "border-red-500" : ""
                } bg-gray-100 outline-none text-sm flex-1 text-start pr-10 p-2`}
                placeholder={placeholder}
            />
            <button
                type="button"
                className="absolute right-6 focus:outline-none"
            ></button>
        </div>
    );
};

export default InputTeam;
