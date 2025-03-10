"use client";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const [isMobileNavBar, setIsMobileNavBar] = useState(false);

    return (
        <>
            {/* Main Navbar */}
            <nav className="lg:px-14 px-10 py-6 flex justify-between items-center">
                {/* Logo */}
                <div>
                    <span className="text-xl sm:text-2xl lg:text-3xl tracking-wider font-medium">
                        Milestone Logo
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex gap-5 cursor-pointer no-underline">

                        <a href="/" className="hover:scale-105 transition-transform duration-300 ease-in-out">
                            Home
                        </a>
                        <a href="/about" className="hover:scale-105 transition-transform duration-300 ease-in-out">
                            About Us
                        </a>
                        <a href="/facilities" className="hover:scale-105 transition-transform duration-300 ease-in-out">
                            Our Plans
                        </a>
                        <a href="/program" className="hover:scale-105 transition-transform duration-300 ease-in-out">
                            Betting Info
                        </a>
                        <a href="/history" className="hover:scale-105 transition-transform duration-300 ease-in-out">
                            Previous History
                        </a>
                        <a href="/contact" className="hover:scale-105 transition-transform duration-300 ease-in-out">
                            Contact Us
                        </a>
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <div className="block lg:hidden  cursor-pointer" onClick={() => setIsMobileNavBar(true)}>
                    <MdMenu size={40} />
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileNavBar && (
                <div className="fixed inset-0 bg-green-900 text-white flex flex-col items-center justify-center z-50">
                    <div className="absolute top-6 right-6 cursor-pointer" onClick={() => setIsMobileNavBar(false)}>
                        <ImCross size={30} />
                    </div>
                    <ul className="flex flex-col gap-6 text-xl">
                        <a href="/" onClick={() => setIsMobileNavBar(false)}>Home</a>
                        <a href="/about" onClick={() => setIsMobileNavBar(false)}>About Us</a>
                        <a href="/facilities" onClick={() => setIsMobileNavBar(false)}>Our Plans</a>
                        <a href="/program" onClick={() => setIsMobileNavBar(false)}>Betting Info</a>
                        <a href="/history" onClick={() => setIsMobileNavBar(false)}>Previous History</a>
                        <a href="/contact" onClick={() => setIsMobileNavBar(false)}>Contact Us</a>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
