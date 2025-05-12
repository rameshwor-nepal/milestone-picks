'use client'
import React from 'react'
import Image from 'next/image'
import { useFetchFaqContentQuery } from '@/redux/features/other/faq/faqContentApi'
import Skeleton from '@/ui/skeleton/Skeleton'

const FAQs = () => {
    const { data, isLoading, isFetching } = useFetchFaqContentQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    return (
        <div className='flex  gap-16 justify-between max-sm:flex-wrap'>
            <div className='w-[52rem] h-[30rem] mt-12 relative bg-navy rounded-t-[50%]'>
                <Image
                    src={'/using-laptop.jpeg'}
                    alt='hero image'
                    fill
                    sizes='100vh'
                    className='object-cover rounded-t-[50%]'
                />
            </div>
            <div className="w-full space-y-4 py-10 text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-navy"> Frequently Asked Questions ?</h2>
                <div className="w-20 h-1 bg-gold mb-6"></div>
                {
                    isLoading || isFetching ?
                        <Skeleton /> :
                        <div className='pt-6 flex flex-col gap-3'>
                            {data && data.results.length > 0 ? (
                                data.results.map((el, index) => (
                                    <details
                                        className="group border-s-8 border-gold bg-navy px-6 py-3"
                                        data-aos="fade-left" data-duration="1000"
                                        key={index}
                                    >
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                                            <h2 className="text-lg font-medium text-white">
                                                {el.title}
                                            </h2>

                                            <span className="shrink-0 rounded-full bg-gold p-1.5 text-white sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <p className="mt-2 leading-relaxed text-white  line-clamp-[5]">
                                            {el.title_description}
                                        </p>
                                    </details>
                                ))
                            ) : (
                                <p>
                                    No FAQs found
                                </p>
                            )}
                        </div>
                }



            </div>
        </div>
    )
}

export default FAQs