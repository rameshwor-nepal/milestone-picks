'use client'
import PredictionCard from '@/ui/card/PredictionCard'
import React from 'react'
import { FaHistory } from 'react-icons/fa'

const UserHistory = () => {
    return (
        <div>
            <section className='py-5 '>
                <div className="flex items-center gap-3 mb-5 rounded-md px-3 py-2 bg-navy">
                    <FaHistory className="text-gold h-6 w-6" />
                    <h2 className="text-2xl font-bold text-white">History Picks</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <PredictionCard
                        sport="NHL"
                        match="Maple Leafs vs. Bruins"
                        date={new Date(Date.now() - 86400000)}
                        time="7:00 PM ET"
                        prediction="Bruins ML"
                        confidenceLevel={3}
                        status="win"
                    />

                    <PredictionCard
                        sport="Soccer"
                        match="Man City vs. Liverpool"
                        date={new Date(Date.now() - 172800000)}
                        time="3:00 PM ET"
                        prediction="Over 2.5"
                        confidenceLevel={4}
                        status="win"
                    />
                </div>
            </section>
        </div>
    )
}

export default UserHistory