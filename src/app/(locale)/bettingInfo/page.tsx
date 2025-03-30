import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import SubHeader from '@/components/header/subHeader/SubHeader'
import BettingInfoCom from '@/components/pages/bettingInfo/BettingInfoCom'
import React from 'react'

const BettingInfo = () => {
    return (
        <div>
            <Navbar />
            <SubHeader
                title='Betting Information'
                subTitle='Get detailed insights and guidelines on how to make informed bets with our expert-backed strategies and tips.'
            />
            <BettingInfoCom />
            <Footer />
        </div>
    )
}

export default BettingInfo