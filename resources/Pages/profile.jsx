import React from "react";
import LayoutProfile from "../components/Layouts/LayoutProfile";
import { SidebarProvider } from "../components/Fragments/SideBar";
import { Head } from "@inertiajs/react";

const Profile = ({ user, pageTitle }) => {
    return (
        <>
            <Head title="My Profile | TaskMaster" />
            <SidebarProvider>
                <LayoutProfile
                    pageTitle="My Profile"
                    user={user}
                    isEditing={false}
                />
            </SidebarProvider>
        </>
    );
};

export default Profile;
