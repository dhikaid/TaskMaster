import React, { useState } from "react";
import FormForgot from "../components/Fragments/FormForgot";
import CardForgot from "../components/Layouts/CardForgot";

const Forgot = () => {
    const [email, setEmail] = useState("");
    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <CardForgot isSignUp={true} isForgot={true}>
            <FormForgot
                email={email}
                handleChange={handleChange}
                isForgot={true}
            />
        </CardForgot>
    );
};

export default Forgot;
