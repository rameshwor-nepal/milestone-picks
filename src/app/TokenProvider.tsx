'use client'
import { useVerifyTokenMutation } from '@/redux/features/auth/authApi';
import React, { useEffect } from 'react'

interface propsI {
    children: React.ReactNode;
}
const TokenProvider = (props: propsI) => {
    const pathname = window.location.pathname;
    const [verifyToken] = useVerifyTokenMutation();

    useEffect(() => {
        const authToken = localStorage.getItem("msp_auth_token") || "";

        const verifyUserToken = async () => {
            await verifyToken({ refresh: authToken });
        };

        if (pathname !== "/login" && pathname !== "/signup") {
            verifyUserToken();
        }
    }, [verifyToken, pathname]);
    return (
        <div>  {props.children}</div>
    )
}

export default TokenProvider