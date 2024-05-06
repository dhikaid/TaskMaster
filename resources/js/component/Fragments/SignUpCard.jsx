import React from "react";
import Button from "../Elements/Button/Button";

const SignUpCard = ({ isLoginPage, handleSignUpClick, handleSignInClick }) => {
    console.log(isLoginPage);
    return (
        <div className="w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden xl:block">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="m-6">
                {!isLoginPage
                    ? "Don't have an account yet?"
                    : "Already have an account?"}
            </p>
            <Button
                onClick={!isLoginPage ? handleSignUpClick : handleSignInClick}
            >
                {!isLoginPage ? "Sign Up" : "Sign In"}
            </Button>
        </div>
    );
};

export default SignUpCard;