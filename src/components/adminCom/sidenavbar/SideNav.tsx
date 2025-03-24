'use client';
import { createContext, useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { navLinks } from './NavLinks';
import { SidenavLink } from './SidenavLink';
import { SidenavLinkMain } from './SidenavLinkMain';
import { usePathname } from 'next/navigation';

export const NavContext = createContext({
    sideBarExpanded: false,
    sideBarHovered: false,
});

type Props = {
    onExpand: (val: boolean) => void;
};

const Sidenav = (props: Props) => {
    const currentPath = usePathname();
    const [expandedSidebar, toggleSidebar] = useState(true);

    const handleSideBarExpand = () => {
        toggleSidebar(!expandedSidebar);
        props.onExpand(!expandedSidebar);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                toggleSidebar(false);
            }
        };
        // Set initial state based on window width
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 h-screen bg-blue-2 border-r border-green-1 transition-all duration-300 shadow-md
                ${expandedSidebar ? 'w-[14rem]' : 'w-[6rem]'} block z-50`}
        >
            {/* Logo & Expand Button */}
            <div className="relative flex flex-col items-center gap-4 pt-6 pb-4">
                <img src="/man1.png" className={`${expandedSidebar ? 'w-24' : 'w-12'} transition-all`} />

                {/* Toggle Button */}
                <button
                    onClick={handleSideBarExpand}
                    className="absolute top-7 right-[-1.5rem] h-8 w-8 flex items-center justify-center rounded-full bg-blue-1 border-2 border-blue-1 shadow-lg"
                >
                    <MdKeyboardDoubleArrowRight
                        className={`text-white text-xl transition-transform ${expandedSidebar ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>

            {/* Navigation Links */}
            <div className="h-[calc(100%-170px)] overflow-hidden hover:overflow-y-auto ">
                <ul className="px-2 list-none">
                    {navLinks(currentPath).map((el, index) => (
                        el.extended ? (
                            <SidenavLink key={index} text={el.text} icon={el.icon} active={el.active} sublinks={el.sublinks} expandedSidebar={expandedSidebar} />
                        ) : (
                            <SidenavLinkMain key={index} text={el.text} icon={el.icon} to={el.to} active={el.active} expandedSidebar={expandedSidebar} />
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidenav;
