'use client'
import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const DataTableContainer: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
    return (
        <div className="p-6 rounded-md bg-blue-2">
            {title && <p className="mb-8 text-gray-900 text-xl font-medium">{title}</p>}
            {children}
        </div>
    );
};

const LoadingState = () => {
    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-green bg-opacity-10">
            <ThreeDots height="80" width="80" radius="9" color="#7ADEA2" ariaLabel="three-dots-loading" />
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
            <table className="w-full border-collapse text-md">{children}</table>
        </div>
    );
};

DataTable.TH = ({ children }) => <thead className=" border-b border-gray-500 h-5 bg-blue-1/70">{children}</thead>;
DataTable.TB = ({ children }) => <tbody>{children}</tbody>;
DataTable.TR = ({ children }) => <tr className="h-5 hover:bg-blue-1/30">{children}</tr>;
DataTable.THD = ({ onClick, maxWidth, isActionCol, children, ...props }) => (
    <th
        onClick={onClick}
        className={`p-2 border border-gray-400 text-left ${onClick ? "cursor-pointer" : ""}`}
        style={{ width: maxWidth ? `${maxWidth}px` : "auto", textAlign: props.align || "left" }}
        colSpan={props.colSpan || 1}
        rowSpan={props.rowSpan || 1}
    >
        {children}
    </th>
);

DataTable.ActionCol = ({ onClick, children, ...props }) => (
    <th
        onClick={onClick}
        className="p-2 border border-gray-400 text-left"
        colSpan={props.colSpan || 1}
        rowSpan={props.rowSpan || 1}
        style={{ textAlign: props.align || "left" }}
    >
        {children}
    </th>
);

DataTable.TCD = ({ children, ...props }) => (
    <td className="p-2 max-w-[20rem] border border-gray-400" style={{ textAlign: props.align || "left" }}>
        {children}
    </td>
);

DataTable.EmptyBody = ({ span }) => (
    <tbody>
        <tr>
            <td className="text-center p-24 text-gray-600 bg-green-3" colSpan={span}>
                No Records Found
            </td>
        </tr>
    </tbody>
);


export default DataTable;
