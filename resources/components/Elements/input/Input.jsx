import React from "react";

const Input = ({
    type,
    name,
    value,
    onChange,
    className,
    autoComplete,
    disabled,
}) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        autoComplete={autoComplete}
        disabled={disabled}
    />
);

export default Input;
