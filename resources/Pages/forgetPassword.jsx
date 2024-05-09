// Di halaman Forget Password
import React from "react";
import CardGeneric from "../components/Layouts/CardGeneric";
import FormGeneric from "../components/Fragments/FormGeneric";

const ForgetPassword = () => {
    const inputs = {
        email: "",
    };
    const handleChange = (event) => {
        // Implementasikan fungsi ini
    };
    const csrfToken = "";
    return (
        <CardGeneric>
            <p className="text-center mb-4">
                Please enter the email address you'd like password reset
                information sent to.
            </p>
            <FormGeneric
                inputs={inputs}
                csrfToken={csrfToken}
                formTitle="Request Link"
                postRoute="/oauth/forget-password"
                isSignUp={false}
                handleChange={handleChange}
            />
            <p className="text-center mt-2">
                <a href="/signin" className="text-sky-400">
                    Back to Login
                </a>
            </p>
        </CardGeneric>
    );
};

export default ForgetPassword;
