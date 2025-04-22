"use client";

import { useAppSelector } from "@/redux/features/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { adminProtectedRoutes, publicRoutes, userProtectedRoutes } from "./routes";

const isRouteMatch = (pathname: string, routes: string[]) =>
    routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { authenticated, is_admin } = useAppSelector((state) => state.auth);
    const router = useRouter();
    const pathname = usePathname();
    console.log("pathname in route", pathname)
    console.log("is authentication", authenticated)
    console.log("is admin", is_admin)

    const pthname = pathname && `/${pathname.split('/')[1]}`;

    useEffect(() => {
        // Allow public routes for everyone
        if (isRouteMatch(pathname, publicRoutes)) {
            return;
        }

        // Redirect unauthenticated users to login for protected routes
        if (
            (isRouteMatch(pthname, userProtectedRoutes) ||
                isRouteMatch(pthname, adminProtectedRoutes)) &&
            !authenticated
        ) {
            router.push(`/login`);
            return;
        }

        // Redirect non-admins to 403 for admin routes
        if (isRouteMatch(pthname, adminProtectedRoutes) && !is_admin) {
            router.push("/403");
        }
    }, [pthname, authenticated, is_admin, router]);

    // Render nothing while redirecting
    if (
        (!authenticated &&
            (isRouteMatch(pthname, userProtectedRoutes) ||
                isRouteMatch(pthname, adminProtectedRoutes))) ||
        (isRouteMatch(pthname, adminProtectedRoutes) && !is_admin)
    ) {
        return null;
    }

    return <>{children}</>;
}