import React, { useState, useRef, useEffect } from "react";
import { useForm, usePage, router } from "@inertiajs/react";
import InputProfile from "../Elements/input/InputProfile";
import InputProfile2 from "../Elements/input/InputProfile2";
import ButtonProfile from "../Elements/button/ButtonProfile";
import ButtonForm from "../Elements/button/ButtonForm";
import Textarea from "../Elements/input/InputTextArea";
import ModalMessage from "../Elements/Modal/ModalMessage";
import { CiUser } from "react-icons/ci";
import { MdCameraAlt } from "react-icons/md";
import ChangePassword from "../Layouts/ChangePassword";
import { IoChevronBackCircle, IoPencilOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";

const FormProfile = ({ user, isEditing }) => {
    const { errors, csrf } = usePage().props;
    const csrfRef = useRef(csrf);

    const { data, setData, progress, processing, clearErrors } = useForm({
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        bio: user.bio || "",
        image: null,
        _method: "PUT",
        _token: csrf,
    });
    console.log(progress);
    const [isChanged, setIsChanged] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState({ status: null, message: "" });
    const changePasswordModalRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(
        `/storage/${user.image}` || ""
    );

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
        clearErrors(name);
    };

    // Handle image file selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setData("image", file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const csrfToken = csrfRef.current.value;
        setisLoading(true);
        await router.post(
            `/profile/${user.uuid}`,
            {
                fullname: data.fullname,
                username: data.username,
                email: data.email,
                bio: data.bio,
                image: data.image,
                _method: "PUT",
                _token: csrfToken,
            },
            {
                onProgress: (page) => {
                    setisLoading(true);
                },
                onSuccess: (page) => {
                    setisLoading(false);
                    console.log(page.props.flash.message);
                    setMessage({
                        status: page.props.flash.message.status,
                        message: page.props.flash.message.message,
                    });
                    setModalOpen(true);
                },
                onError: (page) => {
                    setisLoading(false);
                    setMessage({
                        status: 400,
                        message: "Error updating profile. Please try again.",
                    });
                    setModalOpen(true);
                },
            }
        );
    };

    // Close modal handler
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
                            onClick={() => router.get("/home")}
                            className="flex"
                        >
                            <BiArrowBack className="text-slate-800 rounded-lg w-7 h-7 mt-2 hover:text-slate-900" />
                            <span className="text-slate-800 m-2">Back</span>
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mr-32">
                        <div className="flex flex-col items-center sm:mt-2 mx-16 mb-32 ">
                            <div className="relative w-[280px] h-[224px] -mr-4 sm:ml-10 mb-1 ">
                                <img
                                    src={imagePreview}
                                    alt="Profile Preview"
                                    className="h-[280px] w-[280px] pb-4 border-2 rounded-lg border-neutral-300 shadow-sm mx-auto pt-4 px-4 text-neutral-800 text-lg bg-neutral-100 "
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <div className="flex items-start">
                                <InputProfile2 label="Full Name :">
                                    <div className="outline-none flex-1 text-start">
                                        {user.fullname}
                                    </div>
                                </InputProfile2>
                            </div>
                            <div className="flex items-start">
                                <InputProfile2 label="Username :">
                                    <div className=" outline-none flex-1 text-start ">
                                        {user.username}
                                    </div>
                                </InputProfile2>
                            </div>
                            <div className="flex items-start">
                                <InputProfile2 label="Email :">
                                    <div className=" outline-none flex-1 text-start ">
                                        {user.email}
                                    </div>
                                </InputProfile2>
                            </div>
                            <InputProfile2 label="Bio :">
                                <textarea
                                    className="border-1 border border-gray-200 outline-none flex-1 text-start p-2 resize-none h-[84px] rounded-lg"
                                    value={user.bio}
                                    readOnly
                                />
                            </InputProfile2>
                            <div className="flex flex-col sm:flex-row mb-3 sm:ml-12 space-y-2 sm:space-x-2 sm:justify-start justify-center">
                                <button
                                    className="flex items-center justify-center rounded-lg bg-neutral-800 text-white border-2 border-neutral-600 py-3 px-8 hover:bg-neutral-900 hover:text-white text-sm my-3 ml-8"
                                    type="button"
                                    onClick={() => router.get("/profile/edit")}
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
                    encType="multipart/form-data"
                >
                    <input
                        type="hidden"
                        name="_token"
                        value={usePage().props.csrf}
                        ref={csrfRef}
                    />
                    <div className="flex items-center ml-2 ">
                        <button
                            type="button"
                            onClick={() => router.get("/profile")}
                            className="flex relative top-0"
                        >
                            <BiArrowBack className="text-slate-800 rounded-lg w-7 h-7 mt-4 hover:text-slate-900 " />
                            <span className="text-slate-800 ml-2 mt-4">
                                Back
                            </span>
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-3 mr-32">
                        <div className="flex flex-col items-center sm:mt-2 m-16 -mt-1 ">
                            <div className="relative w-56 h-56 -mr-4 sm:ml-10 mb-1 ">
                                <img
                                    src={imagePreview}
                                    alt="Profile Preview"
                                    className="h-56 w-56 pb-4 border-2 rounded-lg border-neutral-300 shadow-sm mx-auto pt-4 px-4 text-neutral-800 text-lg bg-neutral-100 "
                                />
                                <label
                                    htmlFor="imageUpload"
                                    className=" cursor-pointer"
                                >
                                    <MdCameraAlt className="absolute top-2 left-2 w-8 h-8 text-neutral-800 cursor-pointer bg-white rounded-full p-2 hover:bg-neutral-100" />
                                    <input
                                        id="imageUpload"
                                        type="file"
                                        className="hidden"
                                        onChange={handleImageChange}
                                        name="image"
                                        accept="image/png, image/jpg, image/jpeg"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col w-full mt-4">
                            <InputProfile
                                label="Full Name"
                                error={errors.fullname}
                            >
                                <input
                                    autoComplete="off"
                                    name="fullname"
                                    type="text"
                                    value={data.fullname}
                                    onChange={handleChange}
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1"
                                />
                            </InputProfile>
                            <InputProfile
                                label="Username"
                                error={errors.username}
                            >
                                <input
                                    required
                                    autoComplete="off"
                                    name="username"
                                    type="text"
                                    value={data.username}
                                    onChange={handleChange}
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1"
                                />
                            </InputProfile>
                            <InputProfile label="Email" error={errors.email}>
                                <input
                                    required
                                    autoComplete="off"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1"
                                />
                            </InputProfile>
                            <InputProfile label="Bio" error={errors.bio}>
                                <Textarea
                                    autoComplete="off"
                                    name="bio"
                                    value={data.bio}
                                    onChange={handleChange}
                                    className="bg-gray-100 outline-none  flex-1 text-start pl-1 resize-none"
                                />
                            </InputProfile>
                            <div className="flex flex-col sm:flex-row mb-3 sm:ml-11 space-y-2 sm:space-x-2 sm:justify-start justify-center">
                                <ButtonForm
                                    className="flex items-center justify-center text-sm"
                                    type="submit"
                                    disabled={isLoading}
                                    isloading={isLoading}
                                >
                                    {isLoading ? `Saving...` : "Save Profile"}
                                </ButtonForm>
                                <button
                                    className="flex items-center justify-center bg-white border-2 border-neutral-600 rounded-lg  font-semibold hover:bg-neutral-800 hover:text-white  text-sm py-3 px-10"
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
            <ChangePassword
                user={user}
                ref={changePasswordModalRef}
                isPassword="false"
            />
        </div>
    );
};

export default FormProfile;
