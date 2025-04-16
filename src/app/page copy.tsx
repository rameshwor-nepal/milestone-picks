import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar/Navbar";
import Testimonial from "@/components/testimonials/Testimonial";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdGroups2 } from "react-icons/md";

export default function HomeCopy() {
  return (
    <>
      {/* main hero section */}
      <section className="w-full relative">
        <Navbar />
        <div className="h-screen text-white relative">
          {/* Overlay */}
          <div className="absolute h-screen w-full z-10 bg-[linear-gradient(to_right,rgba(10,30,59,0.9),rgba(10,30,59,0.8))]"></div>

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
          <div className="absolute z-20 w-full h-full">
            {/* Hero Content */}
            <section className=" py-20 md:py-28">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                      Expert Sports Picks <span className="text-gold">That Win</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mt-6 mb-8 max-w-lg">
                      Join thousands of members who trust our professional sports betting picks for NBA, NFL, MLB, NHL and College Basketball.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/plans" className="btn-secondary flex items-center justify-center">
                        View Our Plans <MdArrowForward size={18} className="ml-2" />
                      </Link>
                      <Link href="/history" className="text-white font-semibold py-2 px-6 border-2 border-white rounded-md hover:bg-white/10 transition-colors duration-200 flex items-center justify-center">
                        View Past Results
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display font-bold text-navy text-xl">Today's Top Pick</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Premium</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">NBA - 7:30 PM EST</p>
                            <p className="font-medium">Lakers vs. Celtics</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-navy">Lakers +3.5</p>
                            <p className="text-green-600 text-sm font-medium">Confidence: 85%</p>
                          </div>
                        </div>
                      </div>
                      <Link href="/plans" className="btn-primary w-full flex items-center justify-center">
                        Unlock All Picks
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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


//  <footer>
//             <div className='bg-navy py-10 px-24 flex flex-col gap-4 justify-center'>
//                 <div className='flex gap-48 items-center mt-4'>
//                     <div className=' text-white font-bold text-5xl'>
//                         LOGO
//                     </div>
//                     <div className='text-center '>
//                         <p className='text-white text-4xl font-medium mb-2'>
//                             We Welcome Your Passion and Expertise
//                         </p>
//                         <p className="text-gray-50">
//                             Join our empowering communities today and grow with us
//                         </p>

//                         <button
//                             className="w-fit text-white mt-3 transition-all duration-500 ease-in-out bg-green-2 hover:bg-green-2/80 font-medium rounded-lg text-sm px-2.5 py-2 text-center">
//                             Join us Now
//                         </button>
//                     </div>
//                 </div>

//                 <div className='my-10 flex text-white'>

//                     <div className="pr-20">

//                         <div className='flex items-center gap-2  mb-4' >

//                             <span >
//                                 <MdPhone size={30} />
//                             </span>
//                             <p>
//                                 01-4465573 <br />
//                                 98635342411
//                             </p>

//                         </div>

//                         <div className='flex items-center gap-2  mb-4'>

//                             <span>
//                                 <FaEnvelope size={25} />
//                             </span>
//                             <p>
//                                 milestonepicks@gmail.com <br />
//                                 customerservice.milestonepicks@gmail.com
//                             </p>

//                         </div>

//                         <div className='flex items-center gap-2 mb-4'>

//                             <span>
//                                 <MdMyLocation size={25} />
//                             </span>
//                             <p>
//                                 Lalitpur-10, Nepal <br />
//                                 New Road, Kathmandu, Nepal
//                             </p>

//                         </div>


//                     </div>

//                     <div className=' flex space-x-40'>
//                         <div>
//                             <p className='mb-4 text-[18px] font-medium text-green-3'> About Us </p>

//                             <p className='pb-1 text-[14px] flex item items-center cursor-pointer '>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     About Our Website
//                                 </span>
//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Blogs
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Careers
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Digital Payments
//                                 </span>

//                             </p>
//                         </div>

//                         <div>
//                             <p className='mb-4 text-[18px] font-medium text-green-3 flex item items-center cursor-pointer'>

//                                 Customer Service
//                             </p>

//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Help Center
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Report Abuse
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Member Guidelines
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Customer Guidelines
//                                 </span>
//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     FAQs
//                                 </span>
//                             </p>

//                         </div>

//                         <div>

//                             <p className='mb-4 text-[18px] font-medium text-green-3 flex item items-center cursor-pointer'>

//                                 Legal
//                             </p>

//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Privacy Policy
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Terms and Condition
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Return Policy
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Venue Location
//                                 </span>

//                             </p>
//                             <p className='pb-1 text-[14px]  flex item items-center cursor-pointer'>

//                                 <IoIosArrowForward size={15} />
//                                 <span>
//                                     Report about venue
//                                 </span>

//                             </p>

//                         </div>

//                     </div>

//                 </div>


//                 <div className='flex text-white'>

//                     {/* <div>

//                         <div className=''>
//                             <p className='  text-[20px] font-medium text-blue-300'> Download App</p>

//                             <div className='flex items-center space-x-4 mb-4 mt-4' >

//                                 <div className='bg-green-2 text-white h-9 w-38 rounded-md'>
//                                     <p className='p-1 pl-2'>
//                                         Get on App Store
//                                     </p>

//                                 </div>

//                                 <div className='bg-green-2 text-white h-9 w-36 rounded-md'>
//                                     <p className='p-1 pl-2'>
//                                         Get on Playstore
//                                     </p>

//                                 </div>

//                             </div>
//                         </div>

//                     </div> */}



//                     {/* This is for payment method */}
//                     <div >
//                         <div className=''>
//                             <p className='tracking-wider text-[20px] font-medium text-green-3'>
//                                 Payment Methods
//                             </p>

//                             <div className='ml-16 mt-4 flex space-x-4'>
//                                 {/* <div >
//                                     <img src={handcash} alt="hand cash" className='h-8 w-16' />
//                                 </div>

//                                 <div >
//                                     <img src={visacard} alt="hand cash" className='h-8 w-16' />
//                                 </div>

//                                 <div >
//                                     <img src={debitcard} alt="hand cash" className='h-8 w-16' />
//                                 </div>

//                                 <div >
//                                     <img src={mastercard} alt="hand cash" className='h-8 w-16' />
//                                 </div> */}

//                             </div>
//                         </div>

//                     </div>



//                     {/* This is for social media */}

//                     <div >
//                         <div className=''>
//                             <p className='ml-20 tracking-wider text-[20px] font-medium text-green-3'>
//                                 Follow Us On Social Media
//                             </p>

//                             <div className='ml-20 mt-4 flex space-x-4  cursor-pointer'>
//                                 <div >
//                                     <FaFacebookSquare size={30} />

//                                 </div>

//                                 <div >
//                                     <FaSquareTwitter size={30} />
//                                 </div>

//                                 <div >
//                                     <FaYoutube size={30} />
//                                 </div>

//                                 <div >
//                                     <FaSquareInstagram size={30} />
//                                 </div>

//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//             {/* 
//             <div className='h-12 bg-[#01140d]  '>

//                 <p className='text-white pt-4 text-[12px] pl-[36rem] '>
//                     Copyright@2022 Ourdevelopment | Powered by khelkud
//                 </p>

//             </div> */}

//         </footer>