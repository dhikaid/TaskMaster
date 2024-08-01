import React from "react";
import LayoutDetailTask from "../components/Layouts/LayoutDetailTask";
import { tasks } from "../services/tasks";
import TaskCard from "../components/Fragments/Card/CardTask";

const DetailTask = () => {
    return (
        <LayoutDetailTask>
            <div className="p-4">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </LayoutDetailTask>
    );
};

export default DetailTask;
