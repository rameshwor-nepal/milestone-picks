import React, { ButtonHTMLAttributes } from 'react'

interface PropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    width?: 'full' | 'fit';
    secondary?: boolean;
}
const Button = ({ title, onClick, width, secondary }: PropsI) => {
    return (
        <div>
            <button className={` ${secondary ? "bg-white text-blue-1" : "bg-green-2 text-white"} font-bold py-2 px-4 ${width === 'fit' ? 'w-fit' : 'w-full'} rounded transition-all  ${secondary ? "hover:bg-gray-300" : "hover:bg-green-2/80"}`}
                onClick={(e) => onClick && onClick(e)}
            >
                {title}
            </button>
        </div>
    )
}

export default Button