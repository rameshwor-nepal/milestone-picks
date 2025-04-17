'use client'
import Button from '@/ui/button/Button'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdArrowDownward, MdArrowForward, MdArrowUpward, MdFilter } from 'react-icons/md'

type SportKey = 'all' | 'nba' | 'nfl' | 'mlb' | 'nhl' | 'ncaab';

const tabs = [
    { id: "all", label: "All Sports" },
    { id: "nba", label: "NBA" },
    { id: "nfl", label: "NFL" },
    { id: "mlb", label: "MLB" },
    { id: "nhl", label: "NHL" },
    { id: "ncaab", label: "College BBall" },
];

const months = [
    {
        id: "march2023",
        label: "March 2023",
        records: {
            all: { wins: 67, losses: 33, winRate: 67 },
            nba: { wins: 28, losses: 12, winRate: 70 },
            nfl: { wins: 0, losses: 0, winRate: 0 },
            mlb: { wins: 14, losses: 11, winRate: 56 },
            nhl: { wins: 15, losses: 5, winRate: 75 },
            ncaab: { wins: 10, losses: 5, winRate: 67 },
        }
    },
    {
        id: "february2023",
        label: "February 2023",
        records: {
            all: { wins: 62, losses: 38, winRate: 62 },
            nba: { wins: 25, losses: 15, winRate: 63 },
            nfl: { wins: 3, losses: 2, winRate: 60 },
            mlb: { wins: 0, losses: 0, winRate: 0 },
            nhl: { wins: 14, losses: 7, winRate: 67 },
            ncaab: { wins: 20, losses: 14, winRate: 59 },
        }
    },
    {
        id: "january2023",
        label: "January 2023",
        records: {
            all: { wins: 59, losses: 41, winRate: 59 },
            nba: { wins: 24, losses: 16, winRate: 60 },
            nfl: { wins: 12, losses: 8, winRate: 60 },
            mlb: { wins: 0, losses: 0, winRate: 0 },
            nhl: { wins: 13, losses: 8, winRate: 62 },
            ncaab: { wins: 10, losses: 9, winRate: 53 },
        }
    },
];

const HistoryCom = () => {
    const [activeTab, setActiveTab] = useState<SportKey>("all");
    const [expandedMonth, setExpandedMonth] = useState("march2023");
    const toggleMonth = (monthId: string) => {
        if (expandedMonth === monthId) {
            setExpandedMonth("");
        } else {
            setExpandedMonth(monthId);
        }
    };
    return (
        <section className='bg-white '>
            {/* monthly Picks */}
            <div className="max-w-4xl mx-auto py-4 md:py-10 lg:py-14 px-4 md:px-10">
                <h2 className="section-title text-center py-4">Monthly Performance</h2>
                {months.map((month) => (
                    <div key={month.id} className="mb-4">
                        <button
                            onClick={() => toggleMonth(month.id)}
                            className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="flex items-center">
                                <h3 className="font-display font-bold text-navy">{month.label}</h3>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="hidden md:block">
                                    <span className="text-green-600 font-bold">{month.records[activeTab].wins} Wins</span>
                                    <span className="text-gray-500 mx-1">-</span>
                                    <span className="text-red-600 font-bold">{month.records[activeTab].losses} Losses</span>
                                </div>
                                <div className="bg-navy text-white py-1 px-3 rounded-full font-medium">
                                    {month.records[activeTab].winRate}% Win Rate
                                </div>
                                {expandedMonth === month.id ? <MdArrowUpward size={20} /> : <MdArrowDownward size={20} />}
                            </div>
                        </button>

                        {expandedMonth === month.id && (
                            <div className="mt-4 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Sport
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Wins
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Losses
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Win Rate
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {(Object.entries(month.records) as [SportKey, typeof month.records[SportKey]][])
                                                .filter(([key]) => key !== "all" && month.records[key].wins + month.records[key].losses > 0)
                                                .map(([key, record]) => (
                                                    <tr key={key}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {key === "nba" ? "NBA" :
                                                                    key === "nfl" ? "NFL" :
                                                                        key === "mlb" ? "MLB" :
                                                                            key === "nhl" ? "NHL" :
                                                                                key === "ncaab" ? "College BBall" : key}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-green-600 font-medium">{record.wins}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-red-600 font-medium">{record.losses}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm font-medium">
                                                                {record.winRate}%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>


            {/* recent picks */}
            <div className='bg-navy py-6 md:px-10 lg:px-20 mb-4 md:mb-10 lg:mb-14'>
                <div className='px-4 md:px-6 lg:px-8 py-8 flex flex-col items-center w-full'>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-full">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 md:mb-0">Recent Picks</h2>
                        <div className="flex items-center space-x-2 bg-white p-1 rounded-lg shadow-sm">
                            <MdFilter size={16} className="text-gray-500 ml-2" />
                            <div className="flex">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as SportKey)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === tab.id
                                            ? 'bg-navy text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <DataTableContainer>
                            <DataTable loading={false}>
                                <DataTable.TH>
                                    <DataTable.TR>
                                        <DataTable.THD align="center">
                                            {("S.No")}
                                        </DataTable.THD>

                                        <DataTable.THD align="center">
                                            {"Sport"}
                                        </DataTable.THD>

                                        <DataTable.THD align="center">
                                            {"Team 1"}
                                        </DataTable.THD>

                                        <DataTable.THD align="center">
                                            {"Team 2"}
                                        </DataTable.THD>

                                        <DataTable.THD align="center">
                                            {"Match Date"}
                                        </DataTable.THD>

                                        <DataTable.ActionCol align="center">
                                            {("Result")}
                                        </DataTable.ActionCol>
                                    </DataTable.TR>
                                </DataTable.TH>
                                {/* {records.results.length ? ( */}
                                <DataTable.TB>
                                    {/* {records.results.map((el, index) => ( */}
                                    <DataTable.TR >
                                        <DataTable.TCD align="center">{1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{"Sport"}</DataTable.TCD>
                                        <DataTable.TCD align="center">{"Team 1"}</DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {"Team 2"}
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">{"Match Date"}</DataTable.TCD>
                                        {/* <DataTable.TCD align="center">{"Location"}</DataTable.TCD> */}
                                        <DataTable.TCD align='center'>
                                            {"Win"}
                                        </DataTable.TCD>
                                    </DataTable.TR>
                                    {/* // ))} */}
                                </DataTable.TB>
                                {/*  ) : ( 
                                <DataTable.EmptyBody span={11} />
                            {/*  )} */}
                            </DataTable>
                        </DataTableContainer>
                    </div>

                    <div className="mt-8 text-center">
                        <Button title=' Load More Picks' secondary width='fit'>

                        </Button>
                    </div>
                </div>

            </div>

            <section className="py-20 bg-navy relative overflow-hidden mb-4 md:mb-10 lg:mb-14 mx-4 md:mx-10 lg:mx-20 rounded-md">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-[53rem] mx-auto text-center flex flex-col items-center gap-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Winning?</h2>
                        <p className="text-xl text-gray-300">
                            Join thousands of satisfied members who are beating the bookmakers with our expert picks.
                            Choose your plan and elevate your sports betting success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* <Link href="/our-plans" className="px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-md transition-all transform hover:scale-105 inline-flex items-center justify-center">
                                View Membership Plans
                                <MdArrowForward size={18} className="ml-2" />
                            </Link> */}
                            <Link href={"/ourPlan"}>
                                <Button title="Get Start Now" secondary width='fit'>
                                    <MdArrowForward className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section >

    )
}

export default HistoryCom