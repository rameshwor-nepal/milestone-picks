import React from "react";
interface PropsI {
    children: React.ReactNode;
    size?: string;
}

const Grid = ({ children }: PropsI) => {
    return <div className="space-y-2 mb-2">{children}</div>;
};

Grid.Row = (({ children }: PropsI) => {
    return <div className="grid grid-cols-12 gap-4 space-y-2">{children}</div>;
}) as React.FC<PropsI>;
Grid.Row.displayName = "Grid.Row";

const getColSpan = (size?: string) => {
    switch (size) {
        case "xs":
            return "col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2";
        case "sm":
            return "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4";
        case "md":
            return "col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-6";
        case "lg":
            return "col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12";
        default:
            return "col-span-12";
    }
};


const GridCol = ({ size, children }: PropsI) => {
    return <div className={getColSpan(size)}>{children}</div>;
};
GridCol.displayName = "Grid.Col";

Grid.Col = GridCol;

export default Grid;
