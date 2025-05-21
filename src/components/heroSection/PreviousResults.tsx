"use client"
import { useFetchPredictionsQuery } from "@/redux/features/other/predictionAndMatch/predictionApi";
import Button from "@/ui/button/Button";
import Skeleton from "@/ui/skeleton/Skeleton";
import { formatDate } from "@/utils/dateFormat/dateFormat";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";


const PreviousResults = () => {

    const { data: predictionData, isLoading, isFetching } = useFetchPredictionsQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    return (
        <section className="py-12 md:py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Recent Results
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Check out our recent performance - transparency is our priority
                    </p>
                </div>

                <div className="bg-white w-full rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                        {
                            isLoading || isFetching ?
                                <Skeleton /> :
                                <table className="w-full text-left">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-3 py-2 md:px-6 md:py-4 text-navy font-semibold">Sport</th>
                                            <th className="px-3 py-2 md:px-6 md:py-4 text-navy font-semibold">Date</th>
                                            <th className="px-3 py-2 md:px-6 md:py-4 text-navy font-semibold">Team 1</th>
                                            <th className="px-3 py-2 md:px-6 md:py-4 text-navy font-semibold">Team 2</th>
                                            <th className="px-3 py-2 md:px-6 md:py-4 text-navy font-semibold">Status</th>
                                            <th className="px-3 py-2 md:px-6 md:py-4 text-navy font-semibold">Final Score</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {
                                            predictionData && predictionData.results.length > 0 ?
                                                predictionData.results.map((result, index) => (
                                                    <tr key={index} className="hover:bg-gray-50">
                                                        <td className="px-3 py-2 md:px-6 md:py-4">
                                                            <span className="bg-navy/5 text-navy px-2 py-1 rounded-lg">
                                                                {result.match_detail?.sport?.name || '-'}
                                                            </span>
                                                        </td>
                                                        <td className="px-3 py-2 md:px-6 md:py-4 text-gray-600">{formatDate(result.placed_at)}</td>
                                                        <td className="px-3 py-2 md:px-6 md:py-4 font-medium text-navy">{result.match_detail?.team_1 || '-'}</td>
                                                        <td className="px-3 py-2 md:px-6 md:py-4 font-medium text-navy">{result.match_detail?.team_2 || '-'}</td>
                                                        <td className="px-3 py-2 md:px-6 md:py-4">
                                                            <span className={`px-2 py-1 rounded-lg ${result.result === "CORRECT" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                                                {result.result === "CORRECT" ? "Win" : result.result === "INCORRECT" ? "Lose" : "Pending"}
                                                            </span>
                                                        </td>
                                                        <td className="px-3 py-2 md:px-6 md:py-4 text-gray-600">{result.our_prediction}</td>
                                                    </tr>
                                                ))
                                                :
                                                <span> "No prediction found"</span>
                                        }
                                    </tbody>
                                </table>
                        }

                    </div>
                </div>

                <div className="text-center">
                    <Button title=" View Full History" width="fit" data-aos="zoom-in" data-aos-duration="1000">
                        <Link href="/history">
                            <MdArrowForward className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PreviousResults;
