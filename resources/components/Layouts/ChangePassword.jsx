import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useRef,
} from "react";
import { usePage, router } from "@inertiajs/react";
import InputPassword from "../Elements/input/InputPassword";
import ButtonProfile from "../Elements/button/ButtonProfile";
import LabelInput from "../Elements/input/LabelInput";
import ModalChangePw from "../Elements/Modal/ModalChangePw";
import ModalMessage from "../Elements/Modal/ModalMessage";

const ChangePassword = forwardRef(({ user }, ref) => {
    const { errors, csrf } = usePage().props;
    const csrfRef = useRef(csrf);

    const [old_password, setOldPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState({ status: null, message: "" });
    const [modalMessageOpen, setModalMessageOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "old_password") setOldPassword(value);
        if (name === "password1") setPassword1(value);
        if (name === "password2") setPassword2(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await router.put(`/profile/${user.uuid}`, {
                old_password,
                password1,
                password2,
                _token: csrfRef.current,
            });

            setMessage({
                status: 200,
                message: "Password updated successfully!",
            });
        } catch (error) {
            setMessage({
                status: 400,
                message: "Error during password change. Please try again.",
            });
        } finally {
            setIsLoading(false);
            setIsModalOpen(false);
            setOldPassword("");
            setPassword1("");
            setPassword2("");
            setModalMessageOpen(true);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useImperativeHandle(ref, () => ({
        openModal,
    }));

    return (
        <>
            <ModalChangePw isOpen={isModalOpen} onClose={closeModal}>
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <div className="text-xl font-bold my-4 text-center text-neutral-700 mb-8">
                        Change Password
                    </div>
                    <LabelInput
                        label="Old Password"
                        error={errors.old_password}
                    >
                        <InputPassword
                            autoComplete="off"
                            name="old_password"
                            value={old_password}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start"
                            placeholder="Enter your old password"
                        />
                    </LabelInput>
                    <LabelInput label="New Password" error={errors.password1}>
                        <InputPassword
                            autoComplete="off"
                            name="password1"
                            value={password1}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start"
                            placeholder="Enter your new password"
                        />
                    </LabelInput>
                    <LabelInput
                        label="Confirm Password"
                        error={errors.password2}
                    >
                        <InputPassword
                            autoComplete="off"
                            name="password2"
                            value={password2}
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
            <ModalMessage
                isOpen={modalMessageOpen}
                message={message}
                onClose={() => setModalMessageOpen(false)}
            />
        </>
    );
});

export default ChangePassword;
