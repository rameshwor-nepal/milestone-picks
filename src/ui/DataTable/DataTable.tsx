'use client'
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Icon } from "react-icons-kit";
import { ic_expand_less } from "react-icons-kit/md/ic_expand_less";
import { ic_expand_more } from "react-icons-kit/md/ic_expand_more";

export const DataTableContainer: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
    return (
        <div className="p-8 border border-gray-400 rounded-md bg-white">
            {title && <p className="mb-8 text-gray-900 text-xl font-medium">{title}</p>}
            {children}
        </div>
    );
};

const LoadingState = () => {
    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-10">
            <ThreeDots height="80" width="80" radius="9" color="#444D79" ariaLabel="three-dots-loading" />
        </div>
    );
};

const DataTable: React.FC<{ loading: boolean; children?: React.ReactNode }> & {
    TH: React.FC<{ children?: React.ReactNode }>;
    TB: React.FC<{ children?: React.ReactNode }>;
    TR: React.FC<{ children?: React.ReactNode }>;
    THD: React.FC<{ onClick?: () => void; isActionCol?: boolean; maxWidth?: number; children?: React.ReactNode; colSpan?: number; rowSpan?: number; align?: "right" | "center" | "left" }>;
    ActionCol: React.FC<{ onClick?: () => void; children?: React.ReactNode; colSpan?: number; rowSpan?: number; align?: "right" | "center" | "left" }>;
    TCD: React.FC<{ children?: React.ReactNode; align?: "right" | "center" | "left" }>;
    EmptyBody: React.FC<{ span: number }>;
} = ({ loading, children }) => {
    return (
        <div className="relative overflow-auto">
            {loading && <LoadingState />}
            <table className="w-full border-collapse">{children}</table>
        </div>
    );
};

DataTable.TH = ({ children }) => <thead className="bg-gray-200 border-b border-gray-300 h-12">{children}</thead>;
DataTable.TB = ({ children }) => <tbody>{children}</tbody>;
DataTable.TR = ({ children }) => <tr className="h-14 hover:bg-gray-100">{children}</tr>;
DataTable.THD = ({ onClick, maxWidth, isActionCol, children, ...props }) => (
    <th
        onClick={onClick}
        className={`p-4 border border-gray-300 text-left ${onClick ? "cursor-pointer" : ""}`}
        style={{ width: maxWidth ? `${maxWidth}px` : "auto", textAlign: props.align || "left" }}
        colSpan={props.colSpan || 1}
        rowSpan={props.rowSpan || 1}
    >
        {!isActionCol && <TableHDSorting />} {children}
    </th>
);

DataTable.ActionCol = ({ onClick, children, ...props }) => (
    <th
        onClick={onClick}
        className="p-4 border border-gray-300 text-left"
        colSpan={props.colSpan || 1}
        rowSpan={props.rowSpan || 1}
        style={{ textAlign: props.align || "left" }}
    >
        {children}
    </th>
);

DataTable.TCD = ({ children, ...props }) => (
    <td className="p-4 border border-gray-300" style={{ textAlign: props.align || "left" }}>
        {children}
    </td>
);

DataTable.EmptyBody = ({ span }) => (
    <tbody>
        <tr>
            <td className="text-center p-40 text-gray-600 bg-gray-100" colSpan={span}>
                No Records Found
            </td>
        </tr>
    </tbody>
);

const TableHDSorting = () => {
    return (
        <div className="absolute top-0 right-0 w-5 h-full flex flex-col items-center justify-center">
            <Icon icon={ic_expand_less} className="text-gray-500" />
            <Icon icon={ic_expand_more} className="text-gray-500" />
        </div>
    );
};

export default DataTable;
