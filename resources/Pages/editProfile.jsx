import React from "react";
import LayoutProfile from "../components/Layouts/LayoutProfile";

const editProfile = ({ user }) => (
    <LayoutProfile user={user} isEditing={true} />
);

export default editProfile;
