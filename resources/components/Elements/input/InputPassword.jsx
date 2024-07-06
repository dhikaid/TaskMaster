import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const InputPassword = ({
    autoComplete,
    name,
    value,
    onChange,
    className,
    placeholder,
    error,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassVisibility = () => setShowPassword(!showPassword);

    return (
        <div className="relative w-full flex items-center">
            <input
                autoComplete={autoComplete}
                type={showPassword ? "text" : "password"}
                name={name}
                value={value}
                onChange={onChange}
                className={`${className} ${
                    error ? "border-red-500" : ""
                } bg-gray-100 outline-none text-sm flex-1 text-start pr-10 p-2`}
                placeholder={placeholder}
                required
            />
            <button
                type="button"
                onClick={togglePassVisibility}
                className="absolute right-6 focus:outline-none"
            >
                {showPassword ? (
                    <MdVisibility className="text-gray-400" />
                ) : (
                    <MdVisibilityOff className="text-gray-400" />
                )}
            </button>
        </div>
    );
};

export default InputPassword;
