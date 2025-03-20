import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import SubHeader from '@/components/header/subHeader/SubHeader'
import React from 'react'

const HistoryInfo = () => {
    return (
        <div>
            <Navbar />
            <SubHeader
                title='Prediction History'
                subTitle='Track your past prediction, analyze performance, and refine your strategies for better future outcomes.'
            />
            <Footer />
        </div>
    )
}

export default HistoryInfo