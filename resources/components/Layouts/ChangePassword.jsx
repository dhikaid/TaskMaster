import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useRef,
} from "react";
import { usePage, router } from "@inertiajs/react";
import InputPassword from "../Elements/input/InputPassword";
import ButtonForm from "../Elements/button/ButtonForm";
import LabelPassword from "../Elements/input/LabelPassword";
import ModalChangePw from "../Elements/Modal/ModalChangePw";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const ChangePassword = forwardRef(({ user, isPassword }, ref) => {
    const { errors, csrf, flash } = usePage().props;
    const csrfRef = useRef(csrf);

    const [old_password, setOldPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isAlert, setIsAlert] = useState({});

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
            await router.post(
                `/profile/${user.uuid}`,
                {
                    old_password,
                    password1,
                    password2,
                    _token: csrfRef.current.value,
                },
                {
                    onProgress: (page) => {
                        setIsLoading(true);
                    },
                    onSuccess: (page) => {
                        setIsAlert(page.props.flash);
                        setIsLoading(false);
                        if (page.props.flash.message.status === 200) {
                            setOldPassword("");
                            setPassword1("");
                            setPassword2("");
                            setTimeout(() => {
                                setIsAlert({});
                            }, 2000);
                        }
                    },
                    onError: () => {
                        setIsLoading(false);
                    },
                }
            );

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

                {isAlert.message && (
                    <div
                        className={`bg-gray-100 border-t-4 max-w-lg mx-auto ${
                            isAlert.message.status === 200
                                ? "border-green-500"
                                : "border-red-500"
                        } border-1 rounded-lg p-1 mb-4 flex items-center`}
                    >
                        <div className="flex items-center justify-center rounded-l-lg mr-2 px-2">
                            {isAlert.message.status === 200 ? (
                                <FaCircleCheck className="text-3xl text-green-500" />
                            ) : (
                                <MdError className="text-4xl text-red-500" />
                            )}
                        </div>
                        <div>
                            <h2
                                className={`font-bold text-md text-left ${
                                    isAlert.message.status === 200
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {isAlert.message.status === 200
                                    ? "Success!"
                                    : "Error!"}
                            </h2>
                            <p
                                className={`text-sm text-start ${
                                    isAlert.message.status === 200
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {isAlert.message.message}
                            </p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <input
                        type="hidden"
                        name="_token"
                        value={csrf}
                        ref={csrfRef}
                    />
                    <LabelPassword
                        label="Old Password"
                        error={errors.old_password}
                    >
                        <InputPassword
                            autoComplete="off"
                            name="old_password"
                            value={old_password}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start w-full"
                            placeholder="Enter your old password"
                        />
                    </LabelPassword>
                    <LabelPassword
                        label="New Password"
                        error={errors.password1}
                    >
                        <InputPassword
                            autoComplete="off"
                            name="password1"
                            value={password1}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start w-full"
                            placeholder="Enter your new password"
                        />
                    </LabelPassword>
                    <LabelPassword
                        label="Confirm Password"
                        error={errors.password2}
                    >
                        <InputPassword
                            autoComplete="off"
                            name="password2"
                            value={password2}
                            onChange={handleChange}
                            className="bg-gray-100 outline-none text-sm flex-1 text-start w-full"
                            placeholder="Confirm your new password"
                        />
                    </LabelPassword>
                    <ButtonForm
                        type="submit"
                        disabled={isLoading}
                        isloading={isLoading}
                        className="my-8 mb-5 w-full m-auto"
                    >
                        {isLoading ? `Saving...` : "Save Profile"}
                    </ButtonForm>
                </form>
            </ModalChangePw>
        </>
    );
});

export default ChangePassword;
