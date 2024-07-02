import React from "react";
import InputPassword from "../Elements/input/InputPassword";
import LabelInput from "../Elements/input/LabelInput";

const OldPasswordForm = ({ old_password, onChange, onSubmit, error }) => (
    <form onSubmit={onSubmit} className="flex flex-col w-full">
        <LabelInput label="Old Password" error={error}>
            <InputPassword
                autoComplete="off"
                name="old_password"
                value={old_password}
                onChange={onChange}
                className="bg-gray-100 outline-none text-sm flex-1 text-start text-slate-900"
                placeholder="Enter your old password"
            />
        </LabelInput>
    </form>
);

export default OldPasswordForm;
