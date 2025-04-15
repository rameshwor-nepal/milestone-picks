
import Link from 'next/link';
import React from 'react';


interface PlanFeature {
    name: string;
    included: boolean;
}

interface SubscriptionCardProps {
    name: string;
    price: string;
    duration: string;
    description: string;
    features: PlanFeature[];
    popular?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
    name,
    price,
    duration,
    description,
    features,
    popular = false,
}) => {
    return (
        <div className={`rounded-xl overflow-hidden ${popular ? 'border-2 border-gold shadow-lg transform scale-105' : 'border border-gray-200'
            }`}
        >
            {popular && (
                <div className="bg-gold text-navy py-3 px-4 text-center font-bold text-sm">
                    MOST POPULAR
                </div>
            )}

            <div className="p-6 md:p-8 bg-white">
                <h3 className="text-2xl font-bold text-navy">{name}</h3>
                <div className="mt-4 flex items-baseline">
                    <span className="text-3xl md:text-4xl font-bold text-navy">{price}</span>
                    <span className="ml-2 text-gray-500">/{duration}</span>
                </div>

                <p className="mt-4 text-gray-600">{description}</p>

                <div className="mt-6 space-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            {feature.included ? (
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            )}
                            <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>
                                {feature.name}
                            </span>
                        </div>
                    ))}
                </div>

                <Link
                    href="/contactUs"
                    className={`mt-8 block w-full text-center py-3 rounded-md font-bold transition-colors ${popular
                        ? 'bg-gold hover:bg-gold-light text-navy'
                        : 'bg-navy hover:bg-navy-light text-white'
                        }`}
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default SubscriptionCard;
