import React from "react";

const InputPassword = ({ name, value, onChange, className, autoComplete }) => (
    <input
        type="password"
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        autoComplete={autoComplete}
    />
);

export default InputPassword;
