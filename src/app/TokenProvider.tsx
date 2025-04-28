"use client";
import { useVerifyTokenMutation } from "@/redux/features/auth/authApi";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { logout } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/features/store";

const TokenProvider = () => {
    const [verifyToken] = useVerifyTokenMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        const refreshToken = Cookies.get("msp_auth_refresh");
        const authenticatedCookie = Cookies.get("authenticated");

        if (refreshToken && authenticatedCookie === "true") {
            verifyToken({ refresh: refreshToken })
                .unwrap()
                .catch(() => {
                    Cookies.remove("msp_auth_access");
                    Cookies.remove("msp_auth_refresh");
                    Cookies.remove("authenticated");
                    Cookies.remove("is_admin");
                    dispatch(logout());
                    router.replace("/"); // Redirect to home on invalid token
                });
        } else {
            Cookies.remove("msp_auth_access");
            Cookies.remove("msp_auth_refresh");
            Cookies.remove("authenticated");
            Cookies.remove("is_admin");
            dispatch(logout());
        }
    }, [verifyToken, dispatch, router]);

    return null;
};

export default TokenProvider;