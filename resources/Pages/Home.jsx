import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import LayoutIndex from "../components/Layouts/LayoutIndex";
import CardWorkspace from "../components/Fragments/Card/CardWorkspace";
import { SidebarProvider } from "../components/Fragments/SideBar";
import { usePage } from "@inertiajs/react";
const Home = ({ user, pageTitle }) => {
    const handleViewTask = (path) => {
        router.visit(path);
    };
    const { csrf } = usePage().props;
    const csrfRef = useRef(csrf);
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
            <SidebarProvider>
                <LayoutIndex user={user} pageTitle="Workspace">
                    <input
                        type="hidden"
                        name="_token"
                        value={csrf}
                        ref={csrfRef}
                    />
                    <div className="flex flex-wrap w-full justify-center gap-4 lg:flex-nowrap over">
                        {cards.map((card, index) => (
                            <CardWorkspace
                                key={index}
                                title={card.title}
                                creator={card.creator}
                                members={card.members}
                                onViewTask={() => handleViewTask(card.path)}
                            />
                        ))}
                    </div>
                </LayoutIndex>
            </SidebarProvider>
        </>
    );
};

export default Home;
