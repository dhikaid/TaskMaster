import React from "react";
import LabelInput from "./LabelInput";
import { MdPersonOutline, MdLockOutline } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

const InputFormGeneric = ({
    username,
    email,
    password,
    password1,
    password2,
    handleChange,
    errors,
    isSignUp,
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
                    onChange={handleChange}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </LabelInput>
            {isSignUp && (
                <LabelInput
                    label="Email"
                    icon={<FaRegEnvelope className="text-gray-400 m-2" />}
                    error={errors.email}
                >
                    <input
                        required
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-sm flex-1 text-start"
                    />
                </LabelInput>
            )}
            <LabelInput
                label="Password"
                icon={<MdLockOutline className="text-gray-400 m-2" />}
                error={isSignUp ? errors.password1 : errors.password}
            >
                <input
                    required
                    autoComplete="off"
                    type="password"
                    name={isSignUp ? "password1" : "password"}
                    placeholder="Enter your password"
                    value={isSignUp ? password1 : password}
                    onChange={handleChange}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </LabelInput>
            {isSignUp && (
                <LabelInput
                    label="Confirm Password"
                    icon={<MdLockOutline className="text-gray-400 m-2" />}
                    error={errors.password2}
                >
                    <input
                        required
                        autoComplete="off"
                        type="password"
                        name="password2"
                        placeholder="Confirm your password"
                        value={password2}
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-sm flex-1 text-start"
                    />
                </LabelInput>
            )}
        </div>
    );
};

export default InputFormGeneric;
