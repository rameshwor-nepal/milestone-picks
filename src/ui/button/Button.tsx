import React, { ButtonHTMLAttributes } from 'react'

interface PropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    width?: 'full' | 'fit';
}
const Button = ({ title, onClick, width }: PropsI) => {
    return (
        <div>
            <button className={`bg-green-2 text-white font-bold py-2 px-4 ${width === 'fit' ? 'w-fit' : 'w-full'} rounded transition-all hover:bg-green-2/80`}
                onClick={(e) => onClick && onClick(e)}
            >
                {title}
            </button>
        </div>
    )
}

export default Button