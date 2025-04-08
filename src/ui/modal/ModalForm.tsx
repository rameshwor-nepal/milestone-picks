'use client'
import React from 'react'
import { MdClose } from 'react-icons/md';

interface PropsI {
    closeModal: () => void;
    isModalOpen: boolean;
    children: React.ReactNode;
    title: string;

}

const ModalForm = ({ closeModal, isModalOpen, children, title }: PropsI) => {
    if (!isModalOpen) return null;
    return (
        <div
            className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md z-[999] flex justify-center items-center bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-blue-2 rounded-lg shadow-gray-600 shadow-md">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-green-3">
                        <h3 className="text-xl font-semibold text-green-3">
                            {title}
                        </h3>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="text-gray-400 hover:bg-green-3 hover:text-gray-900  rounded-sm inline-flex justify-center items-center"
                        >
                            <MdClose size={20} />
                        </button>
                    </div>
                    {children}

                </div>
            </div>
        </div>
    )

}

export default ModalForm