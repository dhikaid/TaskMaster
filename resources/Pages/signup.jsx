import React from "react";
import CardSignUp from "../components/Layouts/CardSignUp";
import FormSignUp from "../components/Fragments/FormSignUp";
import ToggleSignIn from "../components/Fragments/ToggleSignIn";

const SignUp = () => {
    return (
        <CardSignUp>
            <FormSignUp />
        </CardSignUp>
    );
};

export default SignUp;
