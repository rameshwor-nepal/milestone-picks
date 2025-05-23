'use client'
import React from 'react'
import Image from 'next/image'
import { FaAward, FaShieldAlt } from 'react-icons/fa'
import { RiLineChartLine, RiMoneyDollarCircleLine } from 'react-icons/ri'
import { Card, CardContent } from '@/ui/card/Card'
import { MdArrowForward } from 'react-icons/md'
import Link from 'next/link'
import Button from '@/ui/button/Button'
import { useFetchBettingTipsInfoQuery } from '@/redux/features/other/bettingInfo/bettingTipsInfo/bettingTipsApi'
import Skeleton from '@/ui/skeleton/Skeleton'
import { useFetchBettingConceptInfoQuery } from '@/redux/features/other/bettingInfo/bettingConceptInfo/bettingConceptInfoApi'
import { ContentType } from '@/utils/ConstantValue'

const BettingInfoCom = () => {
    const { data: bettingTips, isLoading, isFetching } = useFetchBettingTipsInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    const { data: bettingConcept, isLoading: isBettingConceptLoading, isFetching: isBettingConceptFetching } = useFetchBettingConceptInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })

    return (
        <div className=' text-left'>
            {/* intro */}
            <section className="py-20 bg-white">
                <div className=" mx-auto px-4 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-3 text-navy">Betting Information That Actually Works</h2>
                                <div className="w-20 h-1 bg-gold mb-6"></div>
                                <p className="text-navy mb-6 text-lg">
                                    Whether you&apos;re new to sports betting or looking to refine your strategy,
                                    our expert guidance is designed to help you make smarter decisions
                                    and increase your chances of long-term success.
                                </p>
                                <p className="text-navy mb-6">
                                    Our approach combines data analytics, expert insights, and years of
                                    experience to provide you with practical betting advice that works
                                    in the real world, not just in theory.
                                </p>

                                <div className="flex flex-wrap gap-4 text-navy">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3">
                                            <FaAward size={20} />
                                        </div>
                                        <span className="font-semibold">Expert Analysis</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3">
                                            <RiMoneyDollarCircleLine size={20} />
                                        </div>
                                        <span className="font-semibold">Value Betting</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3">
                                            <RiLineChartLine size={20} />
                                        </div>
                                        <span className="font-semibold">Data-Driven</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-[28rem]">
                                <Image
                                    src="/photo1.jpg"
                                    alt="Sports Betting Strategy"
                                    fill
                                    sizes='100vh'
                                    className="rounded-lg shadow-xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Betting Tips Section - Show Skeleton Only When Loading/Fetching */}
            <div className="space-y-8 transition-all duration-1000 py-16 px-4 md:px-10 lg:px-20">
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : bettingTips && bettingTips.results.length > 0 ? (
                    bettingTips.results.map((card, index) => (
                        <div key={index} className="group">
                            <div
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform`}
                            >
                                <div className="md:w-1/2">
                                    <div className="relative h-64 md:h-full w-full overflow-hidden">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            sizes="100vh"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center"
                                    data-aos={`${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}
                                >
                                    <h3 className="text-2xl text-navy font-bold mb-3 group-hover:text-gold transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-navy">{card.content}</p>
                                    {index === 4 && (
                                        <ul className="list-disc list-inside mt-4 space-y-2 text-navy">
                                            <li className="flex items-start">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-2"></span>
                                                <span>Legit handicappers, like us, always share their pick history—win or lose.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-2"></span>
                                                <span>
                                                    We don&apos;t promise "get rich quick" schemes. Sports betting is about strategy and patience, not
                                                    overnight success.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-2"></span>
                                                <span>
                                                    Watch out for anyone flaunting their lifestyle on social media but not sharing the details of
                                                    their picks. If it looks too good to be true, it probably is.
                                                </span>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-navy text-center">No betting tips available.</p>
                )}
            </div>

            <section className="py-20 bg-navy relative overflow-hidden my-4 md:my-10 lg:my-14">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Predictions?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Let our experts do the hard work for you. Join our membership today and get access to premium picks across all major sports.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* <Link href="/our-plans" className="px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-md transition-all transform hover:scale-105 inline-flex items-center justify-center">
                                View Membership Plans
                                <MdArrowForward size={18} className="ml-2" />
                            </Link> */}
                            <Link href={"/plan"} data-aos="fade-right">
                                <Button title="View Membership Plans" secondary width='fit'>
                                    <MdArrowForward className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>

                            <Link href={"/history"} data-aos="fade-left">
                                <Button title="View Our Track Record" width='fit'>
                                    <MdArrowForward className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>


            {/* Betting Basics with Interactive Cards */}
            <section className="py-20 bg-navy-lighter relative w-full overflow-hidden my-4 md:my-10 lg:my-20">
                <div className=" px-4 relative z-10 md:px-10 lg:px-20">
                    <div className="">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-3 text-navy">Betting Basics</h2>
                            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                            <p className="text-navy text-lg max-w-3xl mx-auto">
                                Understanding these fundamental concepts is essential for any successful betting strategy.
                                Master these basics before moving on to more advanced techniques.
                            </p>
                        </div>

                        {isBettingConceptLoading || isBettingConceptFetching ?
                            <Skeleton /> :

                            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 `}>
                                {
                                    bettingConcept && bettingConcept.results.length > 0 ?
                                        bettingConcept.results.map((el, index) => (
                                            <Card className="group hover:shadow-lg transition-all overflow-hidden border border-gold" key={index}>
                                                <div className="bg-navy p-6 relative">
                                                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{ContentType.find((content) => content.value === el.concept_type)?.label}</h3>
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                                </div>
                                                <CardContent className="p-6 text-base text-navy">
                                                    <p className=" mb-3">
                                                        {el.description}
                                                    </p>
                                                    <p className='bg-slate-50 p-2 md:p-4'>
                                                        <span className='block font-semibold'>Example:</span>
                                                        {el.example}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        ))

                                        : <p>No betting concept found</p>
                                }
                            </div>
                        }

                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-gold rounded-full translate-x-1/3 translate-y-1/3"></div>
            </section>

            {/* Trust Message Card */}
            <div className='pt-4 px-4 md:px-10 lg:px-20 mb-4 md:mb-10 lg:mb-20 '>
                <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-1 shadow-xl">
                    <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row gap-8 shadow-xl">
                        <div className="md:w-3/4">
                            <h3 className="text-2xl font-bold mb-3 text-navy">Trust Us to Help You Make Smart, Informed Bets</h3>
                            <p className="text-navy mb-6">
                                By following these tips, you&apos;ll not only make smarter bets, but you&apos;ll also protect yourself from
                                the pitfalls of emotional betting and shady scam artists. With our transparent pick history and
                                expert tips, you can trust that we&apos;re here to guide you through the ups and downs of the betting world.
                            </p>
                            <p
                                className="text-xl md:text-2xl lg:text-3xl font-bold text-gold"
                                data-aos="zoom-in" data-aos-duration="1000"
                            >
                                Stay Smart, Stay Consistent, and Bet with Confidence!
                            </p>
                        </div>
                        <div className="md:w-1/4 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gold/20 rounded-full blur-lg"></div>
                                <div className="relative w-28 h-28 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                                    <FaShieldAlt size={48} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BettingInfoCom