import React from "react";
import { Head, usePage } from "@inertiajs/react";

const DetailTask = () => {
    const { team } = usePage().props;

    return (
        <>
            <Head title={`Task | ${team.team}`} />
            <div className="container mx-auto my-4">
                <h1 className="text-3xl font-bold">{team.team}</h1>
                <p>Leader: {team.leader.fullname}</p>
                <p>Members:</p>
                <ul className="list-disc list-inside">
                    {team.member.map((memberDetail, index) => (
                        <li key={index}>{memberDetail.member.username}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DetailTask;
