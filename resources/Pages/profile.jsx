import React from "react";
import LayoutProfile from "../components/Layouts/LayoutProfile";

const Profile = ({ user, pageTitle }) => (
    <LayoutProfile pageTitle="My Profile" user={user} isEditing={false} />
);

export default Profile;
