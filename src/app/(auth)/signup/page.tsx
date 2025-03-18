import AuthContainer from '@/components/auth/container/AuthContainer'
import Button from '@/ui/button/Button'
import React from 'react'

const SignUp = () => {
    return (
        <AuthContainer>
            <div className='w-full flex flex-col lg:flex-row gap-3 pr-3 mt-8'>
                <div>
                    <label className="block  text-sm font-bold mb-2">First Name</label>
                    <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block" type="text" />
                </div>
                <div>
                    <label className="block  text-sm font-bold mb-2">Last Name</label>
                    <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block" type="text" />
                </div>
            </div>
            <div className="mt-4">
                <label className="block  text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full" type="email" />
            </div>
            <div className="mt-4">
                <label className="block  text-sm font-bold mb-2">Password</label>
                <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full" type="password" />
            </div>

            <div className="mt-8">
                <Button title={"Save"} />
            </div>
        </AuthContainer>
    )
}

export default SignUp