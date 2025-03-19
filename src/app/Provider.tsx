'use client';
import { store } from '@/redux/features/store';
import React from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

interface props {
    children: React.ReactNode;
}

const ReduxProvider: React.FC<props> = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    );
};

export default ReduxProvider;
