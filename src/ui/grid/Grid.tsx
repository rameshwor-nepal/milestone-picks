import React from "react";
interface PropsI {
    children: React.ReactNode;
    size?: string;
}

const Grid = ({ children }: PropsI) => {
    return <div className="space-y-2">{children}</div>;
};

Grid.Row = ({ children }: PropsI) => {
    return <div className="grid grid-cols-12 gap-4 space-y-2">{children}</div>;
};

const getColSpan = (size?: string, isMobile?: boolean) => {
    if (isMobile) {
        return size === "xs" ? "col-span-6" : "col-span-12";
    }
    return size === "xs"
        ? "col-span-3"
        : size === "sm"
            ? "col-span-6"
            : size === "md"
                ? "col-span-9"
                : "col-span-12";
};

const GridCol = ({ size, children }: PropsI) => {
    return (
        <div className={`${getColSpan(size, false)} md:${getColSpan(size, true)}`}>
            {children}
        </div>
    );
};

Grid.Col = GridCol;

export default Grid;
