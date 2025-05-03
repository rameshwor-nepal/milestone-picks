import AddAboutInfo from '@/components/adminCom/pageInfo/AddAboutInfo/AddAboutInfo'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const AboutInfo = () => {
    return (
        <>
            <PageLayout
                title='About page Section'
                subtitle='Add/Edit about page section'
            >
                <AddAboutInfo />
            </PageLayout>

        </>
    )
}

export default AboutInfo