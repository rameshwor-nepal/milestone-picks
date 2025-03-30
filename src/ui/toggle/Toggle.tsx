'use client';

import { useState } from 'react';

interface ToggleProps {
    initialState: boolean;
    onChange: (state: boolean) => void;
    label?: string;
    disabled: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
    initialState,
    onChange,
    label,
    disabled,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(initialState);

    const handleToggle = () => {
        if (disabled) return;

        const newState = !isChecked;
        setIsChecked(newState);
        if (onChange) {
            onChange(newState);
        }
    };

    return (
        <label className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
                disabled={disabled}
                className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-4"></div>
            <span className="ms-3 text-sm font-medium ">
                {label ? label : ''}
            </span>
        </label>
    );
};

export default Toggle;