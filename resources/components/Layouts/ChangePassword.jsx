import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import InputPassword from "../Elements/input/InputPassword";
import ButtonProfile from "../Elements/button/ButtonProfile";
import LabelInput from "../Elements/input/LabelInput";
import MessageError from "../Elements/popup/MessageError";
import ModalChangePw from "../Elements/Modal/ModalChangePw";

const ChangePassword = ({ user }) => {
    const { errors, flash, csrf } = usePage().props;
    const csrfRef = React.useRef(null);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "oldPassword") setOldPassword(value);
        if (name === "newPassword") setNewPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await router.put(`/profile/${user.uuid}/change-password`, {
                oldPassword,
                newPassword,
                confirmPassword,
                _token: csrfRef.current.value,
            });

            setIsModalOpen(false);
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            console.error("Error during password change:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-full flex flex-col items-center">
            {flash.message && <MessageError message={flash.message} />}
            <ButtonProfile
                onClick={openModal}
                className="flex items-center justify-center mx-auto"
            >
                Change Password
            </ButtonProfile>
            <ModalChangePw isOpen={isModalOpen} onClose={closeModal}>
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <div className="text-xl font-bold my-4 text-center text-neutral-700">
                        Change Password
                    </div>
                    <LabelInput label="Old Password" error={errors.oldPassword}>
                        <InputPassword
                            autoComplete="off"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start"
                            placeholder="Enter your old password"
                        />
                    </LabelInput>
                    <LabelInput label="New Password" error={errors.newPassword}>
                        <InputPassword
                            autoComplete="off"
                            name="newPassword"
                            value={newPassword}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start"
                        />
                    </LabelInput>
                    <LabelInput
                        label="Confirm Password"
                        error={errors.confirmPassword}
                    >
                        <InputPassword
                            autoComplete="off"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start"
                        />
                    </LabelInput>
                    <ButtonProfile
                        className="flex items-center justify-center mx-auto"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Saving..." : "Change Password"}
                    </ButtonProfile>
                </form>
            </ModalChangePw>
        </div>
    );
};

export default ChangePassword;
