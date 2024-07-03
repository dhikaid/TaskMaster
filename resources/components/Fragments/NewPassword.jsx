import React from "react";
import InputPassword from "../Elements/input/InputPassword";
import LabelInput from "../Elements/input/LabelInput";

const ResetPasswordForm = ({
    password1,
    password2,
    onChange,
    onSubmit,
    errors,
}) => (
    <form onSubmit={onSubmit} className="flex flex-col w-full">
        <LabelInput label="New Password" error={errors.password1}>
            <InputPassword
                required
                autoComplete="off"
                name="password1"
                value={password1}
                onChange={onChange}
                className={`bg-gray-100 outline-none text-sm flex-1 text-start ${
                    errors.password1 ? "border-red-500" : ""
                }`}
                placeholder="Enter your new password"
            />
            {errors.password1 && (
                <div className="text-red-500 text-xs mt-1">
                    {errors.password1}
                </div>
            )}
        </LabelInput>
        <LabelInput label="Confirm Password" error={errors.password2}>
            <InputPassword
                autoComplete="off"
                name="password2"
                value={password2}
                onChange={onChange}
                className={`bg-gray-100 outline-none text-sm flex-1 text-start ${
                    errors.password2 ? "border-red-500" : ""
                }`}
                placeholder="Confirm your new password"
            />
            {errors.password2 && (
                <div className="text-red-500 text-xs mt-1">
                    {errors.password2}
                </div>
            )}
        </LabelInput>
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-3xl mt-4"
        >
            Submit
        </button>
    </form>
);

export default ResetPasswordForm;
