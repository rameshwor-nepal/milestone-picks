import React from 'react'
import Image from 'next/image'
import FAQs from '@/components/testimonials/FAQs'
import { MdTune } from 'react-icons/md'
import { GiArchiveResearch } from 'react-icons/gi'
import { FaBookOpen, FaCalendarAlt, FaCheckCircle, FaChessKnight } from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'
import { AiOutlineRise } from 'react-icons/ai'
import { BiLineChart } from 'react-icons/bi'
import Testimonial from '@/components/testimonials/Testimonial'
import Button from '@/ui/button/Button'

const AboutInfo = () => {
    return (
        <main className=' text-gray-200'>
            {/* history section */}
            <section className='grid md:grid-cols-3 grid-cols-1 gap-8 xl:px-32 md:px-24 px-12 py-12 h-[20rem]'>
                <div>
                    <h1 className='text-3xl text-green-3 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-2 border-green-3'>
                        Milestone&apos;s History
                    </h1>
                </div>
                <p className='h-full w-full overflow-hidden text-base'>
                    At Milestone, we leverage data-driven analysis and expert insights to provide you with the most
                    accurate sports betting predictions. Our platform evaluates historical performance, team statistics,
                    player form, and other key metrics to ensure you make well-informed bets with confidence.
                </p>
                <p className='h-full w-full overflow-hidden text-base line-clamp-[8]'>
                    Whether you&apos;re a seasoned bettor or just getting started, our carefully curated predictions and betting
                    tips help maximize your winning potential. Stay ahead of the game with our expert recommendations,
                    real-time updates, and strategic betting insights. Your success starts here!
                </p>
            </section>

            {/* mission, vision and objective section */}
            <section className='grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 xl:px-32 md:px-24 px-12 py-12'>

                <div>
                    <h1 className='text-3xl lg:text-4xl text-green-3 font-extrabold max-w-[30rem] py-3'>
                        <span className='text-white text-3xl'> Our Mission </span><br /> Quality Over Quantity
                    </h1>
                    <p className='overflow-hidden text-base pt-2  line-clamp-[8]'>
                        We offer high-quality, research-backed picks that give you the best chance to win. We don&apos;t
                        flood your inbox with random selections just to check a box
                    </p>

                    {/* mission points */}
                    <div className='flex gap-4 mt-6 md:mt-9 text-gray-200'>
                        <div className='flex flex-col items-start '>
                            <span className='inline-block w-fit p-3 rounded-md bg-green-2 text-white max-h-12'>
                                <i>
                                    <GiArchiveResearch size={28} />
                                </i>
                            </span>
                            <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                Focused & Research
                            </h3>
                            <p className='overflow-hidden text-md line-clamp-[6] '>
                                Watch out for anyone flaunting their lifestyle on social media but not sharing the
                                details of their picks. If it looks too good to be true, it probably is.
                            </p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <span className='inline-block w-fit p-3 rounded-md bg-green-2 text-white max-h-12'>
                                <i>
                                    <FaCheckCircle size={28} />
                                </i>
                            </span>
                            <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                Confidence Over Volume
                            </h3>
                            <p className='overflow-hidden text-md line-clamp-[6]'>
                                Our priority is confidence over volume — every pick we share is one we truly believe
                                in, ensuring you receive only the best insights.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto'>
                    <img src="/manage-payroll.jpg" alt="betting-info" />
                </div>
            </section>

            {/* our growing legacy */}
            <section className='relative min-h-[35rem] max-h-fit w-full flex items-center mt-12 justify-center text-center overflow-hidden'>
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(16,20,26,0.9),rgba(16,20,26,0.9))]'></div>
                <Image
                    src={'/bg3.jpg'}
                    alt='hero image'
                    fill
                    className='object-fill bg-center'
                />
                <section className='absolute z-20 w-full flex justify-center text-gray-200'>
                    <div className='text-center flex flex-col gap-6 md:gap-10 lg:gap-14 items-center'>
                        <div className=' max-w-[50rem]'>
                            <h1 className='text-3xl lg:text-4xl text-green-3 font-extrabold text-center'>
                                <span className='text-3xl text-white'> A Growing Legacy </span><br /> Experience, Strategy & Results
                            </h1>
                            <p className='overflow-hidden text-base pt-2 md:pt-5  line-clamp-[8]'>
                                With seven years in betting, we&apos;ve only recently started sharing our insights,
                                offering predictions to subscribers for about a year.
                            </p>
                        </div>

                        <div className='flex gap-4'>
                            <div className='flex flex-col items-center '>
                                <span className='inline-block p-3 rounded-md bg-green-2 text-white'>
                                    <i>
                                        <FaCalendarAlt size={28} />
                                    </i>
                                </span>
                                <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                    Years of Expertise
                                </h3>
                                <p className='overflow-hidden text-md line-clamp-[6] text-center max-w-[24rem]'>
                                    With over seven years in the betting world, our foundation is built on deep industry
                                    knowledge and proven strategies.
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='inline-block p-3 rounded-md bg-green-2 text-white '>
                                    <i>
                                        <FaBookOpen size={28} />
                                    </i>
                                </span>
                                <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                    A New Chapter
                                </h3>
                                <p className='overflow-hidden text-md line-clamp-[6] text-center max-w-[24rem]'>
                                    While we&apos;ve only been sharing our insights with a broader audience for about a year, our years of experience
                                    ensure our predictions are well-refined and reliable.
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='inline-block p-3 rounded-md bg-green-2 text-white '>
                                    <i>
                                        <FiTarget size={28} />
                                    </i>
                                </span>
                                <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                    Proven Strategies for Success
                                </h3>
                                <p className='overflow-hidden text-base line-clamp-[6] text-cente max-w-[24rem]'>
                                    We&apos;ve spent years perfecting our approach, focusing on long-term profitability to
                                    help our subscribers achieve the results they deserve.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </section>

            {/* betting is not sprint, it's a marathon */}
            <section className='xl:px-32 md:px-24 px-12 py-4 md:py-6 lg:py-20 my-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='w-auto h-[15rem]'>
                        <img src="/manage-payroll.jpg" alt="betting-info" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className='text-3xl lg:text-4xl text-white font-extrabold max-w-[30rem] py-3'>
                            Betting Isn&apos;t a <span className='text-green-3'> Sprint</span>, It&apos;s a
                            <span className='text-green-3'> Marathon</span>
                        </h1>
                        <p className='overflow-hidden text-base pt-2  line-clamp-[8]'>
                            We&apos;re committed to the long game, focusing on steady profits over weeks and months,
                            even if a few tough days come along—that&apos;s just part of betting

                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mt-5 md:mt-10 lg:mt-14 text-gray-200'>
                    <div className='flex items-center gap-5'>
                        <span className='inline-block px-3 py-5 rounded-md bg-green-2 text-white'>
                            <i>
                                <AiOutlineRise size={28} />
                            </i>
                        </span>
                        <div>
                            <h3 className='text-xl md:text-2xl text-green-3 mb-2 font-bold'>
                                Long-Term Success Over Short-Term Swings
                            </h3>
                            <p className='overflow-hidden text-base line-clamp-[6] text-cente'>
                                Betting isn&apos;t about daily wins; it&apos;s about long-term growth.
                                Short-term losses happen, but we focus on consistent profits over weeks and months.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <span className='inline-block w-fit px-3 py-5 rounded-md bg-green-2 text-white'>
                            <i>
                                <FaChessKnight size={28} />
                            </i>
                        </span>
                        <div>
                            <h3 className='text-xl md:text-2xl text-green-3 mb-1 font-bold'>
                                Smart Strategy, Not Just Luck
                            </h3>
                            <p className='overflow-hidden text-base line-clamp-[6] text-cente'>
                                Winning in betting isn&apos;t about quick picks—it requires patience, discipline, and well-researched
                                decisions to stay ahead.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <span className='inline-block w-fit px-3 py-5 rounded-md bg-green-2 text-white'>
                            <i>
                                <MdTune size={28} />
                            </i>
                        </span>
                        <div>
                            <h3 className='text-xl md:text-2xl text-green-3 font-bold'>
                                Balanced Approach to Picks
                            </h3>
                            <p className='overflow-hidden text-base line-clamp-[6] text-cente'>
                                Some days we may provide multiple picks, and while not every single one will hit,
                                our overall strategy ensures you stay profitable in the long run.

                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <span className='inline-block w-fit px-3 py-5 rounded-md bg-green-2 text-white'>
                            <i>
                                <BiLineChart size={28} />
                            </i>
                        </span>
                        <div>
                            <h3 className='text-xl md:text-2xl text-green-3 font-bold'>
                                Guidance Through the Ups & Downs
                            </h3>
                            <p className='overflow-hidden text-base line-clamp-[6] text-cente'>
                                We&apos;re here to help you navigate the highs and lows, keeping you focused on the
                                bigger picture rather than short-term results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* more than predictions */}
            <section className='relative min-h-screen max-h-fit w-full flex items-center mt-12 justify-center overflow-hidden'>
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(16,20,26,0.6),rgba(16,20,26,0.9))]'></div>
                <Image
                    src={'/banner2.jpg'}
                    alt='hero image'
                    fill
                    className='object-fill bg-center'
                />
                <section className='absolute z-20 w-full xl:px-32 md:px-24 px-12 py-4 md:py-6 lg:py-20 my-4 flex justify-center'>
                    <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-8'>
                        <div>
                            <h1 className='text-3xl lg:text-4xl text-white font-extrabold max-w-[30rem] py-3'>
                                MORE THAN JUST <span className='text-green-3'> PREDICTIONS</span>

                            </h1>
                            <p className='overflow-hidden text-lg pt-2  line-clamp-[8]'>
                                At Milestone Picks, we don&apos;t just give you picks and call it a day. We&apos;re all about teaching you
                                smart betting strategies.
                            </p>
                            <div className='flex items-center justify-between py-3 border-b-2 border-gray-600'>
                                <div className='py-2'>
                                    <h3 className='text-xl md:text-2xl text-green-3 font-bold'>
                                        Smart Betting Strategies
                                    </h3>
                                    <p className='mt-2'>
                                        We go beyond picks by teaching you effective betting techniques for long-term success.
                                    </p>
                                </div>

                                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-transparent stroke-text'>
                                    01
                                </h1>
                            </div>
                            <div className='flex items-center justify-between py-3 border-b-2 border-gray-600'>
                                <div className='py-2'>
                                    <h3 className='text-xl md:text-2xl text-green-3 font-bold'>
                                        Smart Betting Strategies
                                    </h3>
                                    <p className=''>
                                        We go beyond picks by teaching you effective betting techniques for long-term success.
                                    </p>
                                </div>
                                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-transparent stroke-text'>
                                    02
                                </h1>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <div className='py-2'>
                                    <h3 className='text-xl md:text-2xl text-green-3 font-bold'>
                                        Smart Betting Strategies
                                    </h3>
                                    <p className=''>
                                        We go beyond picks by teaching you effective betting techniques for long-term success.
                                    </p>
                                </div>
                                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-transparent stroke-text">
                                    03
                                </h1>
                            </div>
                        </div>
                        <div className='w-full h-auto ml-4'>
                            <img src="/Sports-Betting.jpg" alt="betting-info" />
                        </div>
                    </div>
                </section>
            </section>

            {/* why we arre best */}
            <section className=' h-fit w-full flex items-center py-4 md:py-6 lg:py-20 justify-center text-center overflow-hidden'>
                <section className='w-full flex justify-center'>
                    <div className='text-center flex flex-col gap-6 md:gap-10 lg:gap-14 items-center'>
                        <div className=' max-w-[50rem]'>
                            <h1 className='text-3xl lg:text-4xl text-green-3 font-extrabold text-center'>
                                <span className='text-3xl text-white'> Why we are </span> Best
                            </h1>
                            <p className='overflow-hidden text-base pt-2 md:pt-5  line-clamp-[8]'>
                                Many claim to have the perfect betting formula, but we set ourselves apart
                                with true transparency—showcasing both our wins and losses.
                            </p>
                        </div>

                        <div className='flex gap-4 text-gray-200'>
                            <div className='flex flex-col items-center'>
                                <span className='inline-block p-3 rounded-md bg-green-2 text-white'>
                                    <i>
                                        <FaCalendarAlt size={28} />
                                    </i>
                                </span>
                                <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                    Transparency First
                                </h3>
                                <p className='overflow-hidden text-md line-clamp-[6] text-center max-w-[24rem]'>
                                    We&apos;re open about both our wins and losses—no hiding behind perfect records.
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='inline-block p-3 rounded-md bg-green-2 text-white '>
                                    <i>
                                        <FaBookOpen size={28} />
                                    </i>
                                </span>
                                <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                    Disciplined Strategy
                                </h3>
                                <p className='overflow-hidden text-md line-clamp-[6] text-center max-w-[24rem]'>
                                    Our long-term approach helps subscribers stay profitable over time.
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='inline-block p-3 rounded-md bg-green-2 text-white '>
                                    <i>
                                        <FiTarget size={28} />
                                    </i>
                                </span>
                                <h3 className='text-xl md:text-2xl text-green-3 font-bold py-3 '>
                                    Proven Track Record
                                </h3>
                                <p className='overflow-hidden text-base line-clamp-[6] text-cente max-w-[24rem]'>
                                    You can check our pick history anytime—we let the results speak for themselves.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </section>

            {/* faq section */}
            <div className="relative h-fit w-full xl:px-32 md:px-24 px-12 text-center md:py-7 my-5 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <FAQs />
            </div>
            <Testimonial />

            {/* join us now */}
            <section className='relative min-h-[30rem] max-h-fit w-[80%] mx-auto mb-10 lg:mb-20 flex items-center justify-center overflow-hidden md:py-7 my-5 lg:py-14 sm:py-14 py-6'>
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(16,20,26,0.5),rgba(16,20,26,0.5))]'></div>
                <Image
                    src={'/bg2.jpg'}
                    alt='hero image'
                    fill
                    className='object-fill bg-center'
                />
                <section className='absolute z-20 w-full xl:px-32 md:px-24 px-12 py-4 md:py-6 lg:py-20 my-4 flex justify-center'>
                    <div className='flex flex-col text-center gap-8 items-center py-3'>
                        <h1 className='text-3xl lg:text-4xl text-green-3 font-bold px-1 '>
                            <span className='text-white'>  Let&apos;s Make </span>Betting Smarter
                        </h1>
                        <h6 className='text-lg leading-6 max-w-[50rem]'>
                            Bet smarter and stay safe from emotional betting and scams with our expert
                            tips and transparent pick history. Trust us to guide you through the betting world with confidence!
                        </h6>
                        <div className='px-44 w-full' >
                            <input
                                className="bg-gray-200 text-blue-1 border border-gray-300 mb-4 md:mb-6 focus:ring-1 focus:ring-green-3 focus:border-green-3 outline-none transition rounded py-2 px-4 w-full"
                                type="email"
                                placeholder='Enter email'

                            />
                            <Button title='Join Now' />
                        </div>

                    </div>
                </section>
            </section>
        </main>
    )
}

export default AboutInfo