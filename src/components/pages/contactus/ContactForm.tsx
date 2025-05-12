'use client'
import { useCreateContactusMutation, useFetchCountryQuery } from '@/redux/features/other/contactUs/contactUsApi';
import Button from '@/ui/button/Button';
import { Form, SelectInput, TextArea, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { toast } from 'react-toastify';

interface FormFieldsI {
    full_name: string;
    email: string;
    message: string;
    phone: string;
    country: {
        value: string;
        label: string;
    };
}

const ContactForm: React.FC = () => {

    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormFieldsI>();

    const [addMessage, { isLoading }] = useCreateContactusMutation();
    const { data: countryData, isLoading: isCountryLoading, isFetching: isCountryFetching } = useFetchCountryQuery();

    const onSubmit: SubmitHandler<FormFieldsI> = async (data) => {

        const postData = {
            full_name: data.full_name,
            email: data.email,
            message: data.message,
            phone: data.phone,
            country: data.country.value
        }
        await addMessage(postData).unwrap()
            .then(() => {
                toast.success("Message sent successfully");
                setSubmitted(true)
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };
    const countryOptions = countryData
        ? Object.entries(countryData).map(([code, name]) => ({
            value: code,
            label: name,
        }))
        : [];


    return (
        <>
            {/* Contact Form Section */}
            <section className="py-16 bg-white text-left">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="section-heading">Get In Touch</h2>
                                <p className="text-navy mb-8">
                                    Whether you have questions about our membership plans, need help with your account, or want to learn more about our sports picks service, we&apos;d love to hear from you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center text-gold mr-4 flex-shrink-0">
                                            <MdOutlineMail size={25} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy mb-1">Email Us</h3>
                                            <p className="text-navy">support@sportspicks.com</p>
                                            <p className="text-gray-500 text-sm mt-1">We aim to respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center text-gold mr-4 flex-shrink-0">
                                            <IoCallOutline size={25} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy mb-1">Call Us</h3>
                                            <p className="text-navy">(555) 123-4567</p>
                                            <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center text-gold mr-4 flex-shrink-0">
                                            <TbWorld size={25} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy">Connect Online</h3>
                                            <div className="flex space-x-4 mt-2">
                                                <a href="#" className="text-navy hover:text-gold transition-colors">
                                                    <FiFacebook size={20} />
                                                </a>
                                                <a href="#" className="text-navy hover:text-gold transition-colors">
                                                    <FaInstagram size={20} />
                                                </a>
                                                <a href="#" className="text-navy hover:text-gold transition-colors">
                                                    <FaXTwitter size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Link */}
                                <div className="mt-10 p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-lg font-bold text-navy mb-2">Frequently Asked Questions</h3>
                                    <p className="text-navy mb-4">
                                        Find answers to common questions about our services, membership plans, and betting picks.
                                    </p>
                                    <a href="/plan" className="text-gold hover:text-gold-dark font-medium transition-colors flex items-center">
                                        View FAQ
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className='bg-navy/5 py-8 rounded-lg shadow-md'>
                                <h2 className="text-2xl font-bold text-navy mb-6 px-3">Send Us a Message</h2>

                                {submitted ? (
                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-lg font-bold text-green-700">Message Sent!</h3>
                                                <p className="text-green-600 mt-2">
                                                    Thank you for contacting us. Our team will get back to you as soon as possible.
                                                </p>
                                                <button
                                                    className="mt-4 text-green-700 font-medium hover:text-green-900 transition-colors"
                                                    onClick={() => setSubmitted(false)}
                                                >
                                                    Send another message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Form>
                                        <Grid>
                                            <Grid.Row>

                                                <Grid.Col size='lg'>
                                                    <TextInput
                                                        label='Full Name'
                                                        placeholder='Enter a full name'
                                                        {...register("full_name", {
                                                            required: {
                                                                value: true,
                                                                message: "Full Name is required.",
                                                            },
                                                        })}
                                                        errorMsg={errors?.full_name?.message}
                                                        required
                                                        theme='light'
                                                    />

                                                </Grid.Col>

                                                <Grid.Col size='lg'>
                                                    <TextInput
                                                        label='Email'
                                                        placeholder='Enter a email address'
                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: "Email is required.",
                                                            },
                                                        })}
                                                        errorMsg={errors?.email?.message}
                                                        required
                                                        theme='light'
                                                    />
                                                </Grid.Col>

                                                <Grid.Col size='lg'>
                                                    <TextInput
                                                        label='Phone number'
                                                        placeholder='Enter a phone number'
                                                        {...register("phone", {
                                                            required: {
                                                                value: true,
                                                                message: "Phone number is required.",
                                                            },
                                                        })}
                                                        errorMsg={errors?.phone?.message}
                                                        required
                                                        theme='light'
                                                    />
                                                </Grid.Col>

                                                <Grid.Col size='lg'>
                                                    <TextArea
                                                        label='Message'
                                                        placeholder='Enter a message'
                                                        {...register("message", {
                                                            required: {
                                                                value: true,
                                                                message: "Message is required.",
                                                            },
                                                        })}
                                                        errorMsg={errors?.message?.message}
                                                        required
                                                        theme='light'
                                                    />
                                                </Grid.Col>

                                                <Grid.Col size='lg'>
                                                    <SelectInput
                                                        required
                                                        control={control}
                                                        rules={{
                                                            required: {
                                                                value: true,
                                                                message: "Country is required.",
                                                            },
                                                        }}
                                                        label="Country"
                                                        name="country"
                                                        placeholder="Select Country"
                                                        options={countryOptions}
                                                        helperText={errors?.country?.message}
                                                        loading={isCountryFetching || isCountryLoading}
                                                        theme='light'
                                                    />
                                                </Grid.Col>
                                            </Grid.Row>
                                        </Grid>
                                        <div className="mt-8">
                                            <Button
                                                title='Save'
                                                onClick={handleSubmit(onSubmit)}
                                                // secondary={true}
                                                disabled={isLoading}
                                            />

                                        </div>
                                    </Form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map/Location Section */}
            <section className="py-10 bg-gray-50">
                <div className="text-center">
                    <p className="text-navy">
                        <span className='font-semibold '> Office Hours: </span>Monday to Friday, 9:00 AM - 6:00 PM EST<br />
                        <span className='font-semibold '> Phone Support:</span> 7 days a week, 9:00 AM - 9:00 PM EST
                    </p>
                </div>
            </section>
        </>

    );
};

export default ContactForm;
