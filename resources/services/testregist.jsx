import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline, MdPersonOutline } from "react-icons/md";
import { usePage, router } from "@inertiajs/react";

export default function Register(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
        _token: props.csrf,
    });

    const { errors } = usePage().props;

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
        router.visit("/login");
    };
    return (
        <>
            <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100 relative">
                <head>
                    <title>Register</title>
                </head>
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row md:w-2/3 max-w-4xl relative">
                    <div className="md:w-3/5 p-5 flex flex-col items-center md:mx-auto md:max-w-md justify-center my-auto">
                            <div className="text-left font-bold absolute top-0 left-0 ml-5 mt-5">
                                <span className="text-sky-300">Task</span>
                                Master
                            </div>
                            <div className="py-10">
                                <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">
                                    Create an Account
                                </h2>
                                <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                                <form onSubmit={handleSubmit} method="POST">
                                    <div className="flex flex-col items-center mt-2">
                                        {/* USERNAME */}
                                        <div className="formGroup mb-3 w-80">
                                            <div className="bg-gray-100  p-2 flex items-center  rounded-lg">
                                                <MdPersonOutline className="text-gray-400 m-2" />
                                                <input
                                                    required
                                                    autoComplete="off"
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username"
                                                    className="bg-gray-100 outline-none text-sm flex-1 "
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.username && (
                                                <div className="text-red-500 text-xs mt-1 text-start">
                                                    {errors.username}
                                                </div>
                                            )}
                                        </div>
                                        {/* EMAIL */}
                                        <div className="formGroup mb-3 w-80">
                                            <div className="bg-gray-100  p-2 flex items-center rounded-lg">
                                                <FaRegEnvelope className="text-gray-400 m-2" />
                                                <input
                                                    required
                                                    autoComplete="off"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="bg-gray-100 outline-none text-sm flex-1 "
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="text-red-500 text-xs mt-1 text-start">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        {/* PASSWORD 1 */}
                                        <div className="formGroup mb-3 w-80">
                                            <div className="bg-gray-100  p-2 flex items-center  rounded-lg">
                                                <MdLockOutline className="text-gray-400 m-2" />
                                                <input
                                                    required
                                                    autoComplete="off"
                                                    type="password"
                                                    name="password1"
                                                    placeholder="Password"
                                                    className="bg-gray-100 outline-none text-sm flex-1 "
                                                    value={formData.password1}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.password1 && (
                                                <div className="text-red-500 text-xs mt-1 text-start">
                                                    {errors.password1}
                                                </div>
                                            )}
                                        </div>
                                        {/* PASSWORD 2 */}
                                        <div className="formGroup mb-3 w-80">
                                            <div className="bg-gray-100 p-2 flex items-center  rounded-lg">
                                                <MdLockOutline className="text-gray-400 m-2" />
                                                <input
                                                    required
                                                    autoComplete="off"
                                                    type="password"
                                                    name="password2"
                                                    placeholder="Confirm Password"
                                                    className="bg-gray-100 outline-none text-sm flex-1"
                                                    value={formData.password2}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.password2 && (
                                                <div className="text-red-500 text-xs mt-1 text-start">
                                                    {errors.password2}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className="border-2 border-sky-300 bg-sky-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-500 text-white mt-2 "
                                        >
                                            Sign Up
                                        </button>
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
                            </div>
                        </div>
                        {/* Sign up */}
                        <div className="w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden xl:block">
                            <h2 className="text-3xl font-bold mb-2">
                                Hello, Friend!
                            </h2>
                            <div className="border-2 w-10 border-white inline-block mb-2"></div>
                            <p className="m-6">
                                Enter your personal details and start journey
                                with us
                            </p>
                            <button
                                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400"
                                onClick={handleSignInClick}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
