'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MdLogout, MdOutlinePersonOutline } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '@/redux/features/store'
import { logout } from '@/redux/features/auth/authSlice'

export const AuthButton = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const divRef = useRef<HTMLDivElement | null>(null)

    const [showDropdown, setShowDropdown] = useState(false)
    const { username, email } = useAppSelector((state) => state.auth)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(e.target as Node)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const getInitials = (name: string) => {
        if (!name || name.trim() === '') return ''
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
    }

    return (
        <div className="relative cursor-pointer w-full whitespace-nowrap" ref={divRef} onClick={() => setShowDropdown((prev) => !prev)}>
            <div className=" rounded-full bg-navy p-[6px] flex items-center justify-center text-gold text-xl font-semibold">
                {getInitials(username ? username : '')}
            </div>

            {showDropdown && (
                <div className="absolute right-[-20px] top-[47px] w-fit bg-[#112c54] rounded shadow-lg z-50">
                    <div className="p-3 pb-2">
                        <h3 className="mt-1 text-lg font-semibold text-gold-light">{username ? username : ''}</h3>
                        <p className='text-[12px]'>{email ? email : ''}</p>
                    </div>
                    <div className=" pb-2">
                        <button
                            onClick={() => router.push('/user')}
                            className="flex items-center gap-2 w-full hover:text-navy px-3 py-1 mb-1 text-left hover:bg-gray-100 transition"
                        >
                            <MdOutlinePersonOutline size={24} />
                            <span className="text-sm font-normal">{('User Dashboard')}</span>
                        </button>
                        <button
                            onClick={() => dispatch(logout())}
                            className="flex items-center gap-2 w-full px-3 py-1 text-left text-red-500 hover:bg-gray-100 transition"
                        >
                            <MdLogout size={24} />
                            <span className="text-sm font-normal">{('Log Out')}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
