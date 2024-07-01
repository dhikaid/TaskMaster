import React, { useState, useImperativeHandle, forwardRef } from "react";
import { usePage, router } from "@inertiajs/react";
import InputPassword from "../Elements/input/InputPassword";
import ButtonProfile from "../Elements/button/ButtonProfile";
import LabelInput from "../Elements/input/LabelInput";
import ModalChangePw from "../Elements/Modal/ModalChangePw";

const ChangePassword = forwardRef(({ user }, ref) => {
    const { errors, csrf } = usePage().props;
    const csrfRef = React.useRef(null);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Logic to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "oldPassword") setOldPassword(value);
        if (name === "newPassword") setNewPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    // Logic to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await router.put(`/profile/${user.uuid}/changePassword`, {
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

    // Functions to open and close the modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useImperativeHandle(ref, () => ({
        openModal,
    }));

    return (
        <ModalChangePw isOpen={isModalOpen} onClose={closeModal}>
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <div className="text-xl font-bold my-4 text-center text-neutral-700 mb-8">
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
                        placeholder="Enter your new password"
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
                        placeholder="Confirm your new password"
                    />
                </LabelInput>
                <ButtonProfile
                    type="submit"
                    disabled={isLoading}
                    className="my-8 mb-5 w-full sm:w-10/12 m-auto"
                >
                    {isLoading ? "Saving..." : "Change Password"}
                </ButtonProfile>
            </form>
        </ModalChangePw>
    );
});

export default ChangePassword;
