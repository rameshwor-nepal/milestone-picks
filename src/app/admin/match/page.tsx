import MatchList from '@/components/adminCom/match/MatchList'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const Match = () => {
    return (
        <PageLayout
            title='Match Section'
            subtitle='Add/Edit Matches'
        >
            <MatchList />
        </PageLayout>
    )
}

export default Match