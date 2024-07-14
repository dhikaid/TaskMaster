import React from "react";
import LayoutHome from "./LayoutHome";
import FormProfile from "../Fragments/FormProfile";
import ChangePassword from "./ChangePassword";

const LayoutProfile = ({ user, isEditing, pageTitle }) => {
    return (
        <LayoutHome pageTitle={pageTitle} user={user}>
            <div className="justify-center items-center w-full bg-neutral-200 ">
                <div className=" xl:h-[70svh] h-full border-2 border-neutral-200 p-4 rounded-[25px] shadow-sm flex justify-center items-center mx-auto bg-white">
                    <FormProfile user={user} isEditing={isEditing} />
                    <ChangePassword user={user} />
                </div>
            </div>
        </LayoutHome>
    );
};

export default LayoutProfile;
