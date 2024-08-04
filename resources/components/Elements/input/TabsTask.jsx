import React from "react";
import { Link, usePage } from "@inertiajs/react";

const Tabs = () => {
    const { url } = usePage();
    const { team } = usePage().props;

    return (
        <div className="flex flex-wrap justify-start mx-2 mt-4 items-center">
            <Link
                href={`/task/${team.uuid}`}
                className={`mx-2 border p-1.5 px-10 rounded-full font-semibold text-lg my-2 ${
                    url === `/task/${team.uuid}`
                        ? "bg-neutral-950 text-white"
                        : "bg-neutral-300 hover:bg-neutral-950 hover:text-white"
                }`}
            >
                My Task
            </Link>
            <Link
                href={`/task/${team.uuid}/all`}
                className={`mx-2 border p-1.5 px-10 rounded-full font-semibold text-lg my-2 ${
                    url === `/task/${team.uuid}/all`
                        ? "bg-neutral-950 text-white"
                        : "bg-neutral-300 hover:bg-neutral-950 hover:text-white"
                }`}
            >
                All Task
            </Link>
            <Link
                href={`/task/${team.uuid}/members`}
                className={`mx-2 border p-1.5 px-10 rounded-full font-semibold text-lg my-2 ${
                    url === `/task/${team.uuid}/members`
                        ? "bg-neutral-950 text-white"
                        : "bg-neutral-300 hover:bg-neutral-950 hover:text-white"
                }`}
            >
                Members
            </Link>
            <Link
                href={`/task/${team.uuid}/settings`}
                className={`mx-2 border p-1.5 px-10 rounded-full font-semibold text-lg my-2 ${
                    url === `/task/${team.uuid}/settings`
                        ? "bg-neutral-950 text-white"
                        : "bg-neutral-300 hover:bg-neutral-950 hover:text-white"
                }`}
            >
                Settings
            </Link>
        </div>
    );
};

export default Tabs;
