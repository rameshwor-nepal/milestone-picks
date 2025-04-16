import React from 'react'
import { MdOutlineStar } from 'react-icons/md'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <section className="text-gray-200 text-left relative min-h-[90vh] w-full">
            <div className="absolute h-full w-full z-10 bg-[linear-gradient(to_bottom,rgba(245,240,225,0.2),rgba(245,240,225,0.4))]"></div>

            {/* Background Image */}
            <div className="absolute z-0 h-full w-full">
                <Image
                    src="/choose-us-bg3.jpg"
                    alt="hero image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative z-20 w-full min-h-screen h-auto mx-auto px-4 py-12 sm:px-6 lg:px-24 lg:py-16">
                <div className="md:flex md:items-center md:justify-center">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className=" section-title ">
                            Our Testimonials<span className='text-green-3'></span>
                        </h2>
                        <div className="w-20 h-1 bg-gold mb-6 mx-auto"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
                            sapiente commod, aliquid sunt tempore.
                        </p>
                    </div>
                </div>

                <div className=" grid grid-cols-1 gap-4 md:grid-cols-3">
                    <blockquote className="flex h-full flex-col justify-between bg-navy-light p-6 shadow-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-gold">
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />

                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-gray-2 sm:text-3xl">Staying Alive</p>

                                <p className="mt-4 leading-relaxed">
                                    No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
                                    know what? If we come across somebody with no arms or legs, do we bother resuscitating
                                    them? I mean, what quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium sm:mt-6 flex items-center gap-2">
                            <img src="man1.png" alt="testimonials" className="size-14 rounded-full object-cover" />
                            <div className="block">
                                <p>
                                    Michael Scott
                                </p>
                                <p className="bg-gold text-white p-1 rounded-lg mt-1 text-center">
                                    Football
                                </p>
                            </div>

                        </footer>
                    </blockquote>

                    <blockquote className="flex h-full flex-col justify-between bg-navy-light p-6 shadow-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-gold">
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />

                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-gray-2 sm:text-3xl">Staying Alive</p>

                                <p className="mt-4 leading-relaxed">
                                    No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
                                    know what? If we come across somebody with no arms or legs, do we bother resuscitating
                                    them? I mean, what quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium sm:mt-6 flex items-center gap-2">
                            <img src="man1.png" alt="testimonials" className="size-14 rounded-full object-cover" />
                            <div className="block">
                                <p>
                                    Michael Scott
                                </p>
                                <p className="bg-gold text-white p-1 rounded-lg mt-1 text-center">
                                    Football
                                </p>
                            </div>

                        </footer>
                    </blockquote>

                    <blockquote className="flex h-full flex-col justify-between bg-navy-light p-6 shadow-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-gold">
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />

                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-gray-2 sm:text-3xl">Staying Alive</p>

                                <p className="mt-4 leading-relaxed">
                                    No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
                                    know what? If we come across somebody with no arms or legs, do we bother resuscitating
                                    them? I mean, what quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium sm:mt-6 flex items-center gap-2">
                            <img src="man1.png" alt="testimonials" className="size-14 rounded-full object-cover" />
                            <div className="block">
                                <p>
                                    Michael Scott
                                </p>
                                <p className="bg-gold text-white p-1 rounded-lg mt-1 text-center">
                                    Football
                                </p>
                            </div>

                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default Testimonial