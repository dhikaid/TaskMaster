import React from "react";
import LabelInput from "./LabelInput";
import { FaRegEnvelope, FaLock } from "react-icons/fa";

const InputFormForgot = ({
    email,
    password1,
    password2,
    handleChange,
    errors,
    csrf,
    isForgot,
}) => {
    return (
        <div>
            {isForgot && (
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
            {!isForgot && (
                <>
                    <LabelInput
                        label="Password"
                        icon={<FaLock className="text-gray-400 m-2" />}
                        error={errors.password1}
                    >
                        <input
                            required
                            autoComplete="off"
                            type="password"
                            name="password1"
                            placeholder="Enter your new password"
                            value={password1}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start"
                        />
                    </LabelInput>
                    <LabelInput
                        label="Confirm Password"
                        icon={<FaLock className="text-gray-400 m-2" />}
                        error={errors.password2}
                    >
                        <input
                            required
                            autoComplete="off"
                            type="password"
                            name="password2"
                            placeholder="Confirm your new password"
                            value={password2}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start"
                        />
                    </LabelInput>
                </>
            )}
            <input type="hidden" name="_token" required value={csrf} />
        </div>
    );
};

export default InputFormForgot;
