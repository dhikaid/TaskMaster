import React from "react";

const Textarea = ({ name, value, onChange, className, autoComplete }) => (
    <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        autoComplete={autoComplete}
    />
);

export default Textarea;
