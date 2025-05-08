import PrevHistory from '@/components/adminCom/prevHistory/PrevHistory'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const History = () => {
    return (
        <>
            <PageLayout
                title='Prediction History'
                subtitle='View previous prediction'
            >
                <PrevHistory />
            </PageLayout>
        </>
    )
}

export default History