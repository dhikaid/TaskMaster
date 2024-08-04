import React from "react";

const InputCreateTask = ({
    autoComplete,
    name,
    value,
    onChange,
    className,
    placeholder,
    error,
    type,
}) => {
    return (
        <div className="relative w-full flex items-center">
            <input
                autoComplete={autoComplete}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`${className} ${
                    error ? "border-red-500" : ""
                } bg-gray-100 outline-none text-sm flex-1 text-start pr-10 p-2`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputCreateTask;
