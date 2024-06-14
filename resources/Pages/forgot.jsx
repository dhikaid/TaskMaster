import React, { useState } from "react";
import FormForgot from "../components/Fragments/FormForgot";
import CardForgot from "../components/Layouts/CardForgot";

const Forgot = ({ tokenReset }) => {
    const [email, setEmail] = useState("");
    const handleChange = (event) => {
        setEmail(event.target.value);
    };
    console.log(tokenReset);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(
            "Password reset successful for email:",
            email,
            "with token:",
            tokenReset
        );
    };
    return (
        <CardForgot isSignUp={true} isForgot={true}>
            <FormForgot
                tokenReset={tokenReset}
                email={email}
                handleChange={handleChange}
                isForgot={true}
                handleSubmit={handleSubmit}
            />
        </CardForgot>
    );
};

export default Forgot;
