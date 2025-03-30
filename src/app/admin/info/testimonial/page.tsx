import TestimonialList from '@/components/adminCom/pageInfo/testimonialList/TestimonialList'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const Testimonial = () => {
    return (
        <PageLayout
            title='Testimonial Section'
            subtitle='Add/Edit testimonial section'
        >
            <TestimonialList />
        </PageLayout>
    )
}

export default Testimonial