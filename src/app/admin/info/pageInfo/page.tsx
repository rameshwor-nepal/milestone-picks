import HerosectionAdditon from '@/components/adminCom/pageInfo/general/HerosectionAdditon'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const AdminPageInfo = () => {
    return (

        <PageLayout
            title='Hero Section'
            subtitle='Add/Edit hero section'
        >
            <HerosectionAdditon />
        </PageLayout>

    )
}

export default AdminPageInfo