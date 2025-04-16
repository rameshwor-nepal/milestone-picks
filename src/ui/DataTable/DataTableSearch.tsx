'use client'
import React, { useState } from "react";
import { MdClose, MdOutlineSearch, MdPrint } from "react-icons/md";
import { BsFileExcelFill, BsFilePdfFill } from "react-icons/bs";

type PropsI = {
    onTableSearch: (val: string) => void;
    onClearSearch?: () => void;
    onPdf?: () => void;
    onExcel?: () => void;
    onPrint?: () => void;
    hasFilter?: boolean;
    onFilter?: (val: string) => void;
    onClearFilter?: () => void;
    children?: JSX.Element[] | JSX.Element;
};

const DataTableSearchContainer = ({
    onTableSearch,
    onPdf,
    onExcel,
    onPrint,
    onClearSearch,
    children
}: PropsI) => {
    // const filterDiv = useRef(null);
    // const filterWrapperDiv = useRef(null);
    // const [filterShown, setFilterShown] = useState(false);
    // const [filterDivHeight, setFilterDivHeight] = useState("0px");
    const [searchVal, setSearchVal] = useState<string | null>(null);

    // useEffect(() => {
    //     if (!filterWrapperDiv.current) return;
    //     const resizeWatcher = new ResizeObserver(() => {
    //         setFilterDivHeight(`${filterWrapperDiv.current?.clientHeight || 0}px`);
    //     });
    //     resizeWatcher.observe(filterWrapperDiv.current);
    //     return () => resizeWatcher.disconnect();
    // }, []);

    const handleClearSearch = () => {
        setSearchVal("");
        onClearSearch && onClearSearch();
    };

    return (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                    {/* {hasFilter && (
                        <button
                            onClick={() => setFilterShown(!filterShown)}
                            className={`p-2 rounded text-white transition-all ${filterShown ? "bg-gray-600" : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            <Icon size={24} icon={filterShown ? ic_close : ic_filter_alt_outline} />
                        </button>
                    )} */}
                    <div className="relative w-full max-w-md">
                        <button className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-700">
                            <MdOutlineSearch size={18} />
                        </button>
                        <input
                            type="text"
                            value={searchVal ? searchVal : ''}
                            placeholder="Search..."
                            className="w-full text-blue-1 pl-10 pr-10 py-2 border rounded focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setSearchVal(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && onTableSearch(searchVal ? searchVal : '')}
                        />
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                            onClick={handleClearSearch}
                        >
                            <MdClose size={18} />
                        </button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
                <div className="flex gap-2">
                    {onPdf && (
                        <button className="text-red-500" onClick={onPdf}>
                            <BsFilePdfFill size={22} />
                        </button>
                    )}
                    {onExcel && (
                        <button className="text-green-500" onClick={onExcel}>
                            <BsFileExcelFill size={22} />
                        </button>
                    )}
                    {onPrint && (
                        <button className="text-gray-500" onClick={onPrint}>
                            <MdPrint size={22} />
                        </button>
                    )}
                </div>
            </div>
            {/* {children && (
                <div
                    ref={filterDiv}
                    className={`transition-all overflow-hidden ${filterShown ? "mb-4" : "h-0"}`}
                    style={{ height: filterShown ? filterDivHeight : "0px" }}
                >
                    <div ref={filterWrapperDiv} className="flex flex-wrap gap-4 justify-between">
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {children}
                        </div>
                        <div className="flex justify-end gap-2">
                            <button onClick={onClearFilter} className="p-2 bg-gray-600 text-white rounded">
                                <Icon size={24} icon={ic_clear_all} />
                            </button>
                            <button onClick={() => onFilter(searchVal)} className="p-2 bg-blue-500 text-white rounded">
                                <Icon size={24} icon={ic_search} />
                            </button>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default DataTableSearchContainer;
