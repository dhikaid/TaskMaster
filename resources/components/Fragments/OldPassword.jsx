import React from "react";
import InputPassword from "../Elements/input/InputPassword";
import LabelInput from "../Elements/input/LabelInput";

const OldPasswordForm = ({ old_password, onChange, onSubmit, error }) => (
    <form onSubmit={onSubmit} className="flex flex-col w-full">
        <LabelInput label="Old Password" error={error}>
            <InputPassword
                required
                autoComplete="off"
                name="old_password"
                value={old_password}
                onChange={onChange}
                className={`bg-gray-100 outline-none text-sm flex-1 text-start ${
                    error ? "border-red-500" : ""
                }`}
                placeholder="Enter your old password"
            />
            {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
        </LabelInput>
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-3xl mt-4"
        >
            Submit
        </button>
    </form>
);

export default OldPasswordForm;
