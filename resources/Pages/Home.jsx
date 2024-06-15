import React from "react";
import LayoutHome from "../components/Layouts/LayoutHome";
import Navbar from "../components/Fragments/Navbar";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <>
            <Head title="Home | TaskMaster" />
            <Navbar />
            <LayoutHome />
        </>
    );
};

export default Home;
