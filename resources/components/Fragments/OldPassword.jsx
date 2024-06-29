import React from "react";
import InputPassword from "../Elements/input/InputPassword";
import ButtonProfile from "../Elements/button/ButtonProfile";
import LabelInput from "../Elements/input/LabelInput";
const OldPasswordForm = ({ oldPassword, onChange, onSubmit, error }) => (
    <form onSubmit={onSubmit} className="flex flex-col w-full">
        <LabelInput label="Old Password" error={error}>
            <InputPassword
                autoComplete="off"
                name="oldPassword"
                value={oldPassword}
                onChange={onChange}
                className="bg-gray-100 outline-none text-sm flex-1 text-start"
                placeholder="Enter your old password"
            />
        </LabelInput>
        <ButtonProfile
            className="flex items-center justify-center mx-auto"
            type="submit"
        >
            Verify Password
        </ButtonProfile>
    </form>
);

export default OldPasswordForm;
