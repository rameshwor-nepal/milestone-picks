import UserLayout from '@/components/UserCom/layout/UserLayout'
import React from 'react'

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserLayout>
            {children}
        </UserLayout>
    )
}

export default UsersLayout