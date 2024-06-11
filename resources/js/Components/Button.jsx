import React from "react";

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    const baseClasses = "rounded-2xl py-3.5 text-center w-full";
    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        "light-outline":
            "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    };
    const processingClasses = processing ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${processingClasses} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
