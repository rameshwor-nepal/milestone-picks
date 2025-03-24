import FaqList from '@/components/adminCom/pageInfo/faqList/FaqList'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const FAQ = () => {
    return (
        <PageLayout
            title='FAQ Section'
            subtitle='Add/Edit faq section'
        >
            <FaqList />
        </PageLayout>
    )
}

export default FAQ