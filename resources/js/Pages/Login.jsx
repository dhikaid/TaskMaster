import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline, MdPersonOutline } from "react-icons/md";
import { router } from "@inertiajs/react";

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
        _token: props.csrf,
    });

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
        
        router.post("/oauth/login", formData);
    };

    return (
        <>
        <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100">
            <head>
                <title>Login</title>
            </head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row md:w-2/3 max-w-4xl">
                        <div className="md:w-3/5 p-5 flex flex-col justify-center"> {/* Mengatur container card menjadi flex container */}
                        <div className="text-left font-bold"> <span className="text-sky-300">Task</span> Master</div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">Create an Account</h2>
                            <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                            {/* <div className="flex justify-center">
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaFacebook className="text-sm"/></a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaGoogle className="text-sm"/></a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaLinkedin className="text-sm"/></a>
                            </div>
                            <p className="text-gray-400 text-xs my-3">or use your email account</p> */}
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-center mt-2">
                                    <div className="bg-gray-100 md:w-40 w-full  p-2 flex items-center mb-3 rounded-lg"><MdPersonOutline className="text-gray-400 m-2"/>
                                    <input type="text" name="username" placeholder="Username" className="bg-gray-100 outline-none text-sm flex-1 " value={formData.username} onChange={handleChange} />
                                    </div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg"><FaRegEnvelope className="text-gray-400 m-2"/>
                                    <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1 " value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg"><MdLockOutline className="text-gray-400 m-2"/>
                                    <input type="password" name="password1" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1 " value={formData.password1} onChange={handleChange} />
                                    </div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg"><MdLockOutline className="text-gray-400 m-2"/>
                                    <input type="password" name="password2" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1" value={formData.password2} onChange={handleChange} />
                                    </div>
                                    {/* <div className="flex w-64 mb-5">
                                        <label className="flex items-center text-xs">
                                            <input type="checkbox" name="remember" className="mr-2" checked={formData.remember} onChange={handleChange} />Remember me
                                        </label>
                                        <a href="#" className="text-xs ml-12">Forgot Password?</a>
                                    </div> */}
                                    <div className="flex justify-between w-64 mb-5">
                                        <a href="#" className="text-xs">Sudah punya akun?</a>
                                        <p>Sign In</p>
                                    </div>
                                    <button type="submit" className="border-2 border-sky-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 hover:text-white mt-2 ">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Sign up */}
                    <div className="w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-36 px-12 hidden md:block">
                        <h2 className="text-3xl font bold mb-2">Hello, Friend!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="m-6">Enter your personal details and start journey with us</p>
                        <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 ">Sign In</a>
                    </div>
                </div>
            </main>
        </div>
        </>
    );
}
