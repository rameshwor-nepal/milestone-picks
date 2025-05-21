import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

interface PropsI {
    children: React.ReactNode;
    redirectText?: string | null;
    redirectLink?: string | null;
}

const AuthContainer = ({ children, redirectText, redirectLink }: PropsI) => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-navy-dark text-left">
            <div className="flex bg-navy-dark rounded-lg shadow-sm shadow-black-3 overflow-hidden mx-auto max-w-sm w-full lg:max-w-5xl">
                <div className="hidden md:block lg:w-1/2 bg-cover relative min-h-72">
                    <Image
                        src={"/using-laptop.jpeg"}
                        fill
                        alt='auth-image'
                        style={{ objectFit: 'cover' }}
                        sizes='100vh'
                        onError={(err) => console.error('Failed to load image', err)}
                    />

                </div>
                <div className="w-full px-2 py-6 lg:w-1/2">
                    <h2 className="text-center text-2xl lg:text-3xl">
                        <span className="font-display font-bold text-white">Milestone
                            <span className="text-gold ml-2">Picks</span>
                        </span>
                    </h2>
                    {/* <h1 className="text-3xl font-medium  mt-8">Reset password</h1>
                    <p className="text-slate-500 ">Fill up the form to reset the password</p> */}

                    {children}

                    <div className="my-2 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link href={redirectLink ? redirectLink : '/signup'}>
                            <span className="text-xs text-blue-500 uppercase p-1 border-blue-500 hover:border-b-[1px]">
                                {redirectText ? redirectText : 'or sign up'}
                            </span>
                        </Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthContainer