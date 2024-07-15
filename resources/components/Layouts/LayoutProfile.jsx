import React from "react";
import LayoutHome from "./LayoutIndex";
import FormProfile from "../Fragments/FormProfile";
import ChangePassword from "./ChangePassword";

const LayoutProfile = ({ user, isEditing, pageTitle }) => {
    return (
        <LayoutHome pageTitle={pageTitle} user={user}>
            <div className="flex justify-center items-center w-full">
                <FormProfile user={user} isEditing={isEditing} />
                <ChangePassword user={user} />
            </div>
        </LayoutHome>
    );
};

export default LayoutProfile;
