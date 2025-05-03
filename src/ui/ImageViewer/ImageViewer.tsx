'use client'
import React, { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import Image from 'next/image';

const ImageViewer = ({ src, alt }: { src: string, alt: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleViewClick = () => {
        window.open(src, '_blank');
    };

    return (
        <div
            className="relative inline-block max-w-[100px]  max-h-[80px] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`min-w-[100px] min-h-[100px] w-full h-full relative transition-all duration-200 ${isHovered ? 'blur-sm' : ''
                }`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className='object-cover' />
            </div>
            {isHovered && (
                <i
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-green-4 text-white px-3 py-2 rounded text-2xl
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