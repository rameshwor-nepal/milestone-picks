import React from 'react'
import Image from 'next/image'

interface PropI {
    title: string;
    subTitle: string;
}

const SubHeader = ({ subTitle, title }: PropI) => {

    return (
        <div className='h-96 w-full bg-blue-200 relative'>
            {/* <div className='absolute h-full w-full z-10 bg-[linear-gradient(to_bottom,rgba(19,24,32,0.3),rgba(19,24,32,0.8))]'></div> */}
            <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(16,20,26,0.9),rgba(16,20,26,0.9))]'></div>

            <Image
                src={`/subheader.jpg`}
                alt='hero image'
                fill
                className='object-cover bg-center'
            />
            <div className='absolute z-20 text-white text-center flex items-center justify-center h-full w-full'>
                <div className='max-w-[45rem]'>
                    <h1 className='text-5xl mb-3 font-semibold'>
                        {title}
                    </h1>
                    <h6 className='text-xl font-normal text-cyan-1'>{subTitle}</h6>
                </div>

            </div>
        </div>
    )
}

export default SubHeader