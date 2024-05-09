// InputForm.jsx
import React from "react";
import LabelInput from "./LabelInput";
import { MdPersonOutline, MdLockOutline } from "react-icons/md";

const InputFormSignIn = ({
    username,
    password,
    setUsername,
    setPassword,
    errors,
}) => {
    return (
        <div>
            <LabelInput
                label="Username"
                icon={<MdPersonOutline className="text-gray-400 m-2" />}
                error={errors.username}
            >
                <input
                    required
                    autoComplete="off"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </LabelInput>
            <LabelInput
                label="Password"
                icon={<MdLockOutline className="text-gray-400 m-2" />}
                error={errors.password}
            >
                <input
                    required
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </LabelInput>
        </div>
    );
};

export default InputFormSignIn;
