import React from "react";
import LayoutProfile from "../components/Layouts/LayoutProfile";

const editProfile = ({ user, pageTitle }) => (
    <LayoutProfile pageTitle="Edit Profile" user={user} isEditing={true} />
);

export default editProfile;
