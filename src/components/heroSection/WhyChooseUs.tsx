import { features, sports } from '@/utils/ConstantValue'
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 text-gold">
                                        {feature.icon}
                                    </div>
                                    <h3 className=" font-bold text-xl text-navy mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default WhyChooseUs