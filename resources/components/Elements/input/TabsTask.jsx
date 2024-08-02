import React from "react";
import { Link } from "@inertiajs/react";

const Tabs = () => {
    return (
        <div className="flex flex-wrap justify-start mx-2 mt-4 items-center">
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg my-2"
            >
                My Task
            </Link>
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg my-2"
            >
                All Task
            </Link>
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg my-2"
            >
                Members
            </Link>
            <Link
                href="#"
                className="mx-2 border bg-neutral-300 hover:bg-neutral-950 hover:text-white p-1.5 px-10 rounded-full font-semibold text-lg my-2"
            >
                Settings
            </Link>
        </div>
    );
};

export default Tabs;
