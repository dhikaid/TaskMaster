import React, { useState } from "react";
import InputFormSignIn from "../Elements/input/InputFormSignIn";
import Button from "../Elements/button/button";
import { usePage, router } from "@inertiajs/react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const FormSignIn = ({ csrfToken }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        _token: csrfToken,
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await router.post("/oauth/login", formData);
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    const handleSignUpClick = (event) => {
        event.preventDefault();
        router.visit("/signup");
    };

    const { errors, flash } = usePage().props;
    return (
        <div>
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
            <InputFormSignIn
                required
                autoComplete="off"
                username={formData.username}
                password={formData.password}
                setUsername={(value) =>
                    handleChange({ target: { name: "username", value } })
                }
                setPassword={(value) =>
                    handleChange({ target: { name: "password", value } })
                }
                errors={errors}
            />
            <div className="flex justify-end">
                <a
                    href="#"
                    className="text-sky-300 text-right text-xs mt-1 mr-2 mb-2"
                >
                    Forgot Password?
                </a>
            </div>
            <input type="hidden" name="_token" value={csrfToken} />
            <Button onClick={handleSubmit}>Sign In</Button>
            <p className="text-center mt-2 block xl:hidden text-xs my-4 pt-2">
                Don't have an account yet?{" "}
                <a
                    href="#"
                    onClick={handleSignUpClick}
                    className="text-sky-400"
                >
                    Sign Up
                </a>
            </p>
        </div>
    );
};

export default FormSignIn;
