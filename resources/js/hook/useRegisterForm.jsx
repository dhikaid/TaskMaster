// useRegisterForm.js
import { useState } from "react";

const useRegisterForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    return { formData, handleChange };
};

export default useRegisterForm;