import AuthContainer from '@/components/auth/container/AuthContainer'
import Button from '@/ui/button/Button'
import React from 'react'

const LogIn = () => {
    return (
        <AuthContainer>
            <div className="mt-4">
                <label className="block  text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block  text-sm font-bold mb-2">Password</label>
                    <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>

            <div className="mt-8">
                <Button title={"Save"} />
            </div>
        </AuthContainer>
    )
}

export default LogIn