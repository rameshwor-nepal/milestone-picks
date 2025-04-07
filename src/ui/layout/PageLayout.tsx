'use client'
import { RotatingLines } from "react-loader-spinner";

interface PropsI {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    isLoading?: boolean;
}

export const PageLayout = ({ title, subtitle, children, isLoading }: PropsI) => {

    return (
        <div className=" p-2 md:p-4 lg:p-6 bg-blue-2 shadow-md shadow-gray-500 rounded-sm">
            <div className="mb-4 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-green-3">{title}</h1>
                    {subtitle && <p className="text-md text-white">{subtitle}</p>}
                </div>
                {/* <div>
                    <Button title='Add hero section' secondary={true} />
                </div> */}
            </div>
            <div>
                {children}
                {isLoading && (
                    <div className="flex justify-center items-center w-full h-32">
                        <RotatingLines
                            strokeColor="#122E99"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export const PageLayoutHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex justify-end gap-5 mb-4">{children}</div>;
};

