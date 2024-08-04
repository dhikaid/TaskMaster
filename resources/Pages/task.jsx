import React from "react";
import { SidebarProvider } from "../components/Fragments/SideBar";
import LayoutHome from "../components/Layouts/LayoutHome";
import { Head } from "@inertiajs/react";

const Task = ({ user }) => {
    return (
        <>
            <Head title="My Profile | TaskMaster" />
            <div>Task</div>
        </>
    );
};

export default Task;
