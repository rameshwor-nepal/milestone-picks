"use client"
import React from 'react'
import BasicBettingConcept from './basicConcept/BasicBettingConcept'
import BettingsTips from './bettingTips/BettingsTips'

const AddBettingInfo = () => {
    return (
        <div className='flex flex-col gap-4 md:gap-6'>
            <BasicBettingConcept />
            <BettingsTips />
        </div>
    )
}

export default AddBettingInfo