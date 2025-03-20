'use client'
import { useVerifyTokenMutation } from '@/redux/features/auth/authApi';
import React, { useEffect, useState } from 'react'

interface propsI {
    children: React.ReactNode;
}
const TokenProvider = (props: propsI) => {
    // const pathname = window.location.pathname;
    const [pathname, setPathname] = useState<string | null>(null);
    const [verifyToken] = useVerifyTokenMutation();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathname(window.location.pathname);
        }
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