import React from "react";
import { Head, usePage } from "@inertiajs/react";
import LayoutIndex from "../components/Layouts/LayoutIndex";
import CardWorkspace from "../components/Fragments/Card/CardWorkspace";
import { SidebarProvider } from "../components/Fragments/SideBar";

const Home = () => {
    const { user, teams } = usePage().props;

    const handleViewTask = (path) => {
        router.visit(path);
    };

    return (
        <>
            <Head title="Home | TaskMaster" />
            <SidebarProvider>
                <LayoutIndex user={user} pageTitle="Workspace">
                    <div className="flex flex-wrap w-full gap-4">
                        {teams.length > 0 ? (
                            teams.map((team, index) => (
                                <CardWorkspace
                                    key={index}
                                    title={team.team}
                                    creator={team.leader.fullname}
                                    members={(team.member || []).map(
                                        (member) => member.username
                                    )}
                                    onViewTask={() =>
                                        handleViewTask(`/task/${team.id}`)
                                    }
                                />
                            ))
                        ) : (
                            <p>No teams available.</p>
                        )}
                    </div>
                </LayoutIndex>
            </SidebarProvider>
        </>
    );
};

export default Home;
