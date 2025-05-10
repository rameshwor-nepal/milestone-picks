'use client'
import React from 'react'
import Image from 'next/image'
import { MdArrowForward, MdOutlineTrendingUp } from 'react-icons/md'
import { FaBookOpen } from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'
import Button from '@/ui/button/Button'
import Link from 'next/link'
import WhyChooseUs from '@/components/heroSection/WhyChooseUs'
import { useFetchStatsInfoQuery } from '@/redux/features/other/aboutInfo/statsInfo/statsInfoApi'

const AboutInfo = () => {
    const { data: statsInfo } = useFetchStatsInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    return (
        <main className=' text-gray-200'>

            {/* Stats Section */}
            <section id="stats" className="py-8 bg-white relative z-10">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 transform transition-all duration-1000 translate-y-0 opacity-100`}>
                        {statsInfo && statsInfo.results.length > 0 ?
                            statsInfo.results.map((stat, index) => (
                                <div
                                    data-aos="zoom-in" data-aos-duration="1000"
                                    key={index}
                                    className="border-none rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-slate-50 group"
                                >
                                    <div className="p-6 text-center">
                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                <span className='text-3xl text-gold'>
                                                    <i className={`fa ${stat.icon}`}></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="font-bold text-4xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {stat.description}
                                        </div>
                                    </div>
                                    <div className="h-1.5 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-300"></div>
                                </div>
                            )) : null}
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section id="mission" className="py-16 bg-white overflow-hidden text-left">
                <div className=" px-4 md:px-10 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 w-full">Our Mission: Quality Over Quantity</h2>
                    <div className="w-20 h-1 bg-gold mb-4"></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className={`w-full md:w-1/2 `}>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At Milestone Picks, our goal is simple: to offer high-quality, research-backed picks
                                that give you the best chance to win. We don&apos;t flood your inbox with random selections
                                just to check a box. Instead, we prioritize the picks we truly believe in, even if that
                                means you won&apos;t receive a tip every single day. Rest assured, when we send a pick,
                                it&apos;s one we&apos;re confident in.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While we&apos;ve been immersed in the betting world for over seven years, we&apos;re relatively new
                                to sharing our insights with a broader audience—it&apos;s only been about a year since we started
                                offering our predictions to subscribers. But don&apos;t let that fool you. Our experience runs deep,
                                and we&apos;ve spent years perfecting our strategies to ensure our subscribers see the profits they deserve.
                            </p>
                            <Link href="/plan" data-aos="fade-right" data-aos-duration="1000">
                                <Button title="Join Our Community" width="fit">
                                    <MdArrowForward className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className={`w-full md:w-1/2`}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <div className="w-full h-96 relative transform group-hover:scale-105 transition-transform duration-700">
                                    <Image
                                        src="/mission.jpg"
                                        alt="Our Team"
                                        fill
                                        sizes='100vh'
                                        className='object-cover'
                                    />
                                </div>
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end">
                                    <div className="p-8 transform translate-y-4 ">
                                        <p className="text-white text-lg font-medium">Our dedicated team of analysts working to bring you winning picks</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section with Hover Cards */}
            <section id="features" className=" bg-[#e6effc] relative overflow-hidden text-left">
                <WhyChooseUs />
            </section>

            {/* Philosophy Section with Image */}
            <section id="philosophy" className="py-16 bg-white overflow-hidden text-left">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className={`w-full md:w-1/2 `}>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Betting Isn&apos;t a Sprint, It&apos;s a Marathon</h2>
                            <div className="w-20 h-1 bg-gold mb-6"></div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We&apos;re in this for the long game, just like you. Sometimes, we might have a tough couple of
                                days—that&apos;s the reality of betting. But don&apos;t sweat it! Our focus is on consistent profits
                                over the course of a week or month.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We might occasionally send 5-6 picks in a single day, and while a couple may not go our way,
                                by the end of the week or month, we&apos;ll have you in the green. Betting is all about patience
                                and smart decision-making, and we&apos;re here to guide you through it.
                            </p>
                            <Link href="/history" data-aos="zoom-in" data-aos-duration="1000">
                                <Button title="View Our Track Record" width="fit">
                                    <MdArrowForward className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className={`w-full md:w-1/2 `}>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <div className="bg-gradient-to-br from-navy to-navy-light p-1 rounded-2xl">
                                    <div className="rounded-xl p-8">
                                        <div className="flex items-center justify-center mb-6">
                                            <FaBookOpen className="w-12 h-12 text-gold" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 text-center">More Than Just Predictions</h3>
                                        <p className="text-gray-100 mb-6">
                                            At Milestone Picks, we don&apos;t just give you picks and call it a day. We&apos;re all about teaching
                                            you smart betting strategies. From managing your bankroll to making value-driven bets,
                                            we provide you with the insights to ensure your hard-earned money is being placed wisely.
                                        </p>
                                        <p className="text-gray-100 mb-8">
                                            It&apos;s not just about what to bet, but how to bet—and that&apos;s where we truly set ourselves apart.
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-navy-lighter p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                <h4 className="text-navy font-bold flex items-center gap-2">
                                                    <FiTarget className="w-5 h-5 text-gold" />
                                                    Strategic Bankroll
                                                </h4>
                                                <p className="text-sm text-gray-600">Learn proper money management</p>
                                            </div>
                                            <div className="bg-navy-lighter p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                <h4 className="text-navy font-bold flex items-center gap-2">
                                                    <MdOutlineTrendingUp className="w-5 h-5 text-gold" />
                                                    Value Betting
                                                </h4>
                                                <p className="text-sm text-gray-600">Find opportunities others miss</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & CTA Section with Animated Background - REDESIGNED */}
            <section id="trust" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-[#051025]">

                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className={`text-center mb-10 `}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why You Can <span className="text-gold">Trust Us</span></h2>
                                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>

                            </div>
                            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                                We know there are a lot of &quot;experts&quot; out there who claim to have the magic formula for betting success.
                                But what makes us different is our transparency. We don&apos;t just show you our wins—we&apos;re honest about the losses, too.
                                It&apos;s all part of the game, and by sticking to a disciplined strategy, we make sure our subscribers come out on top in the long run.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className={`bg-white/5 border border-gold rounded-xl p-8  backdrop-blur-sm shadow-xl relative overflow-hidden`}>
                            <div className="absolute -right-10 -top-10 text-gold/10 text-[200px] font-serif">&quot;</div>
                            <div className="relative z-10">
                                <p className="text-lg md:text-xl text-white italic mb-6">
                                    &quot;With Milestone Picks, I&apos;ve transformed my betting from guesswork to a strategic investment.
                                    Their transparent approach and educational resources have been game-changers for me.&quot;
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold font-bold mr-4">JD</div>
                                    <div>
                                        <p className="font-bold text-white">James Donovan</p>
                                        <p className="text-gray-400 text-sm">Member since 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let&apos;s Make Betting Smarter Section - REDESIGNED */}
            <section id="smarter" className="py-20 bg-white relative overflow-hidden">


                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className={`text-center mb-16`}>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Let&apos;s Make Betting <span className="text-gold">Smarter</span></h2>
                            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                            <p className="text-lg text-navy-light mb-8 max-w-3xl mx-auto">
                                Whether you&apos;re new to sports betting or a seasoned pro, Milestone Picks is here to help you
                                level up your game. We believe in making betting smarter, more strategic, and ultimately more profitable
                                for our subscribers. So, if you&apos;re ready to make informed bets and start seeing real results,
                                join our community today.
                            </p>
                        </div>


                        {/* CTA Section */}
                        <div className={`rounded-2xl overflow-hidden relative`} >
                            <div className="bg-gradient-to-br from-navy via-navy to-navy-dark p-1">
                                <div className="bg-gradient-to-br from-navy-light/20 to-navy-dark/20 backdrop-blur-sm rounded-xl p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
                                            <p className="text-gray-300 mb-0 md:mb-4 max-w-xl">
                                                Take the first step towards more profitable betting. Sign up today and get access to our expert picks,
                                                educational resources, and a supportive community.
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="relative overflow-hidden group">
                                                {/* <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-70 blur-xl group-hover:opacity-100 transition-opacity"></div> */}
                                                <div className="relative">
                                                    <Link href="/plan">
                                                        <Button title="Join Milestone Picks" secondary>
                                                            <MdArrowForward className="ml-1 h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link href="/contact" className="inline-block border-2 border-gold/65 text-white hover:border-gold hover:text-gold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg transform">
                                                <div className="flex items-center gap-2" data-aos="zoom-in" data-aos-duration="1000">
                                                    <span>Contact Our Team</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="m12 5 7 7-7 7"></path>
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutInfo