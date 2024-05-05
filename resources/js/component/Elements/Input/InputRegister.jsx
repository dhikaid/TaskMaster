// InputRegister.jsx
import React from "react";
import { MdPersonOutline } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa"; // Perbaiki impor ini

const InputRegister = ({ type, name, placeholder, value, onChange, icon }) => {
    const Icon = icon === "person" ? MdPersonOutline : FaRegEnvelope;
    return (
        <div className="formGroup mb-3 w-80">
            <div className="bg-gray-100 p-2 flex items-center rounded-lg">
                <Icon className="text-gray-400 m-2" />
                <input
                    required
                    autoComplete="off"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default InputRegister;
