import React from "react";
import Navbar from "../components/Fragments/Navbar";
import FormProfile from "../components/Fragments/FormProfile";

const Profile = ({ user }) => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-[90%] max-w-[800px] border-2 border-neutral-200 p-4 rounded-lg shadow-sm flex flex-col mt-16">
                    <FormProfile user={user} />
                </div>
            </div>
        </>
    );
};

export default Profile;
