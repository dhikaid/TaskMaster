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
                autoComplete="off"
                name="password1"
                value={password1}
                onChange={onChange}
                className="bg-gray-100 outline-none text-sm flex-1 text-start text-slate-900"
            />
        </LabelInput>
        <LabelInput label="Confirm Password" error={errors.password2}>
            <InputPassword
                autoComplete="off"
                name="password2"
                value={password2}
                onChange={onChange}
                className="bg-gray-100 outline-none text-sm flex-1 text-start"
            />
        </LabelInput>
    </form>
);

export default ResetPasswordForm;
