'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/ui/carousel/Carousel'
import { useFetchTestimonialsContentQuery } from '@/redux/features/other/testimonials/testimonialsApi'
import Skeleton from '@/ui/skeleton/Skeleton'

const Testimonial = () => {
    const { data, isLoading, isFetching } = useFetchTestimonialsContentQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? "text-gold" : "text-gray-300"}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <section className="text-gray-200 text-left relative shadow-[0px -8px 20px rgba(0, 0, 0, 0.3), 0px 8px 20px rgba(0, 0, 0, 0.3)]  rounded-md min-h-[90vh] w-full">
            <div className="absolute h-full w-full z-10 bg-[linear-gradient(to_top,rgba(245,240,225,0.3),rgba(245,240,225,0.5))]"></div>

            {/* Background Image */}
            <div className="absolute z-0 h-full w-full">
                <Image
                    src="/centerfocus.jpg"
                    alt="hero image"
                    fill
                    sizes='100vh'
                />
            </div>
            <div className="relative z-20 w-full min-h-screen h-auto mx-auto px-4 md:px-8 py-12  lg:py-16">
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
                {isLoading || isFetching ?
                    <Skeleton /> :
                    <Carousel>
                        {data && data.results.length > 0 ? (
                            data.results.map((el, index) => (
                                <div className='px-2' key={index}>
                                    <blockquote className="flex h-full flex-col justify-between bg-navy-light p-6 shadow-lg sm:p-8">
                                        <div>
                                            <div className="flex gap-0.5 text-gold text-xl">
                                                {renderStars(el.star_rating)}
                                            </div>

                                            <div className="mt-4">
                                                {/* <p className="text-2xl font-bold text-gray-2 sm:text-3xl">Staying Alive</p> */}

                                                <p className="mt-4 leading-relaxed">
                                                    {el.description}
                                                </p>
                                            </div>
                                        </div>

                                        <footer className="mt-4 text-sm font-medium sm:mt-6 flex items-center gap-2">
                                            <div className='size-14 rounded-full relative'>
                                                <Image
                                                    src={el.image ? el.image : "/man1.png"}
                                                    alt="testimonials"
                                                    fill
                                                    sizes='100vh'
                                                    className=' object-cover'
                                                />
                                            </div>

                                            <div className="block">
                                                <p>
                                                    {el.name}
                                                </p>
                                                <p className="bg-gold text-white p-1 rounded-lg mt-1 text-center">
                                                    {el.role}
                                                </p>
                                            </div>

                                        </footer>
                                    </blockquote>
                                </div>
                            ))

                        ) : (
                            <p>No Testimonial found</p>
                        )
                        }

                    </Carousel>}
            </div>
        </section>
    )
}

export default Testimonial