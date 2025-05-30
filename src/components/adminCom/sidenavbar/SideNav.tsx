'use client';
import { createContext, useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight, MdLogout } from 'react-icons/md';
import { LinksProps } from './NavLinks';
import { SidenavLink } from './SidenavLink';
import { SidenavLinkMain } from './SidenavLinkMain';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/features/store';

export const NavContext = createContext({
    sideBarExpanded: false,
    sideBarHovered: false,
});

type Props = {
    onExpand: (val: boolean) => void;
    navLinks: (currentPath: string) => LinksProps[];
};

const Sidenav = (props: Props) => {
    const currentPath = usePathname();
    const dispatch = useAppDispatch()
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
        <section
            className={`fixed top-0 left-0 h-screen bg-navy border-r border-green-1 transition-all duration-300 shadow-md
                ${expandedSidebar ? 'w-[14rem]' : 'w-[5rem]'} block`}
        >
            <div className='flex flex-col justify-between h-full items-center'>

                {/* Logo & Expand Button */}
                <div className="relative w-full flex flex-col items-center gap-4 pt-6 pb-4 md:pb-8">
                    <div className={`transition-all  relative`}>
                        <Link href="/" className="">
                            <span className={`${expandedSidebar ? "text-xl lg:text-2xl" : "text-[11px]"} font-display font-bold  text-white`}>
                                Milestone
                                <span className="text-gold">Picks</span>
                            </span>
                        </Link>
                    </div>
                    <button
                        onClick={handleSideBarExpand}
                        className={`absolute top-12 right-[-1.2rem] h-8 w-8 flex items-center justify-center rounded-full bg-gold border-2 border-gold shadow-lg`}
                    >
                        <MdKeyboardDoubleArrowRight
                            className={`text-white text-xl transition-transform ${expandedSidebar ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 w-full overflow-auto">
                    <ul className="px-2 list-none">
                        {props.navLinks(currentPath).map((el, index) => (
                            el.extended ? (
                                <SidenavLink key={index} text={el.text} icon={el.icon} active={el.active} sublinks={el.sublinks} expandedSidebar={expandedSidebar} />
                            ) : (
                                <SidenavLinkMain key={index} text={el.text} icon={el.icon} to={el.to} active={el.active} expandedSidebar={expandedSidebar} />
                            )
                        ))}
                    </ul>
                </div>

                {/* logout section */}
                <button
                    className='flex items-center gap-2 pb-5 text-lg cursor-pointer hover:text-red-500'
                    onClick={() => dispatch(logout())}
                >
                    <span><MdLogout size={25} /></span> {expandedSidebar ? "Logout" : ''}
                </button>
            </div>
        </section>
    );
};

export default Sidenav;
