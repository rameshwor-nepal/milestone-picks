'use client';

import { useState } from 'react';

const Test = () => {
    const [inputValue, setInputValue] = useState('');
    const maxLength = 50;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const isMaxReached = inputValue.length >= maxLength;
    console.log("hello!!")
    return (
        <div className="flex flex-col text-navy gap-2 w-[300px]">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxLength}
                className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                placeholder="Type here..."
            />
            <span
                className={`self-end text-sm transition-colors duration-200 ${isMaxReached ? 'text-red-500' : 'text-gray-600'
                    }`}
            >
                {inputValue.length}/{maxLength}
            </span>
        </div>
    );
};

export default Test;