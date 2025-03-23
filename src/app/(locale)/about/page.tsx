import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import SubHeader from '@/components/header/subHeader/SubHeader'
import AboutInfo from '@/components/pages/about/AboutInfo'
import Testimonial from '@/components/testimonials/Testimonial'
import React from 'react'

const About = () => {
    return (
        <div>
            <Navbar />
            <SubHeader
                title='About'
                subTitle='We analyze the latest stats and trends with precision, so you can make informed betting decisions and increase your chances of winning.'
            />
            <AboutInfo />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default About