import { useState, useRef } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";

interface SidenavLinkProps {
    text: string;
    icon: React.ReactNode;
    sublinks: { to: string; text: string; active: boolean }[];
    active: boolean;
    expandedSidebar: boolean;
}

export const SidenavLink = ({ text, icon, sublinks, active, expandedSidebar }: SidenavLinkProps) => {
    const drawerRef = useRef<HTMLUListElement | null>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(active);

    return (
        <li className="mb-4">
            <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                className={`flex items-center gap-4 w-full rounded-md px-6 py-2 mb-1 transition-colors text-gray-200 hover:text-white hover:bg-blue-1 ${active ? "bg-blue-1" : "bg-transparent"
                    }`}
            >
                <Icon size={18} icon={icon} />
                {expandedSidebar && (
                    <span className="flex flex-1 justify-between items-center">
                        <span className="text-lg font-medium">{text}</span>
                        <Icon
                            size={14}
                            icon={chevronRight}
                            className={`transition-transform ${drawerOpen ? "rotate-90" : "rotate-0"}`}
                        />
                    </span>
                )}
            </button>
            <ul
                ref={drawerRef}
                className={`overflow-hidden transition-all bg-blue-1  rounded-md ${drawerOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                {sublinks.map((el, index) => (
                    <li key={index}>
                        <Link href={el.to} >
                            <p
                                className={`flex items-center gap-3 px-6 py-2 text-white my-2 hover:bg-blue-2 transition-colors rounded-md ${el.active ? " bg-blue-2" : null
                                    }`}
                            >
                                <span className="flex items-center justify-center w-3 h-3 rounded-full border border-gray-400">
                                    <span className={`w-2 h-2 rounded-full ${el.active ? "bg-blue-1" : "bg-gray-900"}`}></span>
                                </span>
                                <span className={`text-base font-medium `}>{el.text}</span>
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};
