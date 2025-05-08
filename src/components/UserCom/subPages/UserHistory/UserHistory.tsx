'use client'
import { useFetchPredictionsQuery } from '@/redux/features/other/predictionAndMatch/predictionApi'
import PredictionCard from '@/ui/card/PredictionCard'
import Pagination from '@/ui/pagination/Pagination'
import Skeleton from '@/ui/skeleton/Skeleton'
import React, { useState } from 'react'
import { FaHistory } from 'react-icons/fa'

const UserHistory = () => {
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data: predictionData, isLoading, isFetching } = useFetchPredictionsQuery(searchQuery)

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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        {
                            predictionData && predictionData.results?.length > 0 ?
                                predictionData.results.map((el) => (
                                    <PredictionCard
                                        key={el.id}
                                        sport={el.match_detail?.sport?.name || "-"}
                                        match={`${el.match_detail?.team_1 || "-"} Vs ${el.match_detail?.team_2 || "-"}`}
                                        date={new Date(el.placed_at).toLocaleDateString()}
                                        time={new Date(el.placed_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        prediction={el?.our_prediction || "-"}
                                        confidenceLevel={el?.confidence_level || 4}
                                        status={getFormatStatus(el.result as string)}
                                        detail={el.predicted_outcome}
                                    />
                                ))
                                :
                                null
                        }
                    </div>
                }
                <Pagination
                    loading={isLoading || isFetching}
                    totalRecords={predictionData ? predictionData.count : 0}
                    onPageChange={(val) =>
                        setSearchQuery({ ...searchQuery, page: val })
                    }
                    onPageLimitChange={(val) =>
                        setSearchQuery({ ...searchQuery, page_size: val, page: 1 })
                    }
                />
            </section>

        </div>
    )
}

export default UserHistory