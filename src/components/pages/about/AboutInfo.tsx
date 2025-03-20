import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import { GiBoltEye } from 'react-icons/gi'
import { PiTargetBold } from 'react-icons/pi'
import Image from 'next/image'
import FAQs from '@/components/testimonials/FAQs'

const AboutInfo = () => {
    return (
        <main className=' '>
            {/* history section */}
            <section className='grid md:grid-cols-3 grid-cols-1 gap-8 xl:px-32 md:px-24 px-12 py-12 h-[20rem]'>
                <div>
                    <h1 className='text-3xl text-green-3 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-2 border-green-4'>
                        Milestone&apos;s History
                    </h1>
                </div>
                <p className='h-full w-full overflow-hidden text-lg'>
                    At Milestone, we leverage data-driven analysis and expert insights to provide you with the most
                    accurate sports betting predictions. Our platform evaluates historical performance, team statistics,
                    player form, and other key metrics to ensure you make well-informed bets with confidence.
                </p>
                <p className='h-full w-full overflow-hidden text-lg line-clamp-[8]'>
                    Whether you're a seasoned bettor or just getting started, our carefully curated predictions and betting
                    tips help maximize your winning potential. Stay ahead of the game with our expert recommendations,
                    real-time updates, and strategic betting insights. Your success starts here!
                </p>
            </section>

            {/* mission, vision and objective section */}
            <section className="xl:px-32 md:px-24 px-12">
                <div className='z-20 h-full'>
                    <div className=' grid grid-cols-1 md:grid-cols-3 items-start'>
                        <div
                            className='flex flex-col gap-6 p-4  text-green-3 '
                        >
                            <i>
                                <FaNewspaper size={40} />
                            </i>
                            <h2 className='text-3xl text-green-3 font-bold'>
                                Our Mission
                            </h2>
                            <p className='text-lg max-h-56 overflow-hidden line-clamp-[8] text-white'>
                                our mission is to empower sports enthusiasts with accurate, data-driven insights and
                                predictions. We are committed to providing bettors with the tools they need to make informed decisions,
                                increasing their chances of success while promoting responsible betting practices.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6 p-4  text-green-3'
                        >
                            <i>
                                <GiBoltEye size={40} />
                            </i>
                            <h2 className='text-3xl text-green-3 font-bold'>
                                Our Vision
                            </h2>
                            <p className='text-lg max-h-56 overflow-hidden line-clamp-[8] text-white'>
                                Our vision is to become the leading platform for sports betting predictions worldwide. We aim to
                                revolutionize the way people approach sports betting by offering cutting-edge analytics, expert advice, and real-time updates that
                                drive smarter betting strategies.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6 p-4  text-green-3'
                        >
                            <i>
                                <PiTargetBold size={40} />
                            </i>
                            <h2 className='text-3xl text-green-3 font-bold'>
                                Our Objective
                            </h2>
                            <p className='text-lg max-h-56 overflow-hidden line-clamp-[8] text-white'>
                                Our objective is to continuously refine and improve our predictive algorithms,
                                staying ahead of industry trends and providing users with the most accurate, reliable
                                betting information. We seek to build a community of informed bettors who make calculated,
                                confident decisions backed by thorough data analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* why we are bestl */}
            <section className="relative min-h-screen max-h-fit w-full mt-12  md:px-20 px-12 text-center md:py-7 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(19,24,32,0.5),rgba(19,24,32,0.9))]'></div>
                <Image
                    src={'/banner2.jpg'}
                    alt='hero image'
                    fill
                    className='object-fill bg-center'
                />
                <div className='absolute z-20 w-[85%]  text-white'>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='text-3xl text-green-3 font-bold px-1 '>
                            Why we are best
                        </h1>
                        <h6 className='text-lg leading-6 max-w-[50rem]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam culpa corporis sit nulla ad, minima ut possimus magnam
                            porro voluptatum at accusamus debitis expedita quaerat unde deserunt, magni, asperiores dignissimos?
                        </h6>
                        <div className='w-full pt-3 grid grid-cols-4 items-center  gap-x-8 gap-y-[68px]'>
                            {/* <div className='col-span-4 md:col-span-2 lg:col-span-1'> */}
                            <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                <Image
                                    src={'/using-laptop2.jpeg'}
                                    alt='features image'
                                    fill
                                    className='object-cover rounded-xl'
                                />
                                <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-green-4 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-green-4 hover:text-gray-50'

                                >
                                    <h2 className='text-[16px] font-semibold'>Accurate Predictions</h2>
                                </div>
                            </div>
                            <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                <Image
                                    src={'/using-laptop2.jpeg'}
                                    alt='features image'
                                    fill
                                    className='object-cover rounded-xl'
                                />
                                <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-green-4 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-green-4 hover:text-gray-50'

                                >
                                    <h2 className='text-[16px] font-semibold'>Data-Driven Insights</h2>
                                </div>
                            </div>
                            <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                <Image
                                    src={'/using-laptop2.jpeg'}
                                    alt='features image'
                                    fill
                                    className='object-cover rounded-xl'
                                />
                                <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-green-4 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-green-4 hover:text-gray-50'

                                >
                                    <h2 className='text-[16px] font-semibold'>Real-Time Analytics</h2>
                                </div>
                            </div>
                            <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                <Image
                                    src={'/using-laptop2.jpeg'}
                                    alt='features image'
                                    fill
                                    className='object-cover rounded-xl'
                                />
                                <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-green-4 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-green-4 hover:text-gray-50'

                                >
                                    <h2 className='text-[16px] font-semibold'>Precision Predictions</h2>
                                </div>
                            </div>
                            <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                <Image
                                    src={'/using-laptop2.jpeg'}
                                    alt='features image'
                                    fill
                                    className='object-cover rounded-xl'
                                />
                                <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-green-4 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-green-4 hover:text-gray-50'

                                >
                                    <h2 className='text-[16px] font-semibold'>Better Outcomes</h2>
                                </div>
                            </div>
                            <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                <Image
                                    src={'/using-laptop2.jpeg'}
                                    alt='features image'
                                    fill
                                    className='object-cover rounded-xl'
                                />
                                <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-green-4 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-green-4 hover:text-gray-50'

                                >
                                    <h2 className='text-[16px] font-semibold'>Winning Insights</h2>
                                </div>
                            </div>
                            <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                <Image
                                    src={'/using-laptop2.jpeg'}
                                    alt='features image'
                                    fill
                                    className='object-cover rounded-xl'
                                />
                                <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-green-4 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-green-4 hover:text-gray-50'

                                >
                                    <h2 className='text-[16px] font-semibold'>Informed Bets</h2>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>

                    </div>
                </div>
            </section>

            {/* faq section */}
            <div className="relative h-fit w-full xl:px-32 md:px-24 px-12 text-center md:py-7 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <FAQs />
            </div>
        </main>
    )
}

export default AboutInfo