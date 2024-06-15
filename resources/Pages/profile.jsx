import React from "react";
import Navbar from "../components/Fragments/Navbar";

const Profile = ({ user }) => {
    console.log(user);
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen">
                <div className="mx-auto my-auto min-w-96 h-96 border-2 border-neutral-200 p-4 rounded-lg shadow-sm">
                    <div>Hai, {user.fullname}</div>
                </div>
            </div>
        </>
    );
};
export default Profile;
