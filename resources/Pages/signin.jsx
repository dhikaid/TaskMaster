import React from "react";
import CardGeneric from "../components/Layouts/CardGeneric";
import FormGeneric from "../components/Fragments/FormGeneric";

const SignIn = () => {
    const inputs = {
        username: "",
        password: "",
    };
    const handleChange = (event) => {};
    const csrfToken = "";
    return (
        <CardGeneric isSignUp={false}>
            <FormGeneric
                inputs={inputs}
                formTitle="Sign In"
                postRoute="/oauth/signin"
                isSignUp={false}
                handleChange={handleChange}
            />
        </CardGeneric>
    );
};

export default SignIn;
