import { useState } from "react";

type PaginationProps = {
    loading: boolean;
    onPageLimitChange: (val: string) => void;
    onPageChange: (val: string) => void;
    totalRecords: number;
};

const Pagination = (props: PaginationProps) => {
    const { onPageChange, onPageLimitChange, totalRecords } = props;

    const [currentPage, setCurrentPage] = useState<string>("1");

    const pageButtons: JSX.Element[] = [];

    const [pageLimit, setPageLimit] = useState<string>("10");

    const totalPages: number = Math.ceil(totalRecords / parseInt(pageLimit));

    for (let index = 1; index <= totalPages; index++) {
        pageButtons.push(
            <a
                key={index}
                className={`min-w-[4rem] px-3 py-2 text-lg font-medium text-white text-center rounded-lg cursor-pointer transition-all ease-in-out duration-200 ${currentPage === String(index)
                    ? "bg-blue-2"
                    : "bg-gray-500"
                    } hover:brightness-90`}
                onClick={() => handlePageChange(String(index))}
            >
                {index}
            </a>
        );
    }

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
        <div className="mt-12 flex flex-wrap gap-12">
            <div className="flex items-center gap-4">
                <span className="text-xl font-light text-gray-800">Show per page:</span>
                <select
                    className="py-2 px-4 min-w-[7.5rem] bg-white text-lg font-light text-gray-800 border border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-200"
                    onChange={(e) => handlePageLimitChange(e.target.value)}
                    value={pageLimit}
                    disabled={totalRecords === 0 || props.loading}
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div className="flex-1 min-w-[8rem]" />
            <div className="flex items-center justify-start gap-4 flex-wrap">
                {totalRecords ? (
                    <span className="text-xl font-light text-gray-800">
                        {(parseInt(currentPage) - 1) * parseInt(pageLimit) + 1} -{" "}
                        {parseInt(currentPage) * parseInt(pageLimit) > totalRecords
                            ? totalRecords
                            : parseInt(currentPage) * parseInt(pageLimit)}{" "}
                        of {totalRecords} items
                    </span>
                ) : (
                    <span className="text-xl font-light text-gray-800">No records found</span>
                )}
                <div className="flex items-center gap-4 flex-wrap">{pageButtons}</div>
            </div>
        </div>
    );
};

export default Pagination;
