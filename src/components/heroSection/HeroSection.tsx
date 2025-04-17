import React from 'react'
import Image from 'next/image'
import Button from '@/ui/button/Button'
import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'

const HeroSection = () => {
    return (
        <>
            <section className="w-full relative text-left">
                <div className="h-[calc(100vh-64px)] text-white relative">
                    {/* Overlay */}
                    <div className="absolute h-full w-full z-10 bg-[linear-gradient(to_right,rgba(10,30,59,0.9),rgba(10,30,59,0.8))]"></div>

                    {/* Background Image */}
                    <div className="absolute z-0 h-full w-full">
                        <Image
                            src="/landing-page-bg.jpeg"
                            alt="hero image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Foreground Content */}
                    <div className="absolute z-20 w-full h-full">
                        {/* Hero Content */}
                        <section className="flex items-center justify-center h-full ">
                            <div className="w-full mx-auto px-4 md:px-8 lg:px-20">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 mb-10 md:mb-0">
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                                            Expert Sports Picks <span className="text-gold">That Win</span>
                                        </h1>
                                        <p className="text-lg md:text-xl text-gray-300 mt-3 mb-4 md:mt-6 md:mb-8 max-w-lg">
                                            Join thousands of members who trust our professional sports betting picks for NBA, NFL, MLB, NHL and College Basketball.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href="/plans" className="inline-block">
                                                <Button title="View Our Plans" secondary width="full">
                                                    <MdArrowForward size={18} />
                                                </Button>
                                            </Link>
                                            <Link href="/history" className="text-white font-semibold py-2 px-6 border-2 border-white rounded-md hover:bg-white/10 transition-colors duration-200">
                                                View Past Results
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center md:justify-end w-full">
                                        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="font-display font-bold text-navy text-xl">Today&apos;s Top Pick</h3>
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Premium</span>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-md mb-4 text-navy">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm text-gray-500">NBA - 7:30 PM EST</p>
                                                        <p className="font-bold">Lakers vs. Celtics</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold ">Lakers +3.5</p>
                                                        <p className="text-green-600 text-sm font-medium">Confidence: 85%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/plans" className="btn-primary w-full flex items-center justify-center">
                                                Unlock All Picks
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection