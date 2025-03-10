import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareTwitter, FaSquareInstagram } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import { MdPhone, MdMyLocation } from 'react-icons/md'

const Footer = () => {
    return (
        <footer>
            <div className='bg-[#080a0d] py-10 px-24 flex flex-col gap-4 justify-center'>
                <div className='flex gap-48 items-center mt-4'>
                    <div className=' text-white font-bold text-5xl'>
                        LOGO
                    </div>
                    <div className='text-center '>
                        <p className='text-white text-4xl font-medium mb-2'>
                            We Welcome Your Passion and Expertise
                        </p>
                        <p className="text-gray-50">
                            Join our empowering communities today and grow with us
                        </p>

                        <button
                            className="w-fit text-white mt-3 transition-all duration-500 ease-in-out bg-green-2 hover:bg-green-2/80 font-medium rounded-lg text-sm px-2.5 py-2 text-center">
                            Join us Now
                        </button>
                    </div>
                </div>

                <div className='my-10 flex text-white'>

                    <div className="pr-20">

                        <div className='flex items-center gap-2  mb-4' >

                            <span >
                                <MdPhone size={30} />
                            </span>
                            <p>
                                01-4465573 <br />
                                98635342411
                            </p>

                        </div>

                        <div className='flex items-center gap-2  mb-4'>

                            <span>
                                <FaEnvelope size={25} />
                            </span>
                            <p>
                                milestonepicks@gmail.com <br />
                                customerservice.milestonepicks@gmail.com
                            </p>

                        </div>

                        <div className='flex items-center gap-2 mb-4'>

                            <span>
                                <MdMyLocation size={25} />
                            </span>
                            <p>
                                Lalitpur-10, Nepal <br />
                                New Road, Kathmandu, Nepal
                            </p>

                        </div>


                    </div>

                    <div className=' flex space-x-40'>
                        <div>
                            <p className='mb-4 text-[18px] font-medium text-green-3'> About Us </p>

                            <p className='pb-1 text-[14px] flex item items-center cursor-pointer '>

                                <IoIosArrowForward size={15} />
                                <span>
                                    About Our Website
                                </span>
                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Blogs
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Careers
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Digital Payments
                                </span>

                            </p>
                        </div>

                        <div>
                            <p className='mb-4 text-[18px] font-medium text-green-3 flex item items-center cursor-pointer'>

                                Customer Service
                            </p>

                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Help Center
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Report Abuse
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Member Guidelines
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Customer Guidelines
                                </span>
                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    FAQs
                                </span>
                            </p>

                        </div>

                        <div>

                            <p className='mb-4 text-[18px] font-medium text-green-3 flex item items-center cursor-pointer'>

                                Legal
                            </p>

                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Privacy Policy
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Terms and Condition
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Return Policy
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Venue Location
                                </span>

                            </p>
                            <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

                                <IoIosArrowForward size={15} />
                                <span>
                                    Report about venue
                                </span>

                            </p>

                        </div>

                    </div>

                </div>


                <div className='flex text-white'>

                    {/* <div>

                        <div className=''>
                            <p className='  text-[20px] font-medium text-blue-300'> Download App</p>

                            <div className='flex items-center space-x-4 mb-4 mt-4' >

                                <div className='bg-green-2 text-white h-9 w-38 rounded-md'>
                                    <p className='p-1 pl-2'>
                                        Get on App Store
                                    </p>

                                </div>

                                <div className='bg-green-2 text-white h-9 w-36 rounded-md'>
                                    <p className='p-1 pl-2'>
                                        Get on Playstore
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div> */}



                    {/* This is for payment method */}
                    <div >
                        <div className=''>
                            <p className='tracking-wider text-[20px] font-medium text-green-3'>
                                Payment Methods
                            </p>

                            <div className='ml-16 mt-4 flex space-x-4'>
                                {/* <div >
                                    <img src={handcash} alt="hand cash" className='h-8 w-16' />
                                </div>

                                <div >
                                    <img src={visacard} alt="hand cash" className='h-8 w-16' />
                                </div>

                                <div >
                                    <img src={debitcard} alt="hand cash" className='h-8 w-16' />
                                </div>

                                <div >
                                    <img src={mastercard} alt="hand cash" className='h-8 w-16' />
                                </div> */}

                            </div>
                        </div>

                    </div>



                    {/* This is for social media */}

                    <div >
                        <div className=''>
                            <p className='ml-20 tracking-wider text-[20px] font-medium text-green-3'>
                                Follow Us On Social Media
                            </p>

                            <div className='ml-20 mt-4 flex space-x-4  cursor-pointer'>
                                <div >
                                    <FaFacebookSquare size={30} />

                                </div>

                                <div >
                                    <FaSquareTwitter size={30} />
                                </div>

                                <div >
                                    <FaYoutube size={30} />
                                </div>

                                <div >
                                    <FaSquareInstagram size={30} />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* 
            <div className='h-12 bg-[#01140d]  '>

                <p className='text-white pt-4 text-[12px] pl-[36rem] '>
                    Copyright@2022 Ourdevelopment | Powered by khelkud
                </p>

            </div> */}

        </footer>
    )
}

export default Footer