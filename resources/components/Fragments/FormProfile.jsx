import React, { useState, useRef, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";
import InputProfile from "../Elements/input/InputProfile";
import ButtonProfile from "../Elements/button/ButtonProfile";
import Input from "../Elements/input/Input";
import Textarea from "../Elements/input/InputTextArea";
import ModalMessage from "../Elements/Modal/ModalMessage";
import { CiUser } from "react-icons/ci";
import { MdCameraAlt } from "react-icons/md";
import ChangePassword from "../Layouts/ChangePassword";
import { IoChevronBackCircle, IoPencilOutline } from "react-icons/io5";
import InputProfile2 from "../Elements/input/InputProfile2";

const FormProfile = ({ user, isEditing }) => {
    const { errors, csrf, flash } = usePage().props;
    const csrfRef = useRef(null);

    const initialFormData = {
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        bio: user.bio || "",
        _method: "PUT",
        _token: csrf,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isChanged, setIsChanged] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState({ status: null, message: "" });
    const changePasswordModalRef = useRef(null);

    useEffect(() => {
        const formHasChanged =
            formData.fullname !== initialFormData.fullname ||
            formData.username !== initialFormData.username ||
            formData.email !== initialFormData.email ||
            formData.bio !== initialFormData.bio;

        setIsChanged(formHasChanged);
    }, [formData, initialFormData]);

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
            setMessage({
                status: 200,
                message: "Profile updated successfully!",
            });
        } catch (error) {
            setMessage({
                status: 400,
                message: "Error updating profile. Please try again.",
            });
        }
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <ModalMessage
                isOpen={modalOpen}
                message={message}
                onClose={handleCloseModal}
            />
            {!isEditing ? (
                <div className="flex flex-col w-full">
                    <div className="flex items-center ml-2">
                        <button
                            type="button"
                            onClick={() => router.get(`/home`)}
                        >
                            <IoChevronBackCircle className="text-slate-800 rounded-lg w-7 h-7 mt-2 hover:text-slate-900" />
                        </button>
                        <div className="text-xl font-bold text-neutral-800 ml-2 mt-2">
                            Profile
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-neutral-300 mt-4"></div>
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-3">
                        <div className="flex flex-col items-center sm:mb-0 my-4">
                            <div className="relative w-52 h-52 -mr-4 sm:ml-10">
                                <CiUser className="w-full h-full border-2 rounded-lg border-neutral-300 shadow-sm mx-auto pt-4 px-4 text-neutral-800 text-lg bg-neutral-100" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <InputProfile2 label="Full Name :">
                                <div className="outline-none flex-1 text-start ">
                                    {user.fullname}
                                </div>
                            </InputProfile2>
                            <InputProfile2 label="Username :">
                                <div className=" outline-none flex-1 text-start ">
                                    {user.username}
                                </div>
                            </InputProfile2>
                            <InputProfile2 label="Email :">
                                <div className=" outline-none flex-1 text-start ">
                                    {user.email}
                                </div>
                            </InputProfile2>
                            <InputProfile2 label="Bio :">
                                <div className="outline-none flex-1 text-start ">
                                    {user.bio}
                                </div>
                            </InputProfile2>
                            <div className="flex flex-col sm:flex-row mb-3 sm:ml-12 space-y-2 sm:space-x-2 sm:justify-start justify-center">
                                <button
                                    className="flex items-center justify-center rounded-lg bg-blue-500 text-white border-2 border-blue-500 px-4 py-2 hover:bg-blue-600 hover:text-white text-sm my-3"
                                    type="button"
                                    onClick={() => router.get(`/profile/edit`)}
                                >
                                    <IoPencilOutline className="text-white w-5 h-5 " />
                                    <span className="ml-1 ">Edit Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
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
                    />
                    <div className="flex items-center ml-2">
                        <button
                            type="button"
                            onClick={() => router.get(`/profile`)}
                        >
                            <IoChevronBackCircle className="text-slate-800 rounded-lg w-7 h-7 mt-2 hover:text-slate-900" />
                        </button>
                        <div className="text-xl font-bold text-neutral-800 ml-2 mt-2">
                            Edit Profile
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-neutral-300 mt-4"></div>
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                        <div className="flex flex-col items-center sm:mb-0 my-4 mt-6">
                            <div className="relative w-52 h-52 -mr-4 sm:ml-10">
                                <CiUser className="w-full h-full border-2 rounded-lg border-neutral-300 shadow-sm mx-auto pt-4 px-4 text-neutral-800 text-lg bg-neutral-100" />
                                <MdCameraAlt className="absolute top-3 left-3 w-7 h-7 text-neutral-800" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <InputProfile
                                label="Full Name"
                                error={errors.fullname}
                            >
                                <Input
                                    autoComplete="off"
                                    name="fullname"
                                    type="text"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1"
                                />
                            </InputProfile>
                            <InputProfile
                                label="Username"
                                error={errors.username}
                            >
                                <Input
                                    required
                                    autoComplete="off"
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1"
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
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1"
                                />
                            </InputProfile>
                            <InputProfile label="Bio" error={errors.bio}>
                                <Textarea
                                    autoComplete="off"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1 resize-none"
                                />
                            </InputProfile>
                            <div className="flex flex-col sm:flex-row mb-3 sm:ml-11 space-y-2 sm:space-x-2 sm:justify-start justify-center">
                                <ButtonProfile
                                    className="flex items-center justify-center text-sm"
                                    type="submit"
                                    disabled={!isChanged}
                                >
                                    Save Profile
                                </ButtonProfile>
                                <button
                                    className="flex items-center justify-center text-blue-500 bg-white border-2 border-blue-500 rounded-lg px-4 font-semibold hover:bg-blue-500 hover:text-white  text-sm p-2"
                                    type="button"
                                    onClick={() =>
                                        changePasswordModalRef.current.openModal()
                                    }
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
            <ChangePassword user={user} ref={changePasswordModalRef} />
        </div>
    );
};

export default FormProfile;
