import React from "react";
import InputFormForgot from "../Elements/input/InputFormForgot";
import Button from "../Elements/button/button";
import { usePage, router, Link } from "@inertiajs/react";

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

    const { errors, csrf } = usePage().props;
    return (
        <div className="mt-10">
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
