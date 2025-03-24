'use client'
import React, { ButtonHTMLAttributes } from 'react'

interface PropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    width?: 'full' | 'fit';
    secondary?: boolean;
    buttonType?: "button" | "submit" | "reset";
}
const Button = ({ title, width, secondary, buttonType, ...rest }: PropsI) => {
    return (
        <div>
            <button className={` ${secondary ? "bg-black-1 text-white" : "bg-green-2 text-white"} font-bold py-2 px-4 ${width === 'fit' ? 'w-fit' : 'w-full'} rounded transition-all  ${secondary ? "hover:bg-gray-900" : "hover:bg-green-4"}`}
                type={buttonType ? buttonType : "button"}  {...rest}
            >
                {title}
            </button>
        </div>
    )
}

export default Button