import Button from '@/ui/button/Button'
import React from 'react'
import { FaGlobe } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const ContactForm = () => {
    return (
        <>
            <div className=" px-6 md:px-12">
                <div
                    className="block px-6 py-12 md:py-16 md:px-12">
                    <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="mx-auto mb-12 flex flex-col items-center gap-3 lg:mb-0">
                            <i className='text-green-3 text-5xl'>
                                <FaLocationDot />
                            </i>
                            <h6 className="  font-medium">Kathmandu, Nepal</h6>
                        </div>
                        <div className="mx-auto mb-6  flex flex-col items-center gap-3 md:mb-0">
                            <i className='text-green-3 text-5xl'>
                                <IoCall />
                            </i>
                            <h6 className=" font-medium">+977 9836325234 | 01 4454832</h6>
                        </div>
                        <div className="mx-auto flex flex-col items-center gap-3 ">
                            <i className='text-green-3  text-5xl'>
                                <MdEmail />
                            </i>
                            <h6 className="font-medium">business@gmail.com</h6>
                        </div>
                        <div className="mx-auto  flex flex-col items-center gap-3 ">
                            <i className='text-green-3  text-5xl'>
                                <FaGlobe />
                            </i>
                            <h6 className=" font-medium">www.business.com</h6>
                        </div>
                    </div>
                    <div className="mx-auto max-w-[700px]">
                        <form className="w-full mx-auto">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-3 peer" placeholder=" " required />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-3 peer-focus:dark:text-green-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        First name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-3 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Last name
                                    </label>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-3 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-green-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email address
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea name="floating_email" rows={5} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-3 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-green-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Message
                                </label>
                            </div>
                            <Button title='Save' />
                        </form>

                    </div>
                </div>
                <div>
                    {/* <iframe
                        width="600"
                        height="450"
                        // style="border:0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLm2KcP8LEPeVG0LmpwkHXVmGe6o8v96c&q=Space+Needle,Seattle+WA">
                    </iframe> */}
                </div>
            </div>
        </>
    )
}

export default ContactForm