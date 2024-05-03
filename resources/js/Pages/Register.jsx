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
            // router.visit("/home");
        } catch (error) {
            console.error("Error during register:", error);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100">
                <head>
                    <title>Login</title>
                </head>
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
                    <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row md:w-2/3 max-w-4xl">
                        <div className="md:w-3/5 p-5 flex flex-col justify-center">
                            <div className="text-left font-bold">
                                {" "}
                                <span className="text-sky-300">Task</span>{" "}
                                Master
                            </div>
                            <div className="py-10">
                                <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">
                                    Create an Account
                                </h2>
                                <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                                <form onSubmit={handleSubmit} method="POST">
                                    <div className="flex flex-col items-center mt-2">
                                        <div className="bg-gray-100  w-64  p-2 flex items-center mb-3 rounded-lg">
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
                                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
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
                                            {errors.email && (
                                                <div className="text-red-500 text-xs mt-1">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
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
                                            {errors.password1 && (
                                                <div className="text-red-500 text-xs mt-1">
                                                    {errors.password1}
                                                </div>
                                            )}
                                        </div>
                                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
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
                                        <div className="text-start ml-3 w-64 mb-5 block sm:hidden">
                                            <a
                                                href="#"
                                                className="text-xs text-sky-400 hover:text-sky-600 font-semibold"
                                            >
                                                Sign In
                                            </a>
                                        </div>
                                        <button
                                            type="submit"
                                            className="border-2 border-sky-300 bg-sky-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-500 text-white mt-2 "
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Sign up */}
                        <div className="w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden md:block">
                            <h2 className="text-3xl font bold mb-2">
                                Hello, Friend!
                            </h2>
                            <div className="border-2 w-10 border-white inline-block mb-2"></div>
                            <p className="m-6">
                                Enter your personal details and start journey
                                with us
                            </p>
                            <a
                                href="#"
                                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 "
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
