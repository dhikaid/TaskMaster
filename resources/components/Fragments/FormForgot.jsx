import React, { useRef, useState } from "react";
import InputFormForgot from "../Elements/input/InputFormForgot";
import { usePage, router } from "@inertiajs/react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import ButtonForm from "../Elements/button/ButtonForm";

const FormForgot = ({
    email,
    password1,
    password2,
    handleChange,
    isForgot,
    tokenReset,
}) => {
    const { errors, flash } = usePage().props;
    const csrfRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const csrfToken = csrfRef.current.value;
        try {
            setIsLoading(true);
            await router.post(
                isForgot ? "/oauth/forgot" : "/oauth/reset",
                {
                    email,
                    password1,
                    password2,
                    token: tokenReset,
                    _token: csrfToken,
                },
                {
                    onProgress: (page) => {
                        setIsLoading(true);
                    },
                    onSuccess: (page) => {
                        setIsLoading(false);
                    },
                    onError: () => {
                        setIsLoading(false);
                    },
                }
            );
        } catch (error) {
            console.error("Error during password reset:", error);
            setIsLoading(false);
        }
    };

    const handleSignInClick = (event) => {
        event.preventDefault();
        router.visit("/signin");
    };

    return (
        <div>
            {flash.message && (
                <div
                    className={`bg-gray-100 border-t-4 max-w-80 mx-auto ${
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
            {!flash.message && (
                <p className="text-sm mb-5 text-slate-400 text-center">
                    {isForgot
                        ? "Please enter the email address you'd like your password reset information sent to."
                        : "Enter the new password, now you can change it"}
                </p>
            )}
            <input
                type="hidden"
                name="_token"
                value={usePage().props.csrf}
                ref={csrfRef}
                onChange={handleChange}
            />
            <InputFormForgot
                email={email}
                password1={password1}
                password2={password2}
                handleChange={handleChange}
                errors={errors}
                isForgot={isForgot}
                tokenReset={tokenReset}
            />
            <div className="mt-16"></div>
            <ButtonForm
                onClick={handleSubmit}
                disabled={isLoading}
                isloading={isLoading}
            >
                {isLoading
                    ? isForgot
                        ? "Sending..."
                        : "Saving..."
                    : isForgot
                    ? "Reset Password"
                    : "Change Password"}
            </ButtonForm>
            <p className="text-center mt-2 block xl:hidden text-xs my-4 pt-2">
                Already have an account?{" "}
                <a
                    href="#"
                    onClick={handleSignInClick}
                    className="text-blue-500"
                >
                    Sign In
                </a>
            </p>
        </div>
    );
};

export default FormForgot;
