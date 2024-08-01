import React from "react";
import { Head, usePage } from "@inertiajs/react";
import LayoutIndex from "./LayoutIndex";
import { SidebarProvider } from "../Fragments/SideBar";
import Tabs from "../Elements/input/TabsTask";

const LayoutDetailTask = ({ children }) => {
    const { user, team } = usePage().props;

    return (
        <>
            <Head title={`Task | ${team.team}`} />
            <SidebarProvider>
                <LayoutIndex user={user} pageTitle="Workspace">
                    <Tabs />
                    <div className="mt-4">{children}</div>
                </LayoutIndex>
            </SidebarProvider>
        </>
    );
};

export default LayoutDetailTask;
