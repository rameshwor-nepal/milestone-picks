'use client';

import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_add_outline } from 'react-icons-kit/md/ic_add_outline';
import { ic_delete } from 'react-icons-kit/md/ic_delete';
import { ic_edit } from 'react-icons-kit/md/ic_edit';
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
                onChange && onChange(file);
            } else {
                toast.warn('Please select an image.');
            }
        }
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setVal(null);
        onChange && onChange(null);
    };

    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-gray-700 mb-2 font-medium">{label}</label>}
            {val || value ? (
                <label htmlFor={name} className="relative w-32 h-40 overflow-hidden group cursor-pointer">
                    <img
                        src={val ? returnImgUrl(val) : value ? returnImgUrl(value) : ''}
                        className="w-full h-full object-cover group-hover:blur-sm group-hover:brightness-75"
                    />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                        <Icon size={18} icon={ic_edit} />
                    </span>
                    <button
                        onClick={handleClose}
                        className="absolute bottom-0 left-1/2 transform translate-x-6 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                    >
                        <Icon size={18} icon={ic_delete} />
                    </button>
                </label>
            ) : (
                <label
                    htmlFor={name}
                    className="flex items-center justify-center w-32 h-40 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg cursor-pointer"
                >
                    <Icon size={44} icon={ic_add_outline} />
                </label>
            )}
            <input id={name} type="file" onChange={handleFileChange} hidden />
            <span className="text-sm text-gray-600">{val ? getShortenedVal(val.name) : ''}</span>
        </div>
    );
};
