import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import LayoutIndex from "./LayoutIndex";
import { SidebarProvider } from "../Fragments/SideBar";
import Tabs from "../Elements/input/TabsTask";
import ModalChat from "../Elements/Modal/ModalChat";
import ModalCreateTask from "../Elements/Modal/ModalCreateTask";
import ContentChat from "../Fragments/ChatTask";

const LayoutAllTask = ({ children }) => {
    const { user, team } = usePage().props;
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const openChatModal = (task) => {
        setSelectedTask(task);
        setIsChatModalOpen(true);
    };

    const closeChatModal = () => {
        setIsChatModalOpen(false);
        setSelectedTask(null);
    };

    const openCreateTaskModal = () => {
        setIsCreateTaskModalOpen(true);
    };

    const closeCreateTaskModal = () => {
        setIsCreateTaskModalOpen(false);
    };

    const handleCreateTask = (taskData) => {
        //ngecek saja duls
        console.log("New Task Created: ", taskData);
        closeCreateTaskModal();
    };

    return (
        <>
            <Head title={`Task | ${team.team}`} />
            <SidebarProvider>
                <LayoutIndex user={user} pageTitle="Workspace">
                    <Tabs />
                    <div className="mt-4">
                        <button
                            onClick={openCreateTaskModal}
                            className="mx-2 border p-1.5 px-10 rounded-full font-semibold text-lg bg-neutral-950 text-white"
                        >
                            Create Task
                        </button>
                        {children(openChatModal)}
                    </div>
                </LayoutIndex>
            </SidebarProvider>
            <ModalChat isOpen={isChatModalOpen} onClose={closeChatModal}>
                {selectedTask && <ContentChat task={selectedTask} />}
            </ModalChat>
            <ModalCreateTask
                isOpen={isCreateTaskModalOpen}
                onClose={closeCreateTaskModal}
                onSubmit={handleCreateTask}
            />
        </>
    );
};

export default LayoutAllTask;
