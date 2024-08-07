import React, { useState, useRef } from "react";
import InputFormGeneric from "../Elements/input/InputFormGeneric";
import ButtonSign from "../Elements/button/ButtonSign";
import { usePage, router, Link } from "@inertiajs/react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const FormGeneric = ({ inputs, formTitle, postRoute, isSignUp }) => {
    const { errors, flash, csrf } = usePage().props;
    const csrfRef = useRef(null);
    const [formData, setFormData] = useState({
        ...inputs,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const csrfToken = csrfRef.current.value;
        try {
            setIsLoading(true);
            await router.post(
                postRoute,
                { ...formData, _token: csrfToken },
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
            console.error(`Error during ${formTitle}:`, error);
            setIsLoading(false);
        }
    };

    const handleSignUpClick = (event) => {
        event.preventDefault();
        router.visit("/signup");
    };

    const handleSignInClick = (event) => {
        event.preventDefault();
        router.visit("/signin");
    };

    return (
        <div>
            {flash.message && (
                <div
                    className={`bg-gray-100 border-t-4 w-full mt-4 ${
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
            <input
                type="hidden"
                name="_token"
                value={csrf}
                ref={csrfRef}
                onChange={handleChange}
            />
            <InputFormGeneric
                required
                autoComplete="off"
                username={formData.username}
                email={formData.email}
                password={formData.password}
                password1={formData.password1}
                password2={formData.password2}
                handleChange={handleChange}
                errors={errors}
                isSignUp={isSignUp}
                csrfToken={csrf}
            />
            {!isSignUp && (
                <div className="flex justify-end">
                    <a
                        href="/forgot"
                        className="text-blue-500 text-right text-xs mt-1 mr-2 mb-2"
                    >
                        Forgot Password?
                    </a>
                </div>
            )}
            <ButtonSign
                onClick={handleSubmit}
                disabled={isLoading}
                isloading={isLoading}
            >
                {isLoading ? `Processing...` : formTitle}
            </ButtonSign>

            <p className="text-center mt-2 block xl:hidden text-xs my-4 pt-2">
                {isSignUp ? (
                    <>
                        Already have an account?{" "}
                        <Link
                            href="#"
                            onClick={handleSignInClick}
                            className="text-blue-500"
                        >
                            Sign In
                        </Link>
                    </>
                ) : (
                    <>
                        Don't have an account yet?{" "}
                        <a
                            href="#"
                            onClick={handleSignUpClick}
                            className="text-blue-500"
                        >
                            Sign Up
                        </a>
                    </>
                )}
            </p>
        </div>
    );
};

export default FormGeneric;
