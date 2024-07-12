import React from "react";
import { Head } from "@inertiajs/react";
import LayoutIndex from "../components/Layouts/LayoutIndex";
import CardWorkspace from "../components/Fragments/Card/CardWorkspace";

const Home = ({ user, pageTitle }) => {
    const handleViewTask = (path) => {
        router.visit(path);
    };

    const cards = [
        {
            title: "Romusha",
            creator: "Danu",
            members: ["Member1", "Member2", "Member3"],
            path: "/task/romusha",
        },
        {
            title: "SBT",
            creator: "Vito",
            members: ["Member1", "Member2", "Member3"],
            path: "/task/sbt",
        },
        {
            title: "Google",
            creator: "Mark",
            members: ["Member1", "Member2", "Member3"],
            path: "/task/google",
        },
    ];
    return (
        <>
            <Head title="Home | TaskMaster" />
            <LayoutIndex user={user} pageTitle="Workspace">
                {cards.map((card, index) => (
                    <CardWorkspace
                        key={index}
                        title={card.title}
                        creator={card.creator}
                        members={card.members}
                        onViewTask={() => handleViewTask(card.path)}
                    />
                ))}
            </LayoutIndex>
        </>
    );
};

export default Home;
