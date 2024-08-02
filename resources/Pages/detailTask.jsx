import React from "react";
import LayoutDetailTask from "../components/Layouts/LayoutDetailTask";
import { tasks, chat } from "../services/tasks";
import TaskCard from "../components/Fragments/Card/CardTask";

const DetailTask = () => {
    return (
        <LayoutDetailTask>
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
        </LayoutDetailTask>
    );
};

export default DetailTask;
