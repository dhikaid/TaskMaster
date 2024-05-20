import React from "react";
import CardHome from "../Elements/Home/CardHome";

const TaskList = ({ tasks }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
                <CardHome key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
