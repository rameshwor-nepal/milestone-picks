import React from 'react'

const ForgetPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex bg-blue-1 rounded-lg shadow-sm shadow-black-3 overflow-hidden mx-auto max-w-sm w-full lg:max-w-4xl">
                <div className="hidden md:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: "url('/using-laptop.jpeg') " }}>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-green-3 text-center">Milestone Logo</h2>

                    <div className="mt-4">
                        <label className="block  text-sm font-bold mb-2">Email Address</label>
                        <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                    </div>

                    <div className="mt-8">
                        <button className="bg-green-2 text-white font-bold py-2 px-4 w-full rounded transition-all hover:bg-green-2/80">Continue</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword