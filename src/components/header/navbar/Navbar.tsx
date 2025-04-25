"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation'
import { useAppSelector } from "@/redux/features/store";
import { AuthButton } from "../AuthHeader";

const Navbar = () => {
    const [isMobileNavBar, setIsMobileNavBar] = useState(false);
    const { authenticated } = useAppSelector((state) => state.auth)
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (path: string) => {
        return pathname === path;
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Betting Info", path: "/bettingInfo" },
        { name: "Our Plans", path: "/plan" },
        { name: "Previous History", path: "/history" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="w-full h-16 mx-auto px-4 py-4 md:px-8 lg:px-14">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <span className="font-display font-bold text-xl lg:text-2xl text-navy">Milestone<span className="text-gold">Picks</span></span>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 [@media(max-width:890px)]:space-x-2 text-base">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`font-medium ${isActive(link.path)
                                    ? "text-gold border-b-2 border-gold"
                                    : "text-gray-600 hover:text-navy"
                                    } transition-colors duration-200`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        {
                            authenticated ?
                                <AuthButton /> :
                                <button
                                    className="bg-navy-dark text-base px-3 py-1 text-white rounded-[4px] transition-all duration-200 shadow-md outline-none border-none hover:bg-navy/80 hover:shadow-lg"
                                    onClick={() => router.push('/login')}
                                >
                                    Sign in
                                </button>
                        }
                    </div>
                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileNavBar(!isMobileNavBar)}
                            className="text-navy focus:outline-none"
                        >
                            {isMobileNavBar ? <ImCross size={24} /> : <MdMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileNavBar && (
                <div className="bg-blue-50 pb-3 ">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsMobileNavBar(false)}
                                className={`py-2 px-4 rounded-md ${isActive(link.path)
                                    ? "bg-navy text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
