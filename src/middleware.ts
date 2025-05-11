// middleware.ts
import { adminProtectedRoutes, publicRoutes, userProtectedRoutes } from "@/utils/routes/routes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Get cookies
    const authenticated = request.cookies.get("authenticated")?.value === "true";
    const is_admin = request.cookies.get("is_admin")?.value === "true";

    // Check route types
    const isPublicRoute = publicRoutes.includes(pathname);
    const isUserProtectedRoute = userProtectedRoutes.some((route) =>
        pathname.startsWith(route)
    );
    const isAdminProtectedRoute = adminProtectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // Allow public routes for all users
    if (isPublicRoute) {
        return NextResponse.next();
    }

    // Redirect unauthenticated users to home
    if (!authenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Allow authenticated users to access user-protected routes
    if (isUserProtectedRoute && !isAdminProtectedRoute) {
        return NextResponse.next();
    }

    // Restrict admin routes to admin users
    if (isAdminProtectedRoute && !is_admin) {
        return NextResponse.redirect(new URL("/403", request.url));
    }

    // Allow access to valid routes
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - API routes (/api/*)
         * - Static files in _next/static (/_next/static/*)
         * - Image optimization files (/_next/image/*)
         * - Specific metadata files (favicon.ico, sitemap.xml, robots.txt)
         * - Files with specific extensions (jpg, jpeg, png, gif, svg, ico, webp, pdf)
         */
        "/((?!api/|_next/static/|_next/image/|favicon.ico|.*\\.jpg|.*\\.jpeg|.*\\.png|.*\\.gif|.*\\.svg|.*\\.ico|.*\\.webp|.*\\.pdf).*)",
    ],
};

// Configure matcher to apply middleware to all routes
// export const config = {
//     matcher: [
//         /*
//          * Match all request paths except for the ones starting with:
//          * - api (API routes)
//          * - _next/static (static files)
//          * - _next/image (image optimization files)
//          * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//          */
//         '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
//     ],
// }
