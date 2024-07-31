import React from "react";
import { Head, usePage, router } from "@inertiajs/react";
import LayoutIndex from "../components/Layouts/LayoutIndex";
import CardWorkspace from "../components/Fragments/Card/CardWorkspace";
import { SidebarProvider } from "../components/Fragments/SideBar";

const Home = () => {
    const { user, teams } = usePage().props;

    const handleViewTask = (id) => {
        router.visit(`/task/${id}`);
    };

    return (
        <>
            <Head title="Home | TaskMaster" />
            <SidebarProvider>
                <LayoutIndex user={user} pageTitle="Workspace">
                    <div className="flex flex-wrap w-full gap-4 justify-center my-2">
                        {teams.length > 0 ? (
                            teams.map((team, index) => (
                                <CardWorkspace
                                    key={index}
                                    title={team.team}
                                    creator={team.leader.fullname}
                                    members={(team.members || []).map(
                                        (memberDetail) =>
                                            memberDetail.member.username
                                    )}
                                    onViewTask={() => handleViewTask(team.id)}
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
