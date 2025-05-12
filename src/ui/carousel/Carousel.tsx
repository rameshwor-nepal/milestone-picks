'use client'
import React, { ReactNode } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Carousel.css'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-gold text-white p-2 rounded-full cursor-pointer z-30 hover:bg-yellow-500"
            onClick={onClick}
        >
            <MdArrowForwardIos size={20} />
        </div>
    );
};

const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-gold text-white p-2 rounded-full cursor-pointer z-30 hover:bg-yellow-500"
            onClick={onClick}
        >
            <MdArrowBackIosNew size={20} />
        </div>
    );
};


const Carousel = ({ children }: { children: ReactNode }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at once
        slidesToScroll: 1, // Scroll 1 slide at a time
        centerMode: true,
        centerPadding: '60px',
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />, // optional, for next/prev arrows
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '40px',
                }
            }
        ],
    };
    return (
        <>
            <Slider {...settings}>
                {children}
            </Slider>
        </>
    )
}

export default Carousel