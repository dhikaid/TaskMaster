import React, { useState } from "react";
import { MdLockOutline, MdPersonOutline, MdError } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { router, usePage } from "@inertiajs/react";
import SignUpCard from "../component/Fragments/SignUpCard";

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        _token: props.csrf,
    });

    const { errors, flash, isLoginPage } = usePage().props;

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

    const handleSignInClick = (event) => {
        event.preventDefault();
        router.visit("/register");
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100 relative">
            <head>
                <title>Login</title>
            </head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row md:w-2/3 max-w-4xl relative">
                    <div className="md:w-3/5 p-5 flex flex-col items-center md:mx-auto md:max-w-md justify-center my-auto">
                        <div className="text-left font-bold absolute top-0 left-0 ml-5 mt-5">
                            <span className="text-sky-300">Task</span> Master
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">
                                Sign In
                            </h2>
                            <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                            {flash.message &&
                                (flash.message.status === 200 ? (
                                    <div className="bg-gray-100 border-t-4  max-w-80 border-green-500 border-1 rounded-lg p-1 mb-4 flex items-center">
                                        <div className="flex items-center justify-center rounded-l-lg mr-2 px-2">
                                            <FaCircleCheck className="text-3xl text-green-500" />
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-md text-left text-green-500">
                                                Success!
                                            </h2>
                                            <p className="text-sm text-start text-green-500">
                                                {flash.message.message}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-gray-100 border-t-4  max-w-80 border-red-500 border-1 rounded-lg p-1 mb-4 flex items-center">
                                        <div className="flex items-center justify-center rounded-l-lg mr-2 px-1">
                                            <MdError className="text-4xl text-red-500" />
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-md text-left text-red-500">
                                                Error!
                                            </h2>
                                            <p className="text-sm text-red-500">
                                                {flash.message.message}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            <form onSubmit={handleSubmit}>
                                <div className="formgroup w-80 mx-auto">
                                    <div className="mb-3">
                                        <div className="bg-gray-100 p-2 flex items-center rounded-lg">
                                            <MdPersonOutline className="text-gray-400 m-2" />
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                className="bg-gray-100 outline-none text-sm flex-1"
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
                                    <div className="mb-3">
                                        <div className="bg-gray-100 p-2 flex items-center rounded-lg">
                                            <MdLockOutline className="text-gray-400 m-2" />
                                            <input
                                                required
                                                autoComplete="off"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="bg-gray-100 outline-none text-sm flex-1"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {errors.password && (
                                            <div className="text-red-500 text-xs mt-1 text-start">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-end">
                                        <a
                                            href="#"
                                            className="text-sky-300 text-right text-xs mt-1 mr-2 mb-2"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="border-2 border-sky-300 text-white bg-sky-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 mt-2"
                                    >
                                        Sign In
                                    </button>
                                    <p className="text-center mt-2 block xl:hidden text-xs my-4 pt-2">
                                        Don't have an account yet?{" "}
                                        <a
                                            href="#"
                                            onClick={handleSignInClick}
                                            className="text-sky-400"
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Sign up */}
                    <SignUpCard
                        isLoginPage={isLoginPage}
                        handleSignInClick={handleSignInClick}
                    />
                </div>
            </main>
             
        </div>
    );
}
