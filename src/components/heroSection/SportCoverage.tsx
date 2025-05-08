import { sports } from '@/utils/ConstantValue'
import React from 'react'
import Image from 'next/image'

const SportCoverage = () => {
    return (
        <>
            <div className="min-h-screen w-full text-white relative">
                <div className="absolute h-full w-full z-10 bg-[linear-gradient(to_right,rgba(10,30,59,0.9),rgba(10,30,59,0.8))]"></div>

                {/* Background Image */}
                <div className="absolute z-0 h-full w-full">
                    <Image
                        src="/banner-bg.jpg"
                        alt="hero image"
                        fill
                        sizes='100vh'
                        className="object-cover"
                    />
                </div>
                <section className="relative z-20 w-full min-h-screen h-auto py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-10 lg:px-20">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="section-title text-white">Sports Coverage</h2>
                            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                                We provide expert picks across major sports leagues to maximize your winning potential
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                            {sports.map((sport, index) => (
                                <div
                                    data-aos="zoom-in" data-aos-duration="1000"
                                    key={index}
                                    className="bg-white rounded-xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-transparent hover:border-gold/20"                                    >
                                    <div className="p-6">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-16 h-16 bg-navy/5 text-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/10 transition-colors duration-700 transform group-hover:scale-110">
                                                {sport.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{sport.name}</h3>
                                            <p className="text-gray-600 mb-4">{sport.description}</p>
                                            <ul className="space-y-2 text-sm text-gray-700 w-full">
                                                {sport.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center">
                                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default SportCoverage