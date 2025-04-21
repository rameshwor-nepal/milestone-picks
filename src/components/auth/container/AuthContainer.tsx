import Link from 'next/link';
import React from 'react'

interface PropsI {
    children: React.ReactNode;
    redirectText?: string | null;
    redirectLink?: string | null;
}

const AuthContainer = ({ children, redirectText, redirectLink }: PropsI) => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-navy-dark">
            <div className="flex bg-navy-dark rounded-lg shadow-sm shadow-black-3 overflow-hidden mx-auto max-w-sm w-full lg:max-w-5xl">
                <div className="hidden md:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: "url('/using-laptop.jpeg') " }}>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gold text-center">Milestone Logo</h2>
                    {/* <h1 className="text-3xl font-medium  mt-8">Reset password</h1>
                    <p className="text-slate-500 ">Fill up the form to reset the password</p> */}

                    {children}

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link href={redirectLink ? redirectLink : '/signup'}>
                            <span className="text-xs text-gray-500 uppercase">{redirectText ? redirectText : 'or sign up'}</span>
                        </Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthContainer