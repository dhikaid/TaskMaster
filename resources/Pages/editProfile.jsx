import React from "react";
import LayoutProfile from "../components/Layouts/LayoutProfile";

const editProfile = ({ user, pageTitle }) => (
    <LayoutProfile pageTitle="Account Settings" user={user} isEditing={true} />
);

export default editProfile;
