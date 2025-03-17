import React from 'react'

const VerifyOtp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex bg-blue-1 rounded-lg shadow-sm shadow-black-3 overflow-hidden mx-auto max-w-sm w-full lg:max-w-4xl">
                <div className="hidden md:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: "url('/using-laptop.jpeg') " }}>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-green-3 text-center">Milestone Logo</h2>
                    <h1 className="text-3xl font-medium  mt-8">Verify OTP</h1>
                    <p className="text-slate-500 ">Enter the OTP you receive </p>
                    <div className="flex flex-row items-center text-black-2 justify-between mx-auto w-full max-w-xs mt-8">
                        <div className="w-12 h-12 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-12 h-12 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-12 h-12 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-12 h-12 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-12 h-12 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-12 h-12 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
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

export default VerifyOtp