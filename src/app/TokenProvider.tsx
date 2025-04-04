'use client'
import { useVerifyTokenMutation } from '@/redux/features/auth/authApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface propsI {
    children: React.ReactNode;
}
const TokenProvider = (props: propsI) => {
    // const pathname = window.location.pathname;
    const router = useRouter();
    const [pathname, setPathname] = useState<string | null>(null);
    const [verifyToken] = useVerifyTokenMutation();
    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathname(window.location.pathname);
        }
        const authToken = localStorage.getItem("msp_auth_token") || "";

        const verifyUserToken = async () => {
            await verifyToken({ refresh: authToken })
                .unwrap()
                .then(() => { })
                .catch(() => {
                    router.push('/login')
                    toast.error("Failed to validate token")
                })
        };

        // if (pathname !== "/login" && pathname !== "/signup") {
        //     verifyUserToken();
        // }
    }, [verifyToken, pathname]);
    return (
        <div>  {props.children}</div>
    )
}

export default TokenProvider