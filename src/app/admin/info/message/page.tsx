import MessageList from '@/components/adminCom/pageInfo/messageList/MesssageList'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const Message = () => {
    return (
        <PageLayout
            title='Message Section'
            subtitle='Add/Edit message section'
        >
            <MessageList />
        </PageLayout>
    )
}

export default Message