import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareTwitter, FaSquareInstagram } from 'react-icons/fa6'
import { MdPhone, MdMyLocation } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="bg-navy text-white text-left">
            <div className="container mx-auto px-4 py-12 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-display font-bold text-xl mb-4">Milestone<span className="text-gold">Picks</span></h3>
                        <p className="text-gray-300 mb-4">
                            Professional sports betting picks and analysis to help you win more consistently.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                <FaSquareTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                <FaFacebookSquare size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                <FaYoutube size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                <FaSquareInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Betting Info", path: "/betting-info" },
                                { name: "Our Plans", path: "/plans" },
                                { name: "Previous History", path: "/history" },
                                { name: "Contact Us", path: "/contact" },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Sports</h3>
                        <ul className="space-y-2">
                            {["NBA", "NFL", "MLB", "NHL", "College Basketball"].map((sport) => (
                                <li key={sport}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {sport} Picks
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MdMyLocation size={20} className="mr-2 text-gold flex-shrink-0 mt-1" />
                                <span>123 Betting Lane, Sports City, SC 12345</span>
                            </li>
                            <li className="flex items-center">
                                <MdPhone size={20} className="mr-2 text-gold flex-shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope size={20} className="mr-2 text-gold flex-shrink-0" />
                                <span>info@winningstreak.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} WinningStreak. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer