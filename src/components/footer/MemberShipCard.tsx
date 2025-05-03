import Link from 'next/link'
import React from 'react'

const MemberShipCard = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50 text-left">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="bg-[#f0f6ff] rounded-lg shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-2/3 p-8 md:p-12">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4">
                                    Ready to Start Winning?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Get immediate access to all our premium picks across NBA, NFL, MLB, NHL, and College Basketball with our All-in-One Pass.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        // data-aos="fade-right"
                                        href="/plan"
                                        className="btn-primary"
                                    >
                                        View Membership Options
                                    </Link>
                                    <Link
                                        // data-aos="fade-left"
                                        href="/history"
                                        className="text-navy border-2 border-navy font-semibold py-2 px-6 rounded-md hover:bg-navy hover:text-white transition-colors duration-200 text-center">
                                        View Past Results
                                    </Link>
                                </div>
                            </div>
                            <div className="md:w-1/3 bg-navy-dark flex items-center justify-center p-8">
                                <div className="text-center">
                                    <p className="text-gold font-display font-bold text-4xl mb-2" data-aos="zoom-in" data-aos-duration="1000">60%+</p>
                                    <p className="text-white text-lg">Win Rate</p>
                                    <div className="h-px w-16 bg-gold mx-auto my-4"></div>
                                    <p className="text-white">Documented results across all sports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MemberShipCard