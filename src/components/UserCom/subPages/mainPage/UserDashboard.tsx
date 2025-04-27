"use client"
import { useFetchPredictionsQuery } from '@/redux/features/other/predictionAndMatch/predictionApi';
import PredictionCard from '@/ui/card/PredictionCard';
import { DateInput, FormSelectInput } from '@/ui/formInput/FormInput';
import React, { useState } from 'react'
import { FaHistory, FaTrophy } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const sportData = [
    { label: "Football", value: "football" },
    { label: "Baseball", value: "baseball" },
    { label: "BasketBall", value: "basketball" },
    { label: "Hockey", value: "hockey" },
]

const UserDashboard = () => {
    const [selectedSport, setSelectedSport] = useState<DropDownI | null>(null);
    const [selectedDate, setSelectedDate] = useState(() =>
        new Date().toISOString().split("T")[0]
    );
    const { data: predictionData } = useFetchPredictionsQuery({
        search: '',
        page: 1,
        page_size: 10
    })

    const onFilterClear = () => {
        setSelectedSport(null)
        setSelectedDate(new Date().toISOString().split("T")[0])
    }

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
        <section>
            {/* prediction section */}
            <section className='my-10'>
                <div className="flex items-center gap-3  rounded-md px-3 py-2 bg-navy">
                    <FaTrophy className="text-gold h-6 w-6" />
                    <h2 className="text-2xl font-bold text-white">Today&apos;s Expert Picks</h2>
                </div>

                {/* filter section */}
                <div className='flex gap-5 py-5 max-md:flex-wrap max-w-2xl'>
                    <DateInput
                        label=""
                        name="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <FormSelectInput
                        label=""
                        placeholder="Select Sport"
                        value={selectedSport}
                        options={sportData}
                        onChange={(option) => { setSelectedSport(option as DropDownI) }}
                    />
                    <button
                        className='bg-[#cfe3ff] px-3 py-2 border-2 flex items-center rounded-md border-navy-light/30 text-navy w-full hover:bg-navy-lighter/10'
                        onClick={() => onFilterClear()}
                    >
                        <span className='mr-2'> <MdClose size={20} /></span>   Clear Filter
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

            {/* Recent Picks Section */}
            <section className='py-5 '>
                <div className="flex items-center gap-3 mb-5 rounded-md px-3 py-2 bg-navy">
                    <FaHistory className="text-gold h-6 w-6" />
                    <h2 className="text-2xl font-bold text-white">Recent Picks</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        </section>


    )
}

export default UserDashboard