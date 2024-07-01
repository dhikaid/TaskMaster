import React from "react";

const InputPassword = ({
    autoComplete,
    name,
    value,
    onChange,
    className,
    placeholder,
}) => {
    return (
        <input
            type="password"
            autoComplete={autoComplete}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
        />
    );
};

export default InputPassword;
