import React from "react";
import { usePage, router } from "@inertiajs/react";
import FormRegister from "../component/Fragments/FormRegister";
import SignUpCard from "../component/Fragments/SignUpCard";
import useRegisterForm from "../hook/useRegister";
import AuthRegister from "../component/Layouts/AuthRegister";

const Register = ({ csrf }) => {
    const { errors, isLoginPage } = usePage().props; // Mendapatkan properti isLoginPage
    const { formData, handleChange } = useRegisterForm({
        username: "",
        email: "",
        password1: "",
        password2: "",
        _token: csrf,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await router.post("/oauth/register", formData);
        } catch (error) {
            console.error("Error during register:", error);
        }
    };

    const handleSignUpClick = (event) => {
        console.log("1");
        event.preventDefault();
        router.visit("/login");
    };

    return (
        <AuthRegister>
            <div className="md:w-3/5 p-5 flex flex-col items-center md:mx-auto md:max-w-md justify-center my-auto">
                <div className="text-left font-bold absolute top-0 left-0 ml-5 mt-5">
                    <span className="text-sky-300">Task</span> Master
                </div>
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">
                        Create an Account
                    </h2>
                    <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                    <FormRegister
                        formData={formData}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        errors={errors}
                        handleSignUpClick={handleSignUpClick}
                    />
                </div>
            </div>
            {/* Sign up */}
            <SignUpCard
                isLoginPage={isLoginPage}
                handleSignUpClick={handleSignUpClick}
            />
        </AuthRegister>
    );
};

export default Register;
