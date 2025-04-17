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
                                    key={index}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full h-full"
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-4">
                                                {sport.icon}
                                            </div>
                                            <h3 className="font-display font-bold text-xl text-navy mb-2">{sport.name}</h3>
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