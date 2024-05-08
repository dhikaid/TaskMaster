import React, { useState } from "react";
import InputFormSignUp from "../Elements/input/InputFormSignUp";
import Button from "../Elements/button/button";
import { usePage, router } from "@inertiajs/react";

const FormSignUp = ({ csrfToken }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
        _token: csrfToken,
    });

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await router.post("/oauth/register", formData);
        } catch (error) {
            console.error("Error during register:", error);
        }
    };

    const handleSignInClick = (event) => {
        event.preventDefault();
        router.visit("/signin");
    };

    const { errors } = usePage().props;

    return (
        <div>
            <InputFormSignUp
                required
                username={formData.username}
                email={formData.email}
                password1={formData.password1}
                password2={formData.password2}
                handleChange={handleChange} // meneruskan fungsi handleChange
                errors={errors}
            />

            <Button onClick={handleSubmit}>Sign Up</Button>
            <p className="text-center mt-2 block xl:hidden text-xs my-4 pt-2">
                Already have an account?{" "}
                <a
                    href="#"
                    onClick={handleSignInClick}
                    className="text-sky-400"
                >
                    Sign In
                </a>
            </p>
        </div>
    );
};

export default FormSignUp;
