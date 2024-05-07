import React from "react";
import { router } from "@inertiajs/react";

export default function Home(props) {
    const handleSubmit = () => {
        // Form data to be submitted
        const formData = {
            _token: props.csrf,
        };
        console.log(formData);
        // Send POST request to '/users' route with form data
        router.post("/logout", formData);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome</h1>
            <p className="text-xl bg-red-600 flex justify-center items-center">
                Hello {props.csrf}, welcome to your first Inertia app!
            </p>
            <button onClick={handleSubmit}>Logout</button>
        </div>
    );
}
