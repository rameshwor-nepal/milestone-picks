'use client'
import { useFetchPredictionsQuery } from '@/redux/features/other/predictionAndMatch/predictionApi'
import PredictionCard from '@/ui/card/PredictionCard'
import React from 'react'
import { FaHistory } from 'react-icons/fa'

const UserHistory = () => {
    const { data: predictionData } = useFetchPredictionsQuery({
        search: '',
        page: 1,
        page_size: 10
    })

    const getFormatStatus = (status: string) => {
        if (status === "CORRECT") {
            return "win"
        }
        else if (status === 'INCORRECT') {
            return "loss"
        }
        else
            return "pending"
    }
    return (
        <div>
            <section className='py-5 '>
                <div className="flex items-center gap-3 mb-5 rounded-md px-3 py-2 bg-navy">
                    <FaHistory className="text-gold h-6 w-6" />
                    <h2 className="text-2xl font-bold text-white">History Picks</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        predictionData && predictionData.results?.length > 0 ?
                            predictionData.results.map((el) => (
                                <PredictionCard
                                    key={el.id}
                                    sport="NBA"
                                    match={el.match.toString()}
                                    date={new Date(el.placed_at).toLocaleDateString()}
                                    time={new Date(el.placed_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    prediction="Boston Celtics -5.5"
                                    confidenceLevel={4}
                                    status={getFormatStatus(el.result as string)}
                                    detail={el.predicted_outcome}
                                />
                            ))
                            :
                            null
                    }
                </div>
            </section>
        </div>
    )
}

export default UserHistory