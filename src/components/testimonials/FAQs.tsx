import React from 'react'
import Image from 'next/image'

const FAQs = () => {
    return (
        <div className='flex  gap-16 justify-between max-sm:flex-wrap'>
            <div className='w-[52rem] h-[30rem] mt-12 relative bg-navy rounded-t-[50%]'>
                <Image
                    src={'/using-laptop.jpeg'}
                    alt='hero image'
                    fill
                    className='object-cover rounded-t-[50%]'
                />
            </div>
            <div className="w-full space-y-4 py-10 text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-navy"> Frequently Asked Questions ?</h2>
                <div className="w-20 h-1 bg-gold mb-6"></div>

                <div className='pt-6 flex flex-col gap-3'>
                    <details className="group border-s-8 border-gold bg-navy px-6 py-3">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-white">
                                What is sports betting prediction?
                            </h2>

                            <span className="shrink-0 rounded-full bg-gold p-1.5 text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-2 leading-relaxed text-white  line-clamp-[5]">
                            Sports betting prediction involves analyzing data, trends, and expert insights to predict the
                            outcomes of sporting events. Our platform uses advanced algorithms to provide you with accurate
                            and actionable predictions for better betting decisions.
                        </p>
                    </details>
                    <details className="group border-s-8 border-gold bg-navy px-6 py-3">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-white">
                                How accurate are your predictions?
                            </h2>

                            <span className="shrink-0 rounded-full bg-gold p-1.5 text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-2 leading-relaxed text-white  line-clamp-[5]">
                            Our predictions are based on a combination of historical data, team performance, player stats, and
                            other critical factors. While no prediction is 100% guaranteed, our approach has consistently delivered
                            reliable results over time.
                        </p>
                    </details>
                    <details className="group border-s-8 border-gold bg-navy px-6 py-3">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-white">
                                Is your service suitable for beginners?
                            </h2>

                            <span className="shrink-0 rounded-full bg-gold p-1.5 text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-2 leading-relaxed text-white  line-clamp-[5]">
                            Absolutely! Our platform is designed to cater to both beginners and experienced bettors. We offer
                            easy-to-understand insights, as well as detailed statistical analysis, to help you make informed
                            decisions at every level.
                        </p>
                    </details>
                    <details className="group border-s-8 border-gold bg-navy px-6 py-3">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-white">
                                How do you update your predictions?
                            </h2>

                            <span className="shrink-0 rounded-full bg-gold p-1.5 text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-2 leading-relaxed text-white  line-clamp-[5]">
                            We update our predictions in real-time, taking into account the latest statistics, game conditions,
                            and expert insights. Our team continuously monitors the sports landscape to ensure our predictions
                            are as current and relevant as possible.
                        </p>
                    </details>
                    <details className="group border-s-8 border-gold bg-navy px-6 py-3">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-white">
                                What makes your platform different from others?
                            </h2>

                            <span className="shrink-0 rounded-full bg-gold p-1.5 text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-white  line-clamp-[5]">
                            Our platform combines expert analysis, real-time data, and cutting-edge algorithms to deliver
                            the most accurate and actionable sports betting predictions. We focus on transparency, reliability,
                            and responsible betting to provide a comprehensive and user-friendly experience.s.
                        </p>
                    </details>
                </div>


            </div>
        </div>
    )
}

export default FAQs