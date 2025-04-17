import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/navbar/Navbar'
import SubHeader from '@/components/header/subHeader/SubHeader'
import ContactForm from '@/components/pages/contactus/ContactForm'
import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <SubHeader
                title='Contact Us'
                subTitle='Have questions or need support? Reach out to our team, and we&apos;ll help you with all your betting needs and inquiries.'
            />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default ContactUs