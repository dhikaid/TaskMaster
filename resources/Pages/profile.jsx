import React from "react";
import Navbar from "../components/Fragments/Navbar";
import { FaUserLarge } from "react-icons/fa6";
import FormProfile from "../components/Fragments/FormProfile";

const Profile = ({ user }) => {
    console.log(user);
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-[90%] max-w-[800px] h-[500px] border-2 border-neutral-200 p-4 rounded-lg shadow-sm flex flex-col  mt-16">
                    <div className="mb-4 flex items-center justify-center">
                        <FaUserLarge className="w-20 h-20 border-2 rounded-full border-neutral-200 shadow-sm " />
                    </div>
                    <FormProfile user={user} />
                </div>
            </div>
        </>
    );
};

export default Profile;
