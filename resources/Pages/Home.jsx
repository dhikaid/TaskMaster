import React from "react";
import { Head } from "@inertiajs/react";
import LayoutHome from "../components/Layouts/LayoutHome";

const Home = () => {
    return (
        <>
            <Head title="Home | TaskMaster" />
            <LayoutHome>
                <h1>Welcome to the Home Page</h1>
            </LayoutHome>
        </>
    );
};

export default Home;
