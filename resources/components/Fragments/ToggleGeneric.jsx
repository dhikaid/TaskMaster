import React from "react";
import { router } from "@inertiajs/react";

const ToggleGeneric = ({ isSignUp }) => {
    const handleClick = (event) => {
        event.preventDefault();
        router.visit(isSignUp ? "/signin" : "/signup");
    };
    return (
        <div className="w-2/5 bg-blue-500 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden xl:block">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="m-6">
                {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account yet?"}
                {isSignUp
                    ? " Sign in now and start your journey with us."
                    : " Sign up now and start your journey with us."}
            </p>
            <button
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600"
                onClick={handleClick}
            >
                {isSignUp ? "Sign In" : "Sign Up"}
            </button>
        </div>
    );
};

export default ToggleGeneric;
