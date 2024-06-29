import React from "react";
import InputPassword from "../Elements/input/InputPassword";
import ButtonProfile from "../Elements/button/ButtonProfile";

const ResetPasswordForm = ({
    newPassword,
    confirmPassword,
    onChange,
    onSubmit,
    errors,
}) => (
    <form onSubmit={onSubmit} className="flex flex-col w-full">
        <LabelInput label="New Password" error={errors.newPassword}>
            <InputPassword
                autoComplete="off"
                name="newPassword"
                value={newPassword}
                onChange={onChange}
                className="bg-gray-100 outline-none text-sm flex-1 text-start"
            />
        </LabelInput>
        <LabelInput label="Confirm Password" error={errors.confirmPassword}>
            <InputPassword
                autoComplete="off"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                className="bg-gray-100 outline-none text-sm flex-1 text-start"
            />
        </LabelInput>
        <ButtonProfile
            className="flex items-center justify-center mx-auto"
            type="submit"
        >
            Reset Password
        </ButtonProfile>
    </form>
);

export default ResetPasswordForm;
