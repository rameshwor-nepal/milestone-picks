import { features } from '@/utils/ConstantValue'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <div>
            <section className="py-16 md:py-24 ">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="section-title">Why Choose WinningStreak?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide more than just picks - we deliver a complete betting system designed to maximize your profits
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
                        {features.map((feature, index) => (
                            <div
                                data-aos="zoom-in" data-aos-duration="1000"
                                key={index}
                                className="bg-white rounded-xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-transparent hover:border-gold/20"

                            >
                                <div className="p-8 text-center">
                                    <div className="w-16 h-16 bg-navy/5 text-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/10 transition-colors duration-300 transform group-hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                                <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default WhyChooseUs