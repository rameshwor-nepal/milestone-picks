import React from 'react'
import { MdPerson } from 'react-icons/md'
import Image from 'next/image'

const BettingInfoCom = () => {
    return (
        <div className='text-gray-400'>
            <section className='grid md:grid-cols-2 grid-cols-1 gap-8 xl:px-32 md:px-24 px-12 py-12'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-white font-extrabold leading-extra-tight max-w-[33rem] px-1 py-2 '>
                        Betting Tips to Maximize Your Success
                    </h1>
                </div>
                <p className='h-full w-full overflow-hidden text-lg line-clamp-[8]'>
                    Whether you're new to sports betting or a seasoned pro,
                    these key principles are the foundation of smart betting. Remember, the goal is to bet
                    responsibly and maximize your chances over the long term.
                </p>
            </section>

            {/* tips section */}
            <section className='grid md:grid-cols-2 grid-cols-1 gap-8 xl:px-48 md:px-24 px-12 py-12'>
                <div className='w-[30rem] h-auto'>
                    <img src="/manage-payroll.jpg" alt="betting-info" />
                </div>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-white font-extrabold max-w-[30rem] py-3'>
                        Manage Your Bankroll Like a Pro
                    </h1>
                    <p className='overflow-hidden text-lg pt-2  line-clamp-[8]'>
                        Managing your bankroll is the most crucial part of betting. Think of your bankroll as the total
                        amount of money you set aside for betting—it's your budget.
                        Here&apos;s the golden rule: only bet 1% to 3% of your bankroll on each stake. This keeps you from
                        losing big on any one bet and helps you ride the ups and downs of the game without going bust.
                        Following this system helps keep you in the game, no matter how hot or cold your streak is.

                    </p>
                </div>
            </section>
            {/* 2nd */}
            <section className='grid md:grid-cols-2 grid-cols-1 gap-8 xl:px-48 md:px-24 px-12 py-12'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-white font-extrabold max-w-[30rem] py-3'>
                        No Emotional Betting

                    </h1>
                    <p className='overflow-hidden text-lg pt-2  line-clamp-[8]'>
                        We get it, emotions can run high in sports! But when it comes to betting, you have to leave your
                        heart at the door. There will be times when you&apos;ll need to bet against your favorite team—don&apos;t
                        let your emotions cloud your judgment.
                        Stick to the facts and data (we&apos;ve got you covered with expert picks), and avoid chasing that
                        "feel-good" bet. In the long run, being logical wins.


                    </p>
                </div>
                <div className='w-[30rem] h-auto'>
                    <img src="/Sports-Betting.jpg" alt="betting-info" />
                </div>
            </section>

            {/* 3rd */}
            <section className='grid md:grid-cols-2 grid-cols-1 gap-8 xl:px-48 md:px-24 px-12 py-12'>
                <div className='w-[30rem] h-auto'>
                    <img src="/stick-to-plan.jpg" alt="betting-info" />
                </div>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-white font-extrabold max-w-[30rem] py-3'>
                        Stay Calm and Stick to the Plan

                    </h1>
                    <p className='overflow-hidden text-lg pt-2  line-clamp-[8]'>
                        Everyone has a bad day—it&apos;s part of the game. Don&apos;t panic or try to recover by doubling your
                        stake the next day. That&apos;s emotional betting, and it can drain your bankroll fast.
                        Winning or losing is part of the journey, and consistency is key. Stick to your bankroll plan, stay
                        disciplined, and follow the expert tips we provide. Our advice is designed to help you stay the
                        course and avoid knee-jerk reactions when things don&apos;t go your way.

                    </p>
                </div>
            </section>

            {/* 4th */}
            <section className='grid md:grid-cols-2 grid-cols-1 gap-8 xl:px-48 md:px-24 px-12 py-12'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-white font-extrabold max-w-[30rem] py-3'>
                        Always Look for Value Bets

                    </h1>
                    <p className='overflow-hidden text-lg pt-2  line-clamp-[8]'>
                        Betting is about finding value, not just betting on the favorite. A heavy favorite doesn&apos;t guarantee
                        a win, and if the odds aren&apos;t worth it, it&apos;s a good idea to pass.
                        Remember, betting is a 50-50 game, and nothing is 100% guaranteed, no matter how confident
                        you feel about a pick. Focus on bets that offer good value and better returns—this is how smart
                        bettors build long-term success.

                    </p>
                </div>
                <div className='w-[30rem] h-auto'>
                    <img src="/look-value-bets.jpg" alt="betting-info" />
                </div>
            </section>

            {/* 5th */}
            <section className='grid md:grid-cols-2 grid-cols-1 gap-8 xl:px-48 md:px-24 px-12 py-12'>
                <div className='w-[30rem] h-auto'>
                    <img src="/look-value-bets.jpg" alt="betting-info" />
                </div>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-white font-extrabold max-w-[32rem] py-3'>
                        Spot Fake Handicappers

                    </h1>
                    <div className='flex flex-col gap-4'>
                        <p className='overflow-hidden text-lg pt-2  line-clamp-[8]'>
                            Unfortunately, there are scammers out there. Fake handicappers will lure you in with pictures of
                            luxury cars and big winnings, but they never show you the full story.
                        </p>
                        <div className='flex gap-5 text-gray-200'>
                            <span className='inline-block px-2 py-1 rounded-md bg-green-2 text-white'>
                                <i>
                                    <MdPerson size={40} />
                                </i>
                            </span>
                            <p className='overflow-hidden text-md line-clamp-[4]'>
                                Legit handicappers, like us, always share their pick history — win or lose.
                            </p>
                        </div>
                        <div className='flex gap-5 text-gray-200'>
                            <span className='inline-block px-2 py-1 rounded-md bg-green-2 text-white'>
                                <i>
                                    <MdPerson size={40} />
                                </i>
                            </span>
                            <p className='overflow-hidden text-md line-clamp-[4]'>
                                We don&apos;t promise "get rich quick" schemes. Sports betting is about strategy and
                                patience, not overnight success.

                            </p>
                        </div>
                        <div className='flex gap-5 text-gray-200'>
                            <span className='inline-block px-2 py-1 rounded-md bg-green-2 text-white max-h-12'>
                                <i>
                                    <MdPerson size={40} />
                                </i>
                            </span>
                            <p className='overflow-hidden text-md line-clamp-[4]'>
                                Watch out for anyone flaunting their lifestyle on social media but not sharing the
                                details of their picks. If it looks too good to be true, it probably is.
                            </p>
                        </div>

                    </div>
                </div>

            </section>

            <section className="relative min-h-[20rem] max-h-fit w-full mt-12  md:px-20 px-12 text-center md:py-7 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(19,24,32,0.6),rgba(19,24,32,0.8))]'></div>
                <Image
                    src={'/bg-tile.png'}
                    alt='subscribe-image'
                    fill
                    className='object-fill bg-center'
                />
                <div className='absolute z-20 w-[85%]  text-white'>
                    <div className='flex flex-col gap-8 items-center py-3'>
                        <h1 className='text-3xl lg:text-4xl text-green-3 font-bold px-1 '>
                            Trust Us to Help You Make Smart, Informed Bets
                        </h1>
                        <h6 className='text-lg leading-6 max-w-[50rem]'>
                            Bet smarter and stay safe from emotional betting and scams with our expert
                            tips and transparent pick history. Trust us to guide you through the betting world with confidence!
                        </h6>

                        <div className='flex flex-col md:flex-row gap-4 items-center'>
                            <h1 className='text-3xl md:text-4xl  text-white font-bold px-4'>
                                Stay Smart
                            </h1>

                            <h1 className='text-3xl md:text-4xl  text-white font-bold px-7 border-x-2 border-green-3'>
                                Stay Consistent
                            </h1>
                            <h1 className='text-3xl md:text-4xl px-4 text-white font-bold'>
                                Bet with Confidence
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BettingInfoCom