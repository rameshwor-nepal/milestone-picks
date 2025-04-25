'use client';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface SidenavLinkMainProps {
    text: string;
    icon: IconType;
    to: string;
    active: boolean;
    expandedSidebar: boolean;
}

export const SidenavLinkMain = ({ text, icon: Icon, to, active, expandedSidebar }: SidenavLinkMainProps) => {

    return (
        <li className="mb-3 last:mb-0">
            <Link
                href={to}
                className={`flex items-center ${expandedSidebar ? '' : 'justify-center'} gap-4 rounded-md px-6 py-2 transition-all duration-200 text-white 
          ${active ? 'bg-navy-light text-white' : 'hover:bg-navy-light hover:text-white'}`}
            >
                <Icon size={18} />
                {expandedSidebar && <span className="text-lg font-medium">{text}</span>}
            </Link>
        </li>
    );
};
