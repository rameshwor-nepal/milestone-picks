'use client'
import { UserNavLinks } from '@/components/adminCom/sidenavbar/NavLinks';
import Sidenav from '@/components/adminCom/sidenavbar/SideNav';
import { useLazyFetchUserSubscriptionByEmailQuery } from '@/redux/features/other/subscription/subscriptionApi';
import { useAppSelector } from '@/redux/features/store';
import { Badge } from '@/ui/badge/Badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/ui/card/Card';
import React, { useEffect, useState } from 'react'

const userData = {
    name: "John Smith",
    subscriptionType: "Monthly All-in-One Pass",
    subscriptionStatus: "Active",
    expiresAt: "May 10, 2025",
};

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [sideNavExpanded, setSideNavExpanded] = useState(true);
    const [trigger, { data }] = useLazyFetchUserSubscriptionByEmailQuery();
    const { email, username } = useAppSelector((state) => state.auth)
    useEffect(() => {
        if (email) {
            trigger(email);
        }
    }, [email, trigger])
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

    console.log("data by email in user dashboard", data)
    return (
        <div className="relative flex min-h-screen bg-[#e6effc]">
            {/* Sidebar */}
            <Sidenav
                onExpand={(val) => setSideNavExpanded(val)}
                navLinks={UserNavLinks}
            />

            {/* Main Content */}
            <div
                className={`relative transition-all duration-300 ease-in-out p-1 md:p-2 lg:p-4 overflow-x-hidden 
                min-h-[calc(100vh-5rem)] w-full ${sideNavExpanded ? 'ml-56' : 'ml-[6rem]'}`}
            >
                <div className=" p-1 md:p-2 lg:p-4 rounded-lg  text-left">
                    <div className='flex flex-col space-y-6 '>
                        {/* Welcome Section */}
                        <Card className='text-navy border-[1px] border-gold'>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Welcome, {username}</CardTitle>
                                <CardDescription>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                                        <Badge variant="secondary" className="w-fit">
                                            {userData.subscriptionType}
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">
                                            Status: <span className="text-green-500 font-medium">{userData.subscriptionStatus}</span> •
                                            Expires: {userData.expiresAt}
                                        </span>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default UserLayout;