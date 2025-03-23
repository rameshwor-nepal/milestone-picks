'use client'
import React, { useState } from 'react'
import Sidenav from '../sidenavbar/SideNav'

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [sideNavExpanded, setSideNavExpanded] = useState(true);

    console.log("side nav expanded in admin layout", sideNavExpanded)

    return (
        <div className="relative flex min-h-screen bg-blue-2">

            {/* Sidebar */}
            <Sidenav
                onExpand={(val) => setSideNavExpanded(val)}
            />

            {/* Main Content */}
            <div
                className={`relative z-10 transition-all duration-300 ease-in-out bg-blue-1 p-4 overflow-x-hidden 
                mt-[5rem] min-h-[calc(100vh-5rem)] w-full ${sideNavExpanded ? 'ml-56' : 'ml-[6rem]'}`}
            >
                <div className="bg-blue-1 p-4 rounded-lg shadow-md">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
