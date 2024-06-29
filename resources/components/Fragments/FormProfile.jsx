import React, { useState, useRef, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";
import InputProfile from "../Elements/input/InputProfile";
import ButtonProfile from "../Elements/button/ButtonProfile";
import { FaUserLarge } from "react-icons/fa6";
import Input from "../Elements/input/Input";
import Textarea from "../Elements/input/InputTextArea";
import MessageError from "../Elements/popup/MessageError";

const ProfileForm = ({ user }) => {
    const { errors, csrf, flash } = usePage().props;
    const csrfRef = useRef(null);
    const [formData, setFormData] = useState({
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        bio: user.bio || "",
        _method: "PUT",
        _token: csrfRef,
    });
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (flash.message) {
            setMessage(flash.message);
        }
    }, [flash.message]);

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

    const handleCloseMessage = () => {
        setMessage(null);
    };
    return (
        <div className="w-full flex flex-col items-center">
            {message && (
                <MessageError message={message} onClose={handleCloseMessage} />
            )}
            <form
                onSubmit={handleSubmit}
                method="POST"
                className="flex flex-col w-full"
            >
                <input
                    type="hidden"
                    name="_token"
                    value={csrf}
                    ref={csrfRef}
                    onChange={handleChange}
                />
                <div className="text-xl font-bold text-neutral-900">
                    Edit Profile
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4">
                    <div className="flex flex-col items-center sm:mb-0">
                        <div className="relative">
                            <FaUserLarge className="w-32 h-32 border-2 rounded-full border-neutral-200 shadow-sm mx-auto mt-12 ml-12" />
                            <div className="mt-5">
                                <button
                                    type="button"
                                    className="border-2 border-blue-500 bg-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 text-white mt-2 ml-10"
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-4">
                        <InputProfile label="Full Name" error={errors.fullname}>
                            <Input
                                autoComplete="off"
                                name="fullname"
                                type="text"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="bg-gray-100 outline-none text-sm flex-1 text-start"
                            />
                        </InputProfile>
                        <InputProfile label="Username" error={errors.username}>
                            <Input
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
                            <Input
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
                            <Textarea
                                autoComplete="off"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                className="bg-gray-100 outline-none text-sm flex-1 text-start"
                            />
                        </InputProfile>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
                    <ButtonProfile
                        className="flex items-center justify-center mx-auto"
                        type="submit"
                    >
                        Save Profile
                    </ButtonProfile>
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;
