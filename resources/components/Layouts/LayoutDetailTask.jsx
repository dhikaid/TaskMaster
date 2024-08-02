import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import LayoutIndex from "./LayoutIndex";
import { SidebarProvider } from "../Fragments/SideBar";
import Tabs from "../Elements/input/TabsTask";
import ModalChat from "../Elements/Modal/ModalChat";
import ContentChat from "../Fragments/ChatTask";

const LayoutDetailTask = ({ children }) => {
    const { user, team } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const openModal = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    return (
        <>
            <Head title={`Task | ${team.team}`} />
            <SidebarProvider>
                <LayoutIndex user={user} pageTitle="Workspace">
                    <Tabs />
                    <div className="mt-4">{children(openModal)}</div>
                </LayoutIndex>
            </SidebarProvider>
            <ModalChat isOpen={isModalOpen} onClose={closeModal}>
                {selectedTask && <ContentChat task={selectedTask} />}
            </ModalChat>
        </>
    );
};

export default LayoutDetailTask;
