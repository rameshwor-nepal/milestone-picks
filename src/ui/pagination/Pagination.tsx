"use client"
import React from 'react'
import { useState } from "react";

interface PropsI {
    loading: boolean;
    onPageLimitChange: (val: number) => void;
    onPageChange: (val: number) => void;
    totalRecords: number;
}

const Pagination = ({ onPageChange, onPageLimitChange, totalRecords }: PropsI) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(10);
    const totalPages: number = Math.ceil(totalRecords / pageLimit);

    const handlePageLimitChange = (val: number) => {
        setCurrentPage(1);
        setPageLimit(val);
        onPageLimitChange(val);
    };

    const handlePageChange = (val: number) => {
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
                        className="p-2 min-w-12 bg-green-3 text-sm font-normal text-blue-1  rounded-md outline-none  appearance-none"
                        onChange={(e) => handlePageLimitChange(parseInt(e.target.value))}
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
                        {((currentPage) - 1) * (pageLimit) + 1} - {" "}
                        {(currentPage) * (pageLimit) > totalRecords
                            ? totalRecords
                            : (currentPage) * (pageLimit)}{" "}
                        of {totalRecords} items
                    </span>
                ) : (
                    <span className="text-sm font-normal text-green-3">No records found</span>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`min-w-[2rem] p-2 text-sm font-medium text-center rounded-md transition duration-200 cursor-pointer ${currentPage === (index + 1)
                                ? "bg-green-3 text-blue-1"
                                : "bg-green-1 text-green-3 hover:brightness-90"
                                }`}
                            onClick={() => handlePageChange((index + 1))}
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
