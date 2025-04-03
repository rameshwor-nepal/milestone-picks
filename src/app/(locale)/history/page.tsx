import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import SubHeader from '@/components/header/subHeader/SubHeader'
import HistoryCom from '@/components/pages/history/HistoryCom'
import React from 'react'

const HistoryInfo = () => {
    return (
        <>
            <Navbar />
            <SubHeader
                title='Prediction History'
                subTitle='Track your past prediction, analyze performance, and refine your strategies for better future outcomes.'
            />
            {/* <div className='px-5 md:px-8 lg:px-12'> */}
            <HistoryCom />
            {/* </div> */}

            <Footer />
        </>
    )
}

export default HistoryInfo