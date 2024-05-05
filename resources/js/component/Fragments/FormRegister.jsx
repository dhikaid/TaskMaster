// FormRegister.jsx
import React from "react";
import InputRegister from "../Elements/Input/InputRegister";
import Button from "../Elements/Button/Button";

const FormRegister = ({ formData, handleSubmit, handleChange, errors }) => {
        const handleSignInClick = (event) => {
        event.preventDefault();
        router.visit("/login");
    };
    return (
        <form onSubmit={handleSubmit} method="POST">
            <div className="flex flex-col items-center mt-2">
                {/* Username */}
                <InputRegister
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    icon="person"
                />
                {errors.username && (
                    <div className="text-red-500 text-xs mt-1 text-start">
                        {errors.username}
                    </div>
                )}
                {/* Email */}
                <InputRegister
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    icon="email"
                />
                {errors.email && (
                    <div className="text-red-500 text-xs mt-1 text-start">
                        {errors.email}
                    </div>
                )}
                {/* Password 1 */}
                <InputRegister
                    type="password"
                    name="password1"
                    placeholder="Password"
                    value={formData.password1}
                    onChange={handleChange}
                    icon="password"
                />
                {errors.password1 && (
                    <div className="text-red-500 text-xs mt-1 text-start">
                        {errors.password1}
                    </div>
                )}
                {/* Password 2 */}
                <InputRegister
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                    value={formData.password2}
                    onChange={handleChange}
                    icon="password"
                />
                {errors.password2 && (
                    <div className="text-red-500 text-xs mt-1 text-start">
                        {errors.password2}
                    </div>
                )}
                <Button type="submit">Sign Up</Button>
                <div className="text-center mt-2 w-64 mb-5 block xl:hidden">
                    <a
                        href="#"
                        className="text-xs text-sky-400 hover:text-sky-600 font-semibold"
                        onClick={handleSignInClick}
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </form>
    );
};

export default FormRegister;
