'use client'
import React, { useState } from 'react';
import { IoMdEye } from 'react-icons/io';

const ImageViewer = ({ src, alt }: { src: string, alt: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleViewClick = () => {
        window.open(src, '_blank');
    };

    return (
        <div
            className="relative inline-block max-w-[300px] max-h-[180px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-all duration-200 ${isHovered ? 'blur-sm' : ''
                    }`}
            />
            {isHovered && (
                <i
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-green-4 text-white px-4 py-2 rounded text-2xl
                    hover:bg-green-4/60 transition-all duration-200 cursor-pointer"
                    onClick={handleViewClick}
                >
                    <IoMdEye />
                </i>
            )}
        </div>
    );
};

export default ImageViewer;