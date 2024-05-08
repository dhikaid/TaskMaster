import React from "react";
import { router } from "@inertiajs/react";

const ToggleSignIn = () => {
    const handleSignInClick = (event) => {
        event.preventDefault();
        router.visit("/signin");
    };
    return (
        <div className="w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden xl:block">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="m-6">
                Already have an account? Sign in now and start your journey with
                us.
            </p>
            <button
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400"
                onClick={handleSignInClick}
            >
                Sign In
            </button>
        </div>
    );
};

export default ToggleSignIn;
