'use client';

import Link from 'next/link';
import { Icon } from 'react-icons-kit';

interface SidenavLinkMainProps {
    text: string;
    icon: any;
    to: string;
    active: boolean;
    expandedSidebar: boolean;
}

export const SidenavLinkMain = ({ text, icon, to, active, expandedSidebar }: SidenavLinkMainProps) => {

    return (
        <li className="mb-3 last:mb-0">
            <Link
                href={to}
                className={`flex items-center gap-4 rounded-md px-6 py-2 transition-all duration-200 text-white 
          ${active ? 'bg-blue-1 text-white' : 'hover:bg-blue-1 hover:text-white'}`}
            >
                <Icon size={18} icon={icon} />
                {expandedSidebar && <span className="text-lg font-medium">{text}</span>}
            </Link>
        </li>
    );
};
