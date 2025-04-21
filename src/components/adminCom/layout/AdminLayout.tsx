'use client'
import React, { useEffect, useState } from 'react'
import Sidenav from '../sidenavbar/SideNav'
import { AdminNavLinks } from '../sidenavbar/NavLinks';

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [sideNavExpanded, setSideNavExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setSideNavExpanded(false);
            }
        };
        // Set initial state based on window width
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative flex min-h-screen bg-navy-dark">

            {/* Sidebar */}
            <Sidenav
                onExpand={(val) => setSideNavExpanded(val)}
                navLinks={AdminNavLinks}
            />

            {/* Main Content */}
            <div
                className={`relative transition-all duration-300 ease-in-out bg-blue-1 p-1 md:p-2 lg:p-4 overflow-x-hidden 
                mt-[5rem] min-h-[calc(100vh-5rem)] w-full ${sideNavExpanded ? 'ml-56' : 'ml-[6rem]'}`}
            >
                <div className="bg-blue-1 p-1 md:p-2 lg:p-4 rounded-lg shadow-md">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
