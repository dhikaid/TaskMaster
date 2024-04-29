import React from "react";
export default function Home(data) {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome</h1>
            <p className="text-xl bg-red-600 flex justify-center items-center">Hello {data.data}, welcome to your first Inertia app!</p>
        </div>
    );
}
