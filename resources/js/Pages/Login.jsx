import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGoogle, FaEnvelope, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import '../../css/app.css';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
        setIsMobile(false); 
    };


    const getHelloText = () => {
        return isLogin ? "Hello, Friend!" : "Welcome Back";
    };

    const getButtonText = () => {
        return isLogin ? "Sign Up" : "Sign In";
    };

    return (
        <>
            <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100">
                <head>
                    <title>{isLogin ? 'Login' : 'Sign Up'}</title>
                </head>
                <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center ">
                    <div className={`bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full max-w-4xl transition-all duration-500 ${isLogin ? "sign-in-form" : "sign-up-form"}`}>
                        {isLogin ? (
                            // Sign in form
                            <>
                                <div className="sm:w-3/5 p-5">
                                    <div className="text-left font-bold"> <span className="text-sky-300">Task</span> Master</div>
                                    <div className="py-10">
                                        <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">Sign in to Account</h2>
                                        <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                                        <div className="flex justify-center">
                                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaFacebook className="text-sm"/></a>
                                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaGoogle className="text-sm"/></a>
                                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaLinkedin className="text-sm"/></a>
                                        </div>
                                        <p className="text-gray-400 text-xs my-3">or use your email account</p>
                                        <div className="flex flex-col items-center">
                                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaRegEnvelope className="text-gray-400 m-2"/>
                                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                                            </div>
                                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><MdLockOutline className="text-gray-400 m-2"/>
                                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                            </div>
                                            <div className="flex w-64 mb-5">
                                                <label className="flex items-center text-xs">
                                                    <input type="checkbox" name="remember" className="mr-2" />Remember me
                                                </label>
                                                <a href="#" className="text-xs ml-12">Forgot Password?</a>
                                            </div>
                                            <a href="#" className="border-2 border-sky-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 hover:text-white ">Sign In</a>
                                        </div>
                                        <p className="text-gray-400 text-xs mt-5">Don't have an account? <button className="text-sky-300" onClick={handleToggleForm}>Sign Up</button></p>
                                    </div>
                                </div>
                                {/* Sign in */}
                                <div className="sm:w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-8 sm:py-36 px-12">
                                    <h2 className="text-3xl font-bold mb-2">{getHelloText()}</h2>
                                    <div className="border-2 w-10 border-white inline-block"></div>
                                    <p className="mb-5 sm:mb-10">Enter your personal details and start journey with us</p>
                                    <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 " onClick={handleToggleForm}>{getButtonText()}</button>
                                </div>
                            </>
                        ) : (
                            // Sign up form
                            <>
                                <div className="sm:w-3/5 p-5 order-2 sm:order-1">
                                    <div className="text-left font-bold"> <span className="text-sky-300">Task</span> Master</div>
                                    <div className="py-10">
                                        <h2 className="text-3xl font-bold text-sky-300 mb-2 text-center">Create an Account</h2>
                                        <div className="border-2 w-20 border-sky-300 inline-block mb-2"></div>
                                        <div className="flex flex-col items-center">
                                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaRegEnvelope className="text-gray-400 m-2"/>
                                                <input type="text" name="username" placeholder="Username" className="bg-gray-100 outline-none text-sm flex-1" />
                                            </div>
                                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaRegEnvelope className="text-gray-400 m-2"/>
                                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                                            </div>
                                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><MdLockOutline className="text-gray-400 m-2"/>
                                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                            </div>
                                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><MdLockOutline className="text-gray-400 m-2"/>
                                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                            </div>
                                            <a href="#" className="border-2 border-sky-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 hover:text-white ">Sign Up</a>
                                        </div>
                                        <p className="text-gray-400 text-xs mt-5">Already have an account? <button className="text-sky-300" onClick={handleToggleForm}>Sign In</button></p>
                                    </div>
                                </div>
                                {/* Sign in */}
                                <div className="sm:w-2/5 bg-sky-300 text-white rounded-r-lg rounded-l-3xl py-8 sm:py-36 px-12 order-1 sm:order-2">
                                    <h2 className="text-3xl font-bold mb-2">{getHelloText()}</h2>
                                    <div className="border-2 w-10 border-white inline-block"></div>
                                    <p className="mb-5 sm:mb-10">Enter your personal details and start journey with us</p>
                                    <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 " onClick={handleToggleForm}>{getButtonText()}</button>
                                </div>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
