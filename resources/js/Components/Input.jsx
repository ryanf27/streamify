import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className = "",
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl py-3.5 px-7 w-full bg-gray-800 focus:ring-2 focus:ring-indigo-600 ${
                    isError ? "border-red-500" : ""
                } ${
                    variant === "primary" ? "border border-gray-700" : ""
                } ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}
