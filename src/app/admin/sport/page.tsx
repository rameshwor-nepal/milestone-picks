import SportList from '@/components/adminCom/sport/SportList'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const Sport = () => {
    return (
        <div>
            <PageLayout
                title='Sport Section'
                subtitle='Add/Edit sports'
            >
                <SportList />
            </PageLayout>
        </div>
    )
}

export default Sport