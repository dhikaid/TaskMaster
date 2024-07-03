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
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const ChangePassword = forwardRef(({ user }, ref) => {
    const { errors, csrf, flash } = usePage().props;
    const csrfRef = useRef(csrf);

    const [old_password, setOldPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
            await router.post(`/profile/${user.uuid}`, {
                old_password,
                password1,
                password2,
                _token: csrfRef.current,
            });

            if (
                !errors.old_password &&
                !errors.password1 &&
                !errors.password2 &&
                flash.message?.status === 200
            ) {
                setShowSuccessMessage(true);
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error("Error during password change:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeSuccessMessage = () => setShowSuccessMessage(false);

    const hasError = !!(
        errors.old_password ||
        errors.password1 ||
        errors.password2
    );

    useImperativeHandle(ref, () => ({
        openModal,
    }));

    return (
        <>
            <ModalChangePw
                isOpen={isModalOpen}
                onClose={closeModal}
                hasError={hasError}
            >
                <div className="text-xl font-bold my-4 text-center text-neutral-700 mb-6">
                    Change Password
                </div>
                {showSuccessMessage && (
                    <div className="bg-gray-100 border-t-4 max-w-lg mx-auto border-green-500 border-1 rounded-lg p-1 mb-4 flex items-center">
                        <div className="flex items-center justify-center rounded-l-lg mr-2 px-2">
                            <FaCircleCheck className="text-3xl text-green-500" />
                        </div>
                        <div>
                            <h2 className="font-bold text-md text-left text-green-500">
                                Success!
                            </h2>
                            <p className="text-sm text-start text-green-500">
                                Password changed successfully.
                            </p>
                            <ButtonProfile
                                onClick={closeSuccessMessage}
                                className="my-4 w-full"
                            >
                                Ok
                            </ButtonProfile>
                        </div>
                    </div>
                )}

                {flash.message && !showSuccessMessage && (
                    <div
                        className={`bg-gray-100 border-t-4 max-w-lg mx-auto ${
                            flash.message.status === 200
                                ? "border-green-500"
                                : "border-red-500"
                        } border-1 rounded-lg p-1 mb-4 flex items-center`}
                    >
                        <div className="flex items-center justify-center rounded-l-lg mr-2 px-2">
                            {flash.message.status === 200 ? (
                                <FaCircleCheck className="text-3xl text-green-500" />
                            ) : (
                                <MdError className="text-4xl text-red-500" />
                            )}
                        </div>
                        <div>
                            <h2
                                className={`font-bold text-md text-left ${
                                    flash.message.status === 200
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {flash.message.status === 200
                                    ? "Success!"
                                    : "Error!"}
                            </h2>
                            <p
                                className={`text-sm text-start ${
                                    flash.message.status === 200
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {flash.message.message}
                            </p>
                        </div>
                    </div>
                )}

                {!showSuccessMessage && (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col w-full"
                    >
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
                        <LabelInput
                            label="New Password"
                            error={errors.password1}
                        >
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
                )}
            </ModalChangePw>
        </>
    );
});

export default ChangePassword;
