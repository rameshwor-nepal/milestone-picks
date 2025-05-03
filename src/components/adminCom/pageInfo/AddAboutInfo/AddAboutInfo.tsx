"use client"

import React from 'react'
import MissionList from './missionList/MissionList'
import FeatureList from './featureList/FeatureList'
import StatisticsList from './statisticsList/StatisticsList'

const AddAboutInfo = () => {
    return (
        <div className='flex flex-col gap-4'>
            <MissionList />
            <FeatureList />
            <StatisticsList />
        </div>
    )
}

export default AddAboutInfo