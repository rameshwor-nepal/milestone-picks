import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareTwitter, FaSquareInstagram } from 'react-icons/fa6'
import { MdPhone, MdMyLocation } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="bg-navy-dark text-white text-left">
            <div className="px-4 py-12 md:px-10 lg:px-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
                    {/* Brand + Socials */}
                    <div>
                        <h3 className="font-display font-bold text-2xl mb-4">
                            Milestone<span className="text-gold">Picks</span>
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Professional sports betting picks and analysis to help you win more consistently.
                        </p>
                        <div className="flex space-x-4">
                            {[FaSquareTwitter, FaFacebookSquare, FaYoutube, FaSquareInstagram].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="text-gray-300 hover:text-gold transition-colors duration-300 hover:scale-110 transform"
                                >
                                    <Icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Betting Info", path: "/bettingInfo" },
                                { name: "Our Plans", path: "/plan" },
                                { name: "Previous History", path: "/history" },
                                { name: "Contact Us", path: "/contact" },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sports */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Sports</h3>
                        <ul className="space-y-2">
                            {["NBA", "NFL", "MLB", "NHL", "College Basketball"].map((sport) => (
                                <li key={sport}>
                                    <a
                                        // href="#"
                                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                                    >
                                        {sport} Picks
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <MdMyLocation size={20} className="mr-3 text-gold flex-shrink-0 mt-1" />
                                <span>123 Betting Lane, Sports City, SC 12345</span>
                            </li>
                            <li className="flex items-center">
                                <MdPhone size={20} className="mr-3 text-gold flex-shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope size={20} className="mr-3 text-gold flex-shrink-0" />
                                <span>info@winningstreak.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} WinningStreak. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        {["Privacy Policy", "Terms of Service", "Disclaimer"].map((text, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                            >
                                {text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
