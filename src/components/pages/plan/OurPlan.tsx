import React from 'react'

const OurPlanCom = () => {
    return (
        <section className="max-w-6xl mx-auto pt-10 pb-12 px-8">

            <div className="flex flex-col mt-6 justify-between items-center gap-4 lg:flex-row lg:items-start">
                {/* 1st items */}
                <div className="w-full flex-1 mt-8 p-8 order-2 bg-gray-900 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg" alt="" className="rounded-3xl w-20 h-20" />
                        <div className="ml-5 ">
                            <span className="block text-2xl  font-semibold">Basic</span>
                            <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">10 </span></span><span className="text-gray-500 font-medium">/ user</span>
                        </div>
                    </div>
                    <ul className="mb-7 font-medium text-gray-500">
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Get started with <span className="text-white">messaging</span></span>
                        </li>
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Flexible <span className="text-white">team meetings</span></span>
                        </li>
                        <li className="flex text-lg">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3"><span className="text-white">5 TB</span> cloud storage</span>
                        </li>
                    </ul>
                    <a href="#/" className="flex justify-center items-center bg-green-2 rounded-xl py-5 px-4 text-center text-white text-xl transition-all hover:bg-green-2/80">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
                    </a>
                </div>

                {/* 2nd items */}
                <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl border-green-3 border bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                    <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg" alt="" className="rounded-3xl w-20 h-20" />
                        <div className="ml-5">
                            <span className="block text-3xl font-semibold text-white">Startup</span>
                            <span><span className="font-medium text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-white">24 </span></span><span className="font-medium">/ user</span>
                        </div>
                    </div>
                    <ul className="mb-10 font-medium text-xl">
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">All features in <span className="text-white">Basic</span></span>
                        </li>
                        <li className="flex mb-6">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">Flexible <span className="text-white">call scheduling</span></span>
                        </li>
                        <li className="flex">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3"><span className="text-white">15 TB</span> cloud storage</span>
                        </li>
                    </ul>
                    <a href="#/" className="flex justify-center items-center bg-green-4 rounded-xl py-6 px-4 text-center text-white text-2xl transition-all hover:bg-green-4/80">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
                    </a>
                </div>

                {/* 3rd items */}
                <div className="w-full flex-1 mt-8 p-8 order-3 bg-gray-900 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg" alt="" className="rounded-3xl w-20 h-20" />
                        <div className="ml-5 ">
                            <span className="block text-2xl font-semibold">Enterprise</span>
                            <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">35 </span></span><span className="text-gray-500 font-medium">/ user</span>
                        </div>
                    </div>
                    <ul className="mb-7 font-medium text-gray-500">
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">All features in <span className="text-white">Startup</span></span>
                        </li>
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Growth <span className="text-white">oriented</span></span>
                        </li>
                        <li className="flex text-lg">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3"><span className="text-white">Unlimited</span> cloud storage</span>
                        </li>
                    </ul>
                    <a href="#/" className="flex justify-center items-center bg-green-2 rounded-xl py-5 px-4 text-center text-white text-xl transition-all hover:bg-green-2/80">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
                    </a>
                </div>

            </div>

        </section>
    )
}

export default OurPlanCom