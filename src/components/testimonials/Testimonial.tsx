import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

const Testimonial = () => {
    return (
        <section className="">
            <div className="mx-auto px-4 py-12 sm:px-6 lg:px-24 lg:py-16">
                <div className="md:flex md:items-center md:justify-center">
                    <div className="">
                        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-2 sm:text-4xl">
                            Our <span className='text-green-3'> Testimonials</span>
                        </h2>

                        <p className="mt-6 max-w-lg leading-relaxed text-gray-1 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
                            sapiente commod, aliquid sunt tempore.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <blockquote className="flex h-full flex-col justify-between bg-blue-1 p-6 shadow-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-green-3">
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />

                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-gray-2 sm:text-3xl">Stayin' Alive</p>

                                <p className="mt-4 leading-relaxed text-gray-50">
                                    No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
                                    know what? If we come across somebody with no arms or legs, do we bother resuscitating
                                    them? I mean, what quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-50 sm:mt-6 flex items-center gap-2">
                            <img src="man1.png" alt="testimonials" className="size-14 rounded-full object-cover" />
                            <div className="block">
                                <p>
                                    Michael Scott
                                </p>
                                <p className="bg-green-2 text-white p-1 rounded-lg mt-1 text-center">
                                    Football
                                </p>
                            </div>

                        </footer>
                    </blockquote>

                    <blockquote className="flex h-full flex-col justify-between bg-blue-1 p-6 shadow-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-green-3">
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-gray-2 sm:text-3xl">Stayin' Alive</p>

                                <p className="mt-4 leading-relaxed text-gray-50">
                                    No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
                                    know what? If we come across somebody with no arms or legs, do we bother resuscitating
                                    them? I mean, what quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-50 sm:mt-6 flex items-center gap-2">
                            <img src="man1.png" alt="testimonials" className="size-14 rounded-full object-cover" />
                            <div className="block">
                                <p>
                                    Michael Scott
                                </p>
                                <p className="bg-green-2 text-white p-1 rounded-lg mt-1 text-center">
                                    Football
                                </p>
                            </div>

                        </footer>
                    </blockquote>

                    <blockquote className="flex h-full flex-col justify-between bg-blue-1 p-6 shadow-lg sm:p-8">
                        <div>
                            <div className="flex gap-0.5 text-green-3">
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                                <MdOutlineStar size={20} />
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-gray-2 sm:text-3xl">Stayin' Alive</p>

                                <p className="mt-4 leading-relaxed text-gray-50">
                                    No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
                                    know what? If we come across somebody with no arms or legs, do we bother resuscitating
                                    them? I mean, what quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-50 sm:mt-6 flex items-center gap-2">
                            <img src="man1.png" alt="testimonials" className="size-14 rounded-full object-cover" />
                            <div className="block">
                                <p>
                                    Michael Scott
                                </p>
                                <p className="bg-green-2 text-white p-1 rounded-lg mt-1 text-center">
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