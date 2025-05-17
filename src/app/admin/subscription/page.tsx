import SubscribedUser from '@/components/adminCom/UserSubscription/SubscribedUser'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const Subscription = () => {
    return (
        <>
            <PageLayout
                title='User Subscription'
                subtitle='View subscribed user'
            >
                <SubscribedUser />
            </PageLayout>
        </>
    )
}

export default Subscription