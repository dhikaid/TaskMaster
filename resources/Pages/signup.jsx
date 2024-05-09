// Di halaman Sign Up
import React from "react";
import CardGeneric from "../components/Layouts/CardGeneric";
import FormGeneric from "../components/Fragments/FormGeneric";

const SignUp = () => {
    const inputs = {
        username: "",
        email: "",
        password1: "",
        password2: "",
    };
    const handleChange = (event) => {};
    const csrfToken = "";
    return (
        <CardGeneric isSignUp={true}>
            <FormGeneric
                inputs={inputs}
                formTitle="Sign Up"
                postRoute="/oauth/signup"
                isSignUp={true}
                handleChange={handleChange}
            />
        </CardGeneric>
    );
};

export default SignUp;
