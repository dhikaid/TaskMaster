import React from "react";
import LayoutAllTask from "../components/Layouts/LayoutAllTask";
import { tasks, chat } from "../services/tasks";
import TaskCard from "../components/Fragments/Card/CardTask";
import { Head, usePage } from "@inertiajs/react";

const AllTask = () => {
    const { team } = usePage().props;

    return (
        <>
            <Head title="All Task | TaskMaster" />
            <LayoutAllTask>
                {(openModal) => (
                    <div className="p-4">
                        {tasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                openModal={openModal}
                                chat={chat}
                            />
                        ))}
                    </div>
                )}
            </LayoutAllTask>
        </>
    );
};

export default AllTask;
