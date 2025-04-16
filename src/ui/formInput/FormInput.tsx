'use client'
import React, { FormHTMLAttributes, forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";
import Select from "react-select";
import { SelectStyles } from "./SelectInputConfig";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Control, Controller } from "react-hook-form";


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
    ({ label, placeholder, required, errorMsg, ...rest }, ref) => {
        return (
            <div className="flex flex-col w-full">
                {label &&
                    <label className="text-gray-100 mb-2 font-medium">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                }
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
TextInput.displayName = "TextInput";

export const PasswordInput = forwardRef<HTMLInputElement, TextInputPropsI>(
    ({ label, name, required, placeholder, errorMsg }, ref) => {
        const [visibility, setVisibility] = useState(false);

        return (
            <div className="flex flex-col w-full">
                {label &&
                    <label className="text-gray-100 mb-2 font-medium">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                }
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
                        {visibility ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                    </div>
                </div>
                {errorMsg && <span className="text-red-500 text-sm mt-1">{errorMsg}</span>}
            </div>
        );
    }
);
PasswordInput.displayName = "PasswordInput";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    placeholder?: string;
    errorMsg?: string;
    rows?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, placeholder, required, errorMsg, rows = 5, ...rest }, ref) => {
        return (
            <div className="flex flex-col w-full">
                {label &&
                    <label className="text-gray-100 mb-2 font-medium">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                }
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
TextArea.displayName = "TextArea";

export const DateInput = forwardRef<HTMLInputElement, TextInputPropsI>(
    ({ label, required, placeholder, errorMsg, ...rest }, ref) => {
        return (
            <div className="flex flex-col w-full">
                {label &&
                    <label className="text-gray-100 mb-2 font-medium">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                }
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
DateInput.displayName = "DateInput";

type OptionT = { label: string; value: string | number };

interface SelectPropsI {
    defaultValue?: null | OptionT | OptionT[];
    required?: boolean;
    label?: string;
    helperText?: string;
    placeholder?: string;
    loading?: boolean;
    disabled?: boolean;
    isMulti?: boolean;
    closeMenuOnSelect?: boolean;
    options: OptionT[];
    name: string;
    control: Control<any>;
    rules?: any;
    isClearable?: boolean;
}

export const SelectInput = (props: SelectPropsI) => {
    return (
        <div className="flex flex-col w-full">
            {props.label && (
                <label className=" text-gray-100 mb-2 font-medium">
                    {props.label}{" "}
                    {props.required && <span className="text-red-500">*</span>}
                </label>
            )}
            <Controller
                name={props.name}
                control={props.control}
                rules={props.rules}
                defaultValue={props.defaultValue || props.isMulti ? [] : null}
                render={({ field }) => (
                    <Select
                        {...field}
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        styles={SelectStyles}
                        isClearable={props.isClearable}
                        isMulti={Boolean(props.isMulti)}
                        closeMenuOnSelect={props.closeMenuOnSelect}
                        options={props.options}
                        placeholder={props.placeholder || ""}
                        isLoading={props.loading}
                        isDisabled={props.disabled}
                    />
                )}
            />
            {props.helperText && (
                <p className="text-xs text-red-500 mt-1">{props.helperText}</p>
            )}
        </div>
    );
};
SelectInput.displayName = "SelectInput";

