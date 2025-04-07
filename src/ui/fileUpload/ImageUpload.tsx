'use client';

import { useState } from 'react';
import { MdEdit, MdDelete, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

type ImageInputProps = {
    name: string;
    label?: string;
    value?: File | null;
    onChange?: (val: File | null) => void;
    errorMsg?: string;
};

const getShortenedVal = (val: string) => {
    const splited = val.split('.');
    const ext = splited[splited.length - 1];
    let name = splited.slice(0, -1).join('.');
    if (name.length > 15) {
        name = name.slice(0, 12) + '...' + name.slice(-3);
    }
    return name + '.' + ext;
};

const returnImgUrl = (file: File | null) => {
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
        return URL.createObjectURL(file);
    }
    return '/file_icon.png';
};

export const ImageUploadCard = ({ name, label, value, onChange }: ImageInputProps) => {
    const [val, setVal] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];
            if (file.type.startsWith('image')) {
                setVal(file);
                if (onChange) {
                    onChange(file);
                }
            } else {
                toast.warn('Please select an image.');
            }
        }
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setVal(null);
        if (onChange) {
            onChange(null);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-gray-700 mb-2 font-medium">{label}</label>}
            {val || value ? (
                <label htmlFor={name} className="relative w-64 h-32 overflow-hidden group cursor-pointer">
                    <img
                        src={val ? returnImgUrl(val) : value ? returnImgUrl(value) : ''}
                        className="w-full h-full object-cover group-hover:blur-sm group-hover:brightness-75"
                    />
                    <span className="absolute bottom-[37%] left-[40%] transform -translate-x-1/2 bg-green-2 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                        <MdEdit size={18} />
                    </span>
                    <button
                        onClick={handleClose}
                        className="absolute bottom-[37%] left-[40%] transform translate-x-6 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                    >
                        <MdDelete size={18} />
                    </button>
                </label>
            ) : (
                <label
                    htmlFor={name}
                    className="flex items-center justify-center w-64 h-32 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg cursor-pointer"
                >
                    <MdAdd size={44} />
                </label>
            )}
            <input id={name} type="file" onChange={handleFileChange} hidden />
            <span className="text-sm text-gray-100">{val ? getShortenedVal(val.name) : ''}</span>
        </div>
    );
};
