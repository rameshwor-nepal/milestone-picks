'use client';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface PropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    children?: ReactNode;
    width?: 'full' | 'fit';
    secondary?: boolean;
    buttonType?: 'button' | 'submit' | 'reset';
}

const Button = ({
    title,
    children,
    width = 'full',
    secondary = false,
    buttonType = 'button',
    ...rest
}: PropsI) => {
    const variantClass = secondary ? 'btn-secondary' : 'btn-primary';
    const widthClass = width === 'fit' ? 'w-fit' : 'w-full';

    return (
        <button
            type={buttonType}
            {...rest}
            className={`${variantClass} ${widthClass}`}
        >
            {title && <span>{title}</span>}
            {children}
        </button>
    );
};

export default Button;
