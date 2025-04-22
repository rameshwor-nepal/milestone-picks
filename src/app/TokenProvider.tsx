'use client'
import { useVerifyTokenMutation } from '@/redux/features/auth/authApi';
import React, { useEffect } from 'react'

const TokenProvider = () => {
    const [verifyToken] = useVerifyTokenMutation();

    useEffect(() => {
        const refreshToken = localStorage.getItem("msp_auth_refresh");
        if (refreshToken) {
            verifyToken({ refresh: refreshToken })
                .unwrap()
                .catch(() => {
                    localStorage.removeItem("msp_auth_access");
                    localStorage.removeItem("msp_auth_refresh");
                });
        }
    }, [verifyToken]);

    return null;
}

export default TokenProvider