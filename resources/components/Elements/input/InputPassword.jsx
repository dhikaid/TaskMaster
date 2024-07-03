import React from "react";

const InputPassword = ({
    autoComplete,
    name,
    value,
    onChange,
    className,
    placeholder,
    errors,
}) => {
    return (
        <div className="w-full">
            <input
                type="password"
                autoComplete={autoComplete}
                name={name}
                value={value}
                onChange={onChange}
                className={`${className} ${errors ? "border-red-500" : ""}`}
                placeholder={placeholder}
                required
            />
            {errors && (
                <div className="text-red-500 text-xs mt-1 text-start">
                    {errors}
                </div>
            )}
        </div>
    );
};

export default InputPassword;
