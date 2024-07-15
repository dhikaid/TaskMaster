import React from "react";
import LayoutProfile from "../components/Layouts/LayoutProfile";
import { SidebarProvider } from "../components/Fragments/SideBar";
import { Head } from "@inertiajs/react";

const Profile = ({ user, pageTitle }) => {
    return (
        <>
            <Head title="Edit Profile | TaskMaster" />
            <SidebarProvider>
                <LayoutProfile
                    pageTitle="Account Settings"
                    user={user}
                    isEditing={true}
                />
            </SidebarProvider>
        </>
    );
};

export default Profile;
