// Layout.jsx
import React from "react";

const LayoutRegister = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100 relative">
      <head>
        <title>Register</title>
      </head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row md:w-2/3 max-w-4xl relative">
          {children}
        </div>
      </main>
    </div>
  );
};

export default LayoutRegister;
