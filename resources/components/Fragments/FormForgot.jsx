import React from "react";
import InputFormForgot from "../Elements/input/InputFormForgot";
import Button from "../Elements/button/button";
import { usePage, router, Link } from "@inertiajs/react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const FormForgot = ({
    email,
    password1,
    password2,
    handleChange,
    isForgot,
}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await router.post(isForgot ? "/oauth/forgot" : "/oauth/reset", {
                email,
                password1,
                password2,
            });
        } catch (error) {
            console.error("Error during password reset:", error);
        }
    };
    const handleSignInClick = (event) => {
        event.preventDefault();
        router.visit("/signin");
    };

    const { errors, csrf, flash } = usePage().props;
    return (
        <div className="mt-10">
            {flash.message && (
                <div
                    className={`bg-gray-100 border-t-4 max-w-80 ${
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
            <InputFormForgot
                required
                autoComplete="off"
                email={email}
                password1={password1}
                password2={password2}
                handleChange={handleChange}
                errors={errors}
                csrf={csrf}
                isForgot={isForgot}
            />
            <div className="mt-16"></div>
            <Button onClick={handleSubmit}>
                {isForgot ? "Reset Password" : "Change Password"}
            </Button>

            <p className="text-center mt-2 block xl:hidden text-xs my-4 pt-2">
                Already have an account?{" "}
                <Link
                    href="#"
                    onClick={handleSignInClick}
                    className="text-sky-400"
                >
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default FormForgot;
