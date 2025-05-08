import React from 'react'
import { MdClose } from 'react-icons/md';
import Button from '../button/Button';
import { cn } from "@/utils/cn/utils"

interface PropsI {
    closeModal: () => void;
    isModalOpen: boolean;
    title: string;
    info: string;
    onConfirm: () => void;
    varient?: "normal" | "danger"
}
const ConfirmModal = ({ closeModal, isModalOpen, info, title, onConfirm, varient }: PropsI) => {
    if (!isModalOpen) return null;
    const isDanger = varient === "danger"
    return (
        <div
            className="overflow-y-auto overflow-x-hidden fixed inset-0 bottom-0 backdrop-blur-[7px] z-[999] flex justify-center items-center bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-navy-dark rounded-lg shadow-gray-600 shadow-md">
                    <div className={cn('flex items-center justify-between p-4 md:p-5 border-b rounded-t', isDanger ? 'border-red-500' : 'border-gold-light'
                    )}>
                        <h3 className={cn('text-xl font-semibold', isDanger ? 'text-red-500' : 'text-gold-light')}>
                            {title}
                        </h3>
                        <button
                            type="button"
                            onClick={() => closeModal()}
                            className="text-gray-400 hover:bg-gold-light hover:text-gray-900  rounded-sm inline-flex justify-center items-center"
                        >
                            <MdClose size={20} />
                        </button>
                    </div>
                    <div className="p-4">
                        <p className="text-base text-slate-50">{info}</p>
                        <div className="mt-8 flex items-center justify-end gap-3">
                            <Button title='Cancel' onClick={() => closeModal()} />
                            <Button title='Confirm' secondary onClick={() => onConfirm()} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal