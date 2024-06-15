import React, { useState, useRef } from "react";
import { usePage } from "@inertiajs/react";
import InputProfile from "../Elements/input/InputProfile";
import Button from "../Elements/button/button";

const FormProfile = ({ user }) => {
    const { errors, flash, csrf } = usePage().props;
    const csrfRef = useRef(null);

    const [formData, setFormData] = useState({
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        bio: user.bio,
        _token: csrf, // Initialize _token with csrf value
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form>
            <input
                type="hidden"
                name="_token"
                value={formData._token}
                ref={csrfRef}
                onChange={handleChange}
            />
            <InputProfile label="Full Name" error={errors.fullname}>
                <input
                    required
                    autoComplete="off"
                    name="fullname"
                    type="text"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </InputProfile>
            <InputProfile label="Username" error={errors.username}>
                <input
                    required
                    autoComplete="off"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </InputProfile>
            <InputProfile label="Email" error={errors.email}>
                <input
                    required
                    autoComplete="off"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </InputProfile>
            <InputProfile label="Bio" error={errors.bio}>
                <textarea
                    required
                    autoComplete="off"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="bg-gray-100 outline-none text-sm flex-1 text-start"
                />
            </InputProfile>
            <Button
                type="submit"
                className="flex items-center justify-center mx-auto"
            >
                Save Profile
            </Button>
        </form>
    );
};

export default FormProfile;
