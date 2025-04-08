"use client"
import Button from '@/ui/button/Button';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1 className="text-white">Hello</h1>

            <Button title='Open' onClick={openModal} width={"fit"} />
            <ModalForm closeModal={closeModal} isModalOpen={isModalOpen} title='Dashboard' >
                <h1>Modal form</h1>
            </ModalForm>

        </div>
    );
};

export default Dashboard;
