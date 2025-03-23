import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import SubHeader from '@/components/header/subHeader/SubHeader'
import OurPlanCom from '@/components/pages/plan/OurPlan'
import FAQs from '@/components/testimonials/FAQs'
import React from 'react'

const OurPlan = () => {
    return (
        <div>
            <Navbar />
            <SubHeader
                title='Our Plans'
                subTitle='Choose the plan that fits your needs, and gain access to exclusive insights and strategies to elevate your betting game.'
            />
            <OurPlanCom />
            <div className="relative h-fit w-full xl:px-32 md:px-24 px-12 text-center md:py-7 lg:py-14 sm:py-14 py-6 overflow-auto">
                <FAQs />
            </div>
            <Footer />
        </div>
    )
}

export default OurPlan