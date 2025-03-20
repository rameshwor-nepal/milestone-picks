import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar/Navbar";
import Testimonial from "@/components/testimonials/Testimonial";
import Image from "next/image";
import { MdArrowForward, MdGroups2 } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* main hero section */}
      <section className="w-full relative">
        <div className="h-screen text-white relative">
          {/* Overlay */}
          <div className="absolute h-screen w-full z-10 bg-[linear-gradient(to_right,rgba(2,10,7,0.9),rgba(1,28,19,0.8))]"></div>

          {/* Background Image */}
          <div className="absolute z-0 h-screen w-full">
            <Image
              src="/landing-page-bg.jpeg"
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>

          {/* Foreground Content */}
          <div className="absolute z-20 w-full">
            <Navbar />

            {/* Hero Content */}
            <div className="h-full flex items-center justify-start py-24 px-10 md:px-20">
              <div>
                <p className="text-5xl md:text-[80px] leading-tight font-bold">
                  BetWin 100% <br /> <span className="text-green-3">Guarantee</span>
                </p>
                <p className="mt-4 text-lg max-w-[30rem]">
                  Our sports picks will finish positive in your 30 days or your money will be back
                </p>
                <button
                  className="md:py-5 md:px-10 py-4 px-8 text-lg bg-green-2  rounded-md text-white font-bold flex items-center gap-2 mt-8 transition-all hover:bg-green-2/80"
                >
                  <span>
                    Explore More
                  </span>
                  <span>
                    <MdArrowForward size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* picks for your sports */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-3">Pick Your <span className="text-green-3"> Favorite </span>Sport</h2>
            <p className="text-xl text-gray-500 font-medium mb-12">Select a sport you like the most</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>
            <a
              className=" rounded-md border outline-none flex flex-col justify-between items-center  border-green-200 p-4 shadow-sm transition hover:border-green-200/50 hover:shadow-green-200/40"
            >
              <div className="p-3 bg-green-400 rounded-sm">
                <MdGroups2 size={30} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-2">NBA</h2>
            </a>

          </div>
        </div>
      </section>

      {/* Price section */}
      <section className="max-w-6xl mx-auto pt-10 pb-28 px-8">

        <div className="max-w-md mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold mb-4 lg:text-4xl"><span className="text-green-3">Flexible</span> Plans</h1>
          <p className="text-xl text-gray-500 font-medium">Choose a plan that works best for you and your team.</p>
        </div>

        <div className="flex flex-col justify-between items-center gap-4 lg:flex-row lg:items-start">
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

      {/* about us */}
      <section className="relative xl:px-32 lg:px-24 h-screen sm:px-12 px-12 md:py-7 lg:py-20 sm:py-14 py-6 overflow-hidden">
        <div className='absolute inset-0 z-10 bg-[linear-gradient(to_left,rgba(12,15,19,1),rgba(12,15,19,0.9),rgba(12,15,19,0.8))]'></div>
        <Image
          src={'/using-laptop3.jpeg'}
          alt='hero image'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 z-20 flex flex-col justify-center items-center'>
          <div className='flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto px-6'>
            <div className='relative flex-1 lg:pb-16 pb-6'>
              <div className='lg:w-[35rem] lg:h-[34rem] w-[30rem] h-[24rem] sm:w-[40rem] sm:h-[29rem] shadow-lg relative bg-white'>
                <Image src={'/using-laptop.jpeg'} alt='image' fill className='p-3' />
              </div>

              <div className='hidden lg:block absolute right-0 top-[25rem] w-[20rem] h-[14rem] bg-white shadow-lg'>
                <Image src={'/using-laptop2.jpeg'} alt='image' fill className='p-3' />
              </div>
            </div>
            <div className='max-w-[35rem]'>
              <h1 className='lg:text-4xl text-3xl text-green-3 font-extrabold leading-extra-tight md:py-8 my-3'>
                About <span className="text-white"> Us</span>
              </h1>
              <p className='text-gray-1'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias fugit at dolore! Officiis, voluptate.
                Facilis, eos! Fuga dolores eveniet, tempora aliquam qui ad voluptatum itaque reprehenderit quo, sunt aut?
                qui ad voluptatum itaque reprehenderit quo, sunt aut?
              </p>
              <p className='text-gray-1 my-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias fugit at dolore! Officiis, voluptate.
                Facilis, eos! Fuga dolores eveniet, tempora aliquam qui ad voluptatum itaque reprehenderit quo, sunt aut?
                qui ad voluptatum itaque reprehenderit quo, sunt aut?
              </p>
              <button
                className="md:py-5 md:px-10 py-4 px-8 text-lg bg-green-2 w-[13rem] rounded-xl text-white font-bold flex items-center gap-2 mt-12 transition-all hover:bg-green-2/80"
              >
                <span>
                  Read More
                </span>
                <span>
                  <MdArrowForward size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Footer />
    </>
  );
}
