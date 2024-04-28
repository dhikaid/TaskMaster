import React from "react";
export default function Home(data) {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Hello {data.data}, welcome to your first Inertia app!</p>
        </div>
    );
}
