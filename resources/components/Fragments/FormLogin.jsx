import React, { useState } from "react";
import InputForm from "../Elements/input/InputForm";
import Button from "../Elements/button/button";

const FormLogin = ({ errors, csrfToken }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        _token: csrfToken,
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            await router.post("/oauth/login", formData);
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div>
            <InputForm
                required
                autoComplete="off"
                username={formData.username}
                password={formData.password}
                setUsername={(value) => handleChange({ target: { name: "username", value } })}
                setPassword={(value) => handleChange({ target: { name: "password", value } })}
                errors={errors}
            />
            {errors && (
                <div className="text-red-500 text-xs mt-1 text-start">
                    {errors.username && errors.username}
                </div>
            )}
            {errors && (
                <div className="text-red-500 text-xs mt-1 text-start">
                    {errors.password && errors.password}
                </div>
            )}
            <div className="flex justify-end">
                <a href="#" className="text-sky-300 text-right text-xs mt-1 mr-2 mb-2">
                    Forgot Password?
                </a>
            </div>
            <input type="hidden" name="_token" value={csrfToken} />
            <Button onClick={handleSubmit}>Login</Button>
        </div>
    );
};

export default FormLogin;
