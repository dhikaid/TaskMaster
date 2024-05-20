import React, { useState } from "react";
import { router } from "@inertiajs/react";
import HomeLayouts from "../components/Layouts/HomeLayouts";
import TaskGroups from "../components/Elements/Header/TaskCategori";
import TaskList from "../components/Fragments/TaskList";

function Home(props) {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "UI Elements Design",
            assignedTo: "John D.",
            status: "On going",
            group: "My Tasks",
        },
        {
            id: 2,
            title: "Project Submission",
            assignedTo: "Shane Wals & Rudy B.",
            status: "On going",
            group: "My Tasks",
        },
        {
            id: 3,
            title: "Front End: Vue JS Part:1",
            assignedTo: "Max R.",
            status: "Pending",
            group: "Pending Tasks",
        },
        {
            id: 4,
            title: "Front End: Form Validation",
            assignedTo: "Max R.",
            status: "Pending",
            group: "Pending Tasks",
        },
        {
            id: 5,
            title: "UI Elements Design",
            assignedTo: "Max R.",
            status: "On going",
            group: "All Tasks",
        },
        {
            id: 6,
            title: "Laravel: Database Integration",
            assignedTo: "Max R.",
            status: "Pending",
            group: "All Tasks",
        },
        {
            id: 7,
            title: "BarCode Integration",
            assignedTo: "Shane Wals & Rudy B.",
            status: "Pending",
            group: "All Tasks",
        },
        {
            id: 8,
            title: "PDF Part (Error)",
            assignedTo: "Shane Wals & Rudy B.",
            status: "Error",
            group: "All Tasks",
        },
    ]);

    const [selectedGroup, setSelectedGroup] = useState("My Tasks");

    const handleGroupChange = (group) => {
        setSelectedGroup(group);
    };

    const handleLogout = () => {
        router.post("/logout");
    };

    const filteredTasks = tasks.filter((task) => task.group === selectedGroup);

    return (
        <HomeLayouts
            selectedGroup={selectedGroup}
            onSelectGroup={handleGroupChange}
            onLogout={handleLogout}
        >
            <TaskGroups
                selectedGroup={selectedGroup}
                onGroupChange={handleGroupChange}
            />
            <TaskList tasks={filteredTasks} />
        </HomeLayouts>
    );
}

export default Home;
