import React from "react";
import FormForgot from "../Fragments/FormForgot";
import ToggleGeneric from "../Fragments/ToggleGeneric";

const CardForgot = ({ children, isSignUp, isForgot }) => {
    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100 relative">
            <header>
                <title>{isForgot ? "Forgot Password" : "Reset Password"}</title>
            </header>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row md:w-2/3 max-w-4xl relative">
                    <div className="md:w-3/5 p-5 flex flex-col items-center md:mx-auto md:max-w-md justify-center my-auto">
                        <div className="text-left font-bold absolute top-0 left-0 ml-5 mt-5">
                            <span className="text-sky-300">Task</span> Master
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">
                                {isForgot
                                    ? "Forgot Your Password"
                                    : "Reset Your Password"}
                            </h2>
                            <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                            <form method="POST">{children}</form>
                        </div>
                    </div>
                    <ToggleGeneric isSignUp={isSignUp} />
                </div>
            </main>
        </div>
    );
};

export default CardForgot;
