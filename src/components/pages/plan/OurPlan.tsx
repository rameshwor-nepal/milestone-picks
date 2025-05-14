"use client"

import FAQs from '@/components/testimonials/FAQs';
import Testimonial from '@/components/testimonials/Testimonial';
import { useCreateSubscriptionCheckoutMutation, useFetchSubscriptionPlanQuery } from '@/redux/features/other/subscription/subscriptionApi';
import { useAppSelector } from '@/redux/features/store';
import Button from '@/ui/button/Button';
import SubscriptionCard from '@/ui/card/SubcriptionCard';
import ConfirmModal from '@/ui/modal/ConfirmModal';
import Skeleton from '@/ui/skeleton/Skeleton';
import { ToastError } from '@/utils/toast/ToastError';
import Link from 'next/link'
import React, { useState } from 'react'
import { MdArrowForward } from 'react-icons/md';
import { toast } from 'react-toastify';

const OurPlanCom = () => {
    const commonFeatures = [
        { name: 'Daily Expert Picks', included: true },
        { name: 'Detailed Analysis', included: true },
        { name: 'All Sports Coverage', included: true }
    ];
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<number | null>(null)
    const { email } = useAppSelector((state) => state.auth)
    const { data: subscriptionPlan, isLoading, isFetching } = useFetchSubscriptionPlanQuery();
    const [createCheckout] = useCreateSubscriptionCheckoutMutation();

    const handleModalOpen = (id: number) => {
        setEditId(id)
        setConfirmModalOpen(true)
    }

    const handleOnClick = async () => {
        if (email && editId) {
            const postData = {
                plan_id: editId,
                user_email: email
            }
            await createCheckout(postData)
                .unwrap()
                .then((data) => {
                    toast.success("Please, provide your card info to proceed")
                    window.location.href = data && data.payment_url;
                    // window.open(data && data.payment_url, '_blank');
                })
                .catch((error) => {
                    ToastError.serialize(error)
                })
        }

    }

    const handleModalClose = () => {
        setConfirmModalOpen(false);
    };

    return (
        <main>

            {/* Plans Section */}
            <section className="py-16 bg-white">
                <div className="px-4 md:px-10 lg:px-20">
                    <div className="w-full">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-navy text-center">Select Your Plan</h2>
                        <div className="w-20 h-1 bg-gold mb-6 mx-auto"></div>
                        <p className="text-xl text-navy-light font-medium mb-8 text-center ">
                            Our flexible plans are designed to fit your betting style and budget.
                        </p>

                        {subscriptionPlan &&
                            <div className='max-w-3xl mt-12 lg:mt-16 px-4'>
                                <SubscriptionCard
                                    name="Weekly All-in-One Pass"
                                    price={`$${parseInt(subscriptionPlan[0].price)}`}
                                    duration={`${subscriptionPlan[0].duration} days`}
                                    description="Perfect for those who want to test our service or prefer weekly commitments."
                                    features={[
                                        ...commonFeatures,
                                        { name: 'Email Support', included: true },
                                        { name: 'Priority Picks Access', included: false },
                                        { name: 'VIP Discord Access', included: false },
                                        { name: 'Phone Consultation', included: false }
                                    ]}
                                    onClick={() => handleModalOpen(subscriptionPlan[0].id)}
                                />
                                <div>

                                </div>
                            </div>

                        }


                        {
                            isLoading || isFetching ?
                                <Skeleton />
                                :
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-12 lg:mt-16 px-4">
                                    {
                                        subscriptionPlan &&
                                        <>
                                            <SubscriptionCard
                                                name="Weekly All-in-One Pass"
                                                price={`$${parseInt(subscriptionPlan[2].price)}`}
                                                duration={`${subscriptionPlan[2].duration} days`}
                                                description="Perfect for those who want to test our service or prefer weekly commitments."
                                                features={[
                                                    ...commonFeatures,
                                                    { name: 'Email Support', included: true },
                                                    { name: 'Priority Picks Access', included: false },
                                                    { name: 'VIP Discord Access', included: false },
                                                    { name: 'Phone Consultation', included: false }
                                                ]}
                                                onClick={() => handleModalOpen(subscriptionPlan[2].id)}
                                            />
                                            <SubscriptionCard
                                                name="Monthly All-in-One Pass"
                                                price={`$${parseInt(subscriptionPlan[1].price)}`}
                                                duration={`${subscriptionPlan[1].duration} days`}
                                                description="Our most popular plan with the best value and complete access to all features."
                                                features={[
                                                    ...commonFeatures,
                                                    { name: 'Email Support', included: true },
                                                    { name: 'Priority Picks Access', included: true },
                                                    { name: 'VIP Discord Access', included: true },
                                                    { name: 'Phone Consultation', included: true }
                                                ]}
                                                popular={true}
                                                onClick={() => handleModalOpen(subscriptionPlan[1].id)}
                                            />
                                        </>
                                    }

                                </div>
                        }
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <div className='lg:mt-10'>
                <Testimonial />
            </div>
            <div className="relative h-fit w-full lg:px-20 md:px-10 p-4 md:py-7 lg:py-12 text-center overflow-auto">
                <FAQs />
            </div>

            <section className="py-20 bg-navy relative overflow-hidden mb-4 md:mb-10 lg:mb-14 mx-4 md:mx-10 lg:mx-20 rounded-md">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-[53rem] mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Winning?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join thousands of satisfied members who are beating the bookmakers with our expert picks.
                            Choose your plan and elevate your sports betting success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* <Link href="/our-plans" className="px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-md transition-all transform hover:scale-105 inline-flex items-center justify-center">
                                View Membership Plans
                                <MdArrowForward size={18} className="ml-2" />
                            </Link> */}
                            <Link href={"/ourPlan"} data-aos="fade-right" data-duration="1000">
                                <Button title="Get Start Now" secondary width='fit'>
                                    <MdArrowForward className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>

                            <Link href={"/history"} data-aos="fade-left" data-duration="1000">
                                <Button title="View Our Track Record" width='fit'>
                                    <MdArrowForward className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
            <ConfirmModal
                title="Proceed for payment"
                info="Are you sure you want to proceed?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleOnClick()}
                closeModal={handleModalClose}
            />
        </main>
    )
}

export default OurPlanCom