import React, { useState, useRef, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import InputProfile from "../Elements/input/InputProfile";
import Button from "../Elements/button/Button";
import { router } from "@inertiajs/react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const FormProfile = ({ user }) => {
    const { errors, flash, csrf } = usePage().props;
    const csrfRef = useRef(null);

    const [formData, setFormData] = useState({
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        bio: user.bio || "",
        _method: "PUT",
        _token: csrf,
    });

    useEffect(() => {
        setFormData({
            fullname: user.fullname || "",
            username: user.username || "",
            email: user.email || "",
            bio: user.bio || "",
        });
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const csrfToken = csrfRef.current.value;
        try {
            await router.put(`/profile/${user.uuid}`, {
                ...formData,
                _token: csrfToken,
            });
        } catch (error) {
            console.error("Error during profile update:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {flash.message && (
                    <div
                        className={`bg-gray-100 border-t-4 max-w-80 ${
                            flash.message.status === 200
                                ? "border-green-500"
                                : "border-red-500"
                        } border-1 rounded-lg p-1 mb-4 flex items-center`}
                    >
                        <div className="flex items-center justify-center rounded-l-lg mr-2 px-2">
                            {flash.message.status === 200 ? (
                                <FaCircleCheck className="text-3xl text-green-500" />
                            ) : (
                                <MdError className="text-4xl text-red-500" />
                            )}
                        </div>
                        <div>
                            <h2
                                className={`font-bold text-md text-left ${
                                    flash.message.status === 200
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {flash.message.status === 200
                                    ? "Success!"
                                    : "Error!"}
                            </h2>
                            <p
                                className={`text-sm text-start ${
                                    flash.message.status === 200
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {flash.message.message}
                            </p>
                        </div>
                    </div>
                )}
                <input
                    type="hidden"
                    name="_token"
                    value={csrf}
                    ref={csrfRef}
                    onChange={handleChange}
                />
                <InputProfile label="Full Name" error={errors.fullname}>
                    <input
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
                        autoComplete="off"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-sm flex-1 text-start"
                    />
                </InputProfile>
                <div className="flex flex-col sm:flex-row justify-between mt-4">
                    <Button
                        onClick={() => router.visit("/reset-password")}
                        className="flex items-center justify-center mx-auto mb-2 sm:mb-0 sm:mr-2"
                        type="button"
                    >
                        Reset Password
                    </Button>
                    <Button
                        className="flex items-center justify-center mx-auto sm:ml-2"
                        type="submit"
                    >
                        Save Profile
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormProfile;
