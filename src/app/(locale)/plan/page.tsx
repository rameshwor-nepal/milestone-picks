import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import SubHeader from '@/components/header/subHeader/SubHeader'
import OurPlanCom from '@/components/pages/plan/OurPlan'
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

            <Footer />
        </div>
    )
}

export default OurPlan