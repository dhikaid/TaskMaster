import React from "react";

const ButtonForm = ({
    type,
    onClick,
    children,
    className,
    disabled = false,
    isloading = false,
}) => (
    <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`border-2 border-neutral-600 bg-neutral-800 rounded-xl px-14 py-3 inline-block font-semibold hover:bg-neutral-900 text-white mt-2 text-sm ${
            isloading
                ? "inline-flex px-[34px] items-center justify-center bg-blue-500 hover:bg-blue-400 transition ease-in-out duration-150 cursor-not-allowed"
                : ""
        } ${className}`}
    >
        {isloading && (
            <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        )}
        {children}
    </button>
);

export default ButtonForm;
