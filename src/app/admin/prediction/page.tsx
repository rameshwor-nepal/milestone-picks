import PredictionList from '@/components/adminCom/prediction/PredictionList'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const Prediction = () => {
    return (
        <PageLayout
            title='Prediction Section'
            subtitle='Add/Edit predictions'
        >
            <PredictionList />
        </PageLayout>
    )
}

export default Prediction