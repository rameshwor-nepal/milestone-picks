'use client'
import React, { FormHTMLAttributes, forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";
import { Icon } from "react-icons-kit";
import { ic_visibility } from "react-icons-kit/md/ic_visibility";
import { ic_visibility_off } from "react-icons-kit/md/ic_visibility_off";

export interface TextInputPropsI extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    errorMsg?: string;
}

interface PropI extends FormHTMLAttributes<HTMLFormElement> {
    loading?: boolean;
    children?: React.ReactNode;
}

export const Form = ({ loading, children, className, ...rest }: PropI) => {
    return (
        <form
            {...rest}
            className={`px-6 py-4  ${loading ? "pointer-events-none" : ""} ${className || ""}`}
        >
            <div className={loading ? "bg-gray-200 opacity-50" : ""}>{children}</div>
        </form>
    );
};

export const TextInput = forwardRef<HTMLInputElement, TextInputPropsI>(
    ({ label, placeholder, errorMsg, ...rest }, ref) => {
        return (
            <div className="flex flex-col w-full">
                {label && <label className="text-gray-100 mb-2 font-medium">{label}</label>}
                <input
                    ref={ref} // Forwarding ref here
                    className="w-full px-4 py-2 text-blue-1 border rounded-md focus:ring-1 focus:ring-green-3 focus:border-green-3 outline-none transition"
                    placeholder={placeholder || ""}
                    type="text"
                    {...rest}
                />
                {errorMsg && <span className="text-red-500 text-sm mt-1">{errorMsg}</span>}
            </div>
        );
    }
);

export const PasswordInput = forwardRef<HTMLInputElement, TextInputPropsI>(
    ({ label, name, placeholder, errorMsg }, ref) => {
        const [visibility, setVisibility] = useState(false);

        return (
            <div className="flex flex-col w-full">
                {label && <label className="text-gray-100 mb-2 font-medium">{label}</label>}
                <div className="relative">
                    <input
                        ref={ref}
                        name={name}
                        placeholder={placeholder || ""}
                        type={visibility ? "text" : "password"}
                        className="w-full px-4 py-2 text-blue-1 border rounded-md focus:ring-1 focus:ring-green-3 focus:border-green-3 outline-none transition"
                    />
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setVisibility(!visibility)}
                    >
                        <Icon size={20} icon={visibility ? ic_visibility : ic_visibility_off} />
                    </div>
                </div>
                {errorMsg && <span className="text-red-500 text-sm mt-1">{errorMsg}</span>}
            </div>
        );
    }
);

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    placeholder?: string;
    errorMsg?: string;
    rows?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, placeholder, errorMsg, rows = 5, ...rest }, ref) => {
        return (
            <div className="flex flex-col w-full">
                {label && <label className="text-gray-100 mb-2 font-medium">{label}</label>}
                <textarea
                    ref={ref}
                    className="w-full p-2 text-blue-1 border rounded-md resize-none focus:ring-1 focus:ring-green-3 focus:border-green-3 outline-none"
                    rows={rows}
                    placeholder={placeholder || ""}
                    {...rest}
                ></textarea>
                {errorMsg && <span className="text-red-500 text-sm mt-1">{errorMsg}</span>}
            </div>
        );
    }
);

export const DateInput = forwardRef<HTMLInputElement, TextInputPropsI>(
    ({ label, placeholder, errorMsg, ...rest }, ref) => {
        return (
            <div className="flex flex-col w-full">
                {label && <label className="text-gray-100 mb-2 font-medium">{label}</label>}
                <input
                    ref={ref}
                    className="w-full px-4 py-2 text-blue-1 border rounded-md focus:ring-1 focus:ring-green-3 focus:border-green-3 outline-none transition"
                    placeholder={placeholder || ""}
                    type="date"
                    {...rest}
                />
                {errorMsg && <span className="text-red-500 text-sm mt-1">{errorMsg}</span>}
            </div>
        );
    }
);

