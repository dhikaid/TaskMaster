import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import FormLogin from "../Fragments/FormLogin";
import { usePage, router } from "@inertiajs/react";

const CardLog = ({ csrfToken }) => {
    const { errors, flash } = usePage().props;

    const handleSignUpClick = (event) => {
        event.preventDefault();
        router.visit("/register");
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100 relative">
            <header>
                <title>Login</title>
            </header>
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
                            {flash.message && (
                                <div className={`bg-gray-100 border-t-4  max-w-80 border-${flash.message.status === 200 ? "green" : "red"}-500 border-1 rounded-lg p-1 mb-4 flex items-center`}>
                                    <div className="flex items-center justify-center rounded-l-lg mr-2 px-2">
                                        {flash.message.status === 200 ? (
                                            <FaCircleCheck className="text-3xl text-green-500" />
                                        ) : (
                                            <MdError className="text-4xl text-red-500" />
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-md text-left text-green-500">
                                            {flash.message.status === 200 ? "Success!" : "Error!"}
                                        </h2>
                                        <p className="text-sm text-start text-green-500">
                                            {flash.message.message}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <form>
                                <FormLogin
                                    csrfToken={csrfToken}
                                    errors={errors}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden xl:block">
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
};

export default CardLog;
