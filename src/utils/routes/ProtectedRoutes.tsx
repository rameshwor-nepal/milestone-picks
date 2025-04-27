// "use client";

// import { useAppSelector } from "@/redux/features/store";
// import { useRouter, usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { adminProtectedRoutes, publicRoutes, userProtectedRoutes } from "./routes";

// export function ProtectedRoute({ children }: { children: React.ReactNode }) {
//     const { authenticated, is_admin, noAuth } = useAppSelector((state) => state.auth);
//     const router = useRouter();
//     const pathname = usePathname();
//     console.log("pathname in route", pathname)
//     console.log("authenticated in route", authenticated)
//     console.log("noAuth in route", noAuth)

//     const isRouteMatch = (pathname: string, routes: string[]) =>
//         routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

//     console.log("is route match", isRouteMatch(pathname, adminProtectedRoutes))

//     useEffect(() => {
//         // Allow public routes for everyone
//         if (isRouteMatch(pathname, publicRoutes)) {
//             return;
//         }

//         // Redirect unauthenticated users to login for protected routes
//         if (
//             (isRouteMatch(pathname, adminProtectedRoutes) || isRouteMatch(pathname, userProtectedRoutes)
//             ) && (!authenticated)
//         ) {
//             router.push(`/login`);
//             return;
//         }

//         // Redirect non-admins to 403 for admin routes
//         if (isRouteMatch(pathname, adminProtectedRoutes) && !is_admin) {
//             router.push("/403");
//         }
//     }, [pathname, authenticated, is_admin, router]);

//     // Render nothing while redirecting
//     if (
//         (!authenticated &&
//             (isRouteMatch(pathname, userProtectedRoutes) ||
//                 isRouteMatch(pathname, adminProtectedRoutes))) ||
//         (isRouteMatch(pathname, adminProtectedRoutes) && !is_admin)
//     ) {
//         return null;
//     }

//     return <>{children}</>;
// }