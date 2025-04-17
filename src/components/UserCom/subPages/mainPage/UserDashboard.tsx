"use client"
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
    const onFilterClear = () => {
        setSelectedSport(null)
        setSelectedDate(new Date().toISOString().split("T")[0])
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
                    <PredictionCard
                        sport="NBA"
                        match="LA Lakers @ Boston Celtics"
                        date={new Date()}
                        time="7:30 PM ET"
                        prediction="Boston Celtics -5.5"
                        confidenceLevel={4}
                        status="win"
                    />

                    <PredictionCard
                        sport="NBA"
                        match="Denver Nuggets @ Miami Heat"
                        date={new Date()}
                        time="7:30 PM ET"
                        prediction="Denver Nuggets +2.5"
                        confidenceLevel={4}
                        status="pending"
                    />

                    <PredictionCard
                        sport="NFL"
                        match="Chiefs vs. Ravens"
                        date={new Date()}
                        time="8:15 PM ET"
                        prediction="Chiefs -3"
                        confidenceLevel={5}
                        status="loss"
                    />

                    <PredictionCard
                        sport="MLB"
                        match="Yankees vs. Red Sox"
                        date={new Date()}
                        time="1:05 PM ET"
                        prediction="Yankees ML"
                        confidenceLevel={3}
                        status="pending"
                    />
                </div>
            </section>

            {/* Recent Picks Section */}
            <section className='py-5 '>
                <div className="flex items-center gap-3 mb-5 rounded-md px-3 py-2 bg-navy">
                    <FaHistory className="text-gold h-6 w-6" />
                    <h2 className="text-2xl font-bold text-white">Recent Picks</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        </section>


    )
}

export default UserDashboard