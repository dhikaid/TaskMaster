import React from "react";
import { Head, usePage, router } from "@inertiajs/react";
import LayoutIndex from "../components/Layouts/LayoutIndex";
import CardWorkspace from "../components/Fragments/Card/CardWorkspace";
import { SidebarProvider } from "../components/Fragments/SideBar";

const Home = () => {
    const { user, teams } = usePage().props;

    const handleViewTask = (uuid) => {
        router.visit(`/task/${uuid}`);
    };

    return (
        <>
            <Head title="Home | TaskMaster" />
            <SidebarProvider>
                <LayoutIndex user={user} pageTitle="Workspace">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-start md:m-4">
                        {teams.length > 0 ? (
                            teams.map((team, index) => (
                                <CardWorkspace
                                    key={index}
                                    title={team.team}
                                    creator={team.leader}
                                    members={(team.member || []).map(
                                        (memberDetail) => memberDetail.member
                                    )}
                                    onViewTask={() => handleViewTask(team.uuid)}
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
