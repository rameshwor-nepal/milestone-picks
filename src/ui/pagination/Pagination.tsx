"use client"
import React from 'react'
import { useState } from "react";

interface PropsI {
    loading: boolean;
    onPageLimitChange: (val: string) => void;
    onPageChange: (val: string) => void;
    totalRecords: number;
}

const Pagination = ({ loading, onPageChange, onPageLimitChange, totalRecords }: PropsI) => {
    const [currentPage, setCurrentPage] = useState<string>("1");
    const [pageLimit, setPageLimit] = useState<string>("10");
    const totalPages: number = Math.ceil(totalRecords / parseInt(pageLimit));

    const handlePageLimitChange = (val: string) => {
        setCurrentPage("1");
        setPageLimit(val);
        onPageLimitChange(val);
    };

    const handlePageChange = (val: string) => {
        setCurrentPage(val);
        if (currentPage !== val) {
            onPageChange(val);
        }
    };

    return (
        <div className="mt-6 flex flex-wrap gap-12">
            <div className="flex items-center gap-4">
                <span className="text-sm font-normal text-green-3">Show per page:</span>
                <div className="relative">
                    <select
                        className="p-2 min-w-[7.5rem] bg-white text-sm font-normal text-green-3 border rounded-md focus:border-blue-3 appearance-none"
                        onChange={(e) => handlePageLimitChange(e.target.value)}
                        value={pageLimit}
                        disabled={totalRecords === 0}
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
            <div className="flex-1 min-w-[8rem]"></div>
            <div className="flex items-center justify-start gap-4 flex-wrap">
                {totalRecords ? (
                    <span className="text-sm font-normal text-green-3">
                        {(parseInt(currentPage) - 1) * parseInt(pageLimit) + 1} - {" "}
                        {parseInt(currentPage) * parseInt(pageLimit) > totalRecords
                            ? totalRecords
                            : parseInt(currentPage) * parseInt(pageLimit)}{" "}
                        of {totalRecords} items
                    </span>
                ) : (
                    <span className="text-sm font-normal text-green-3">No records found</span>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`min-w-[4rem] p-2 text-sm font-medium text-center rounded-md transition duration-200 cursor-pointer ${currentPage === String(index + 1)
                                ? "bg-blue-500 text-white"
                                : "bg-blue-1 text-green-3 hover:brightness-90"
                                }`}
                            onClick={() => handlePageChange(String(index + 1))}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pagination;
