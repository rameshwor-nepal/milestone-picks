'use client'
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: 'General Inquiry',
                message: ''
            });
        }, 1500);
    };

    return (
        <>
            {/* Contact Form Section */}
            <section className="py-16 bg-white text-left">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="section-heading">Get In Touch</h2>
                                <p className="text-navy mb-8">
                                    Whether you have questions about our membership plans, need help with your account, or want to learn more about our sports picks service, we&apos;d love to hear from you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center text-gold mr-4 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy mb-1">Email Us</h3>
                                            <p className="text-navy">support@sportspicks.com</p>
                                            <p className="text-gray-500 text-sm mt-1">We aim to respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center text-gold mr-4 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy mb-1">Call Us</h3>
                                            <p className="text-navy">(555) 123-4567</p>
                                            <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center text-gold mr-4 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy mb-1">Connect Online</h3>
                                            <div className="flex space-x-4 mt-2">
                                                <a href="#" className="text-navy hover:text-gold transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a href="#" className="text-navy hover:text-gold transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>
                                                </a>
                                                <a href="#" className="text-navy hover:text-gold transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                                    </svg>
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
                                    <a href="/our-plans#faq" className="text-gold hover:text-gold-dark font-medium transition-colors flex items-center">
                                        View FAQ
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>

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
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-navy font-medium mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-navy font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-navy font-medium mb-2">Subject</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 text-navy rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Membership Question">Membership Question</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="Billing Issue">Billing Issue</option>
                                                <option value="Partnership Opportunity">Partnership Opportunity</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-navy font-medium mb-2">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors resize-none"
                                                placeholder="How can we help you?"
                                            ></textarea>
                                        </div>

                                        <button
                                            data-aos="zoom-in" data-aos-duration="1000"
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 px-6 ${isSubmitting
                                                ? 'bg-gray-400'
                                                : 'bg-navy hover:bg-navy-light'
                                                } text-white font-bold rounded-md transition-colors flex items-center justify-center`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </form>
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
