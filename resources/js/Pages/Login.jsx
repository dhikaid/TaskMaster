import React, { useState } from "react";
import { MdLockOutline, MdPersonOutline } from "react-icons/md";
import { router } from "@inertiajs/react";

export default function Login(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        _token: props.csrf,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await router.post("/oauth/login", formData);
            router.visit("/home");
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const handleSignUpClick = (event) => {
        event.preventDefault();
        router.visit("/register");
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row md:w-2/3 max-w-4xl">
                    <div className="md:w-3/5 p-5 flex flex-col justify-center">
                        <div className="text-left font-bold">
                            <span className="text-sky-300">Task</span> Master
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">
                                Sign In
                            </h2>
                            <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-center mt-2">
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                                        <MdPersonOutline className="text-gray-400 m-2" />
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
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                                        <MdLockOutline className="text-gray-400 m-2" />
                                        <input
                                            required
                                            autoComplete="off"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="bg-gray-100 outline-none text-sm flex-1 "
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="border-2 border-sky-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 hover:text-white mt-2 "
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Sign up */}
                    <div className="w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden md:block">
                        <h2 className="text-3xl font-bold mb-2">
                            Hello, Friend!
                        </h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="m-6">
                            Don't have an account yet? Sign up now and start
                            your journey with us.
                        </p>
                        <button
                        className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400"
                        onClick={handleSignUpClick}
                        >
                        Sign Up
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
