import { useState, useRef } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

interface SublinkProps {
    to: string;
    text: string;
    active: boolean;
    extended?: boolean;
    sublinks?: SublinkProps[];
}

interface SidenavLinkProps {
    text: string;
    icon: IconType;
    sublinks: SublinkProps[];
    active: boolean;
    expandedSidebar: boolean;
}

export const SidenavLink = ({ text, icon: Icon, sublinks, active, expandedSidebar }: SidenavLinkProps) => {
    const drawerRef = useRef<HTMLUListElement | null>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(active);

    return (
        <div className="mb-4">
            <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                className={`flex items-center ${expandedSidebar ? '' : 'justify-center'} gap-4 w-full rounded-md px-6 py-2 mb-1 transition-colors text-gray-200 hover:text-white hover:bg-navy-light ${active ? "bg-navy-light" : "bg-transparent"}`}
            >
                <Icon size={18} />
                {expandedSidebar && (
                    <span className="flex flex-1 justify-between items-center">
                        <span className="text-lg font-medium">{text}</span>
                        <FaChevronRight size={14} className={`transition-transform ${drawerOpen ? "rotate-90" : "rotate-0"}`} />
                    </span>
                )}
            </button>

            {/* NESTED MENU */}
            {sublinks.length > 0 && (
                <ul
                    ref={drawerRef}
                    className={`overflow-hidden transition-all bg-navy-dark rounded-md ml-4 ${drawerOpen ? "max-h-screen" : "max-h-0"}`}
                >
                    {sublinks.map((el, index) => (
                        <div key={index}>
                            {el.sublinks && el.sublinks.length > 0 ? (
                                // 🔥 Recursive call wrapped inside another <ul>
                                <SidenavLink
                                    text={el.text}
                                    icon={() => <span className="w-2 h-2 bg-gold rounded-full inline-block" />}
                                    sublinks={el.sublinks}
                                    active={el.active}
                                    expandedSidebar={expandedSidebar}
                                />
                            ) : (
                                <Link href={el.to}>
                                    <p
                                        className={`flex items-center gap-3 px-6 py-2 text-white my-2 hover:bg-navy-light transition-colors rounded-md ${el.active ? "bg-navy-light" : ""}`}
                                    >
                                        {/* <span className="flex items-center justify-center w-3 h-3 rounded-full">
                                            {expandedSidebar && (
                                                <span className={`w-2 h-2 rounded-full ${el.active ? "bg-navy-light" : "bg-gold"}`} />
                                            )}
                                        </span> */}
                                        <span className="text-base font-medium">{el.text}</span>
                                    </p>
                                </Link>
                            )}
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};
