import React from "react";
import { Link } from "@inertiajs/react";

const Tabs = () => {
    return (
        <div className="flex justify-start mx-2 mb-4 space-x-2 mt-8 items-center">
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg"
            >
                My Task
            </Link>
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg"
            >
                All Task
            </Link>
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg"
            >
                Members
            </Link>
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg"
            >
                Settings
            </Link>
        </div>
    );
};

export default Tabs;
