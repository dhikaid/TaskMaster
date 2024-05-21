import React, { useState } from "react";
import FormForgot from "../components/Fragments/FormForgot";
import CardForgot from "../components/Layouts/CardForgot";

const ResetPassword = ({ email, tokenReset }) => {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "password1") setPassword1(value);
        else if (name === "password2") setPassword2(value);
    };

    return (
        <CardForgot isSignUp={true} isForgot={false}>
            <FormForgot
                tokenReset={tokenReset}
                email={email}
                password1={password1}
                password2={password2}
                handleChange={handleChange}
                isForgot={false}
            />
        </CardForgot>
    );
};

export default ResetPassword;
