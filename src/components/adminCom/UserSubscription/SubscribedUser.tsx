'use client'
import React, { useState } from 'react'
import ActionButton from '@/ui/button/ActionButton';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch';
import Pagination from '@/ui/pagination/Pagination';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import ConfirmModal from '@/ui/modal/ConfirmModal';
import { useDeleteUserSubscriptionMutation, useFetchUserSubscriptionQuery } from '@/redux/features/other/subscription/subscriptionApi';
import { formatDateTime } from '@/utils/dateFormat/dateFormat';

const SubscribedUser = () => {
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchUserSubscriptionQuery();
    const [deleteUserSub] = useDeleteUserSubscriptionMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteUserSub(editId)
                .unwrap()
                .then(() => {
                    setEditId(null);
                    setConfirmModalOpen(false);
                    toast.success("Record deleted successfully.");
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
    };
    const handleModalClose = () => {
        setConfirmModalOpen(false);
        setEditId(null);
    };

    const getStatus = (status: string) => {
        if (status === 'active') {
            return (
                <span className='bg-green-600 px-2 py-1 rounded-sm'>Active</span>
            )
        }
        else {
            return (
                <span className='bg-gray-800 px-2 py-1 rounded-sm'>Active</span>
            )
        }
    }
    return (
        <div>
            {/* <PageLayoutHeader>
            </PageLayoutHeader> */}
            <DataTableContainer>
                <DataTableSearchContainer
                    onTableSearch={(val) => setSearchQuery({ ...searchQuery, search: val })}
                    onClearSearch={() => setSearchQuery({ ...searchQuery, search: '' })}
                />
                <DataTable loading={isLoading || isFetching}>
                    <DataTable.TH>
                        <DataTable.TR>
                            <DataTable.THD align="center">
                                {("S.No")}
                            </DataTable.THD>
                            <DataTable.THD align="center">
                                {"User"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Plan"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {("Start date ")}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("End date")}
                            </DataTable.ActionCol>

                            <DataTable.THD align="center">
                                {("Status")}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("Stripe_subscription_id")}
                            </DataTable.ActionCol>

                            <DataTable.ActionCol align="center">
                                {("Action")}
                            </DataTable.ActionCol>
                        </DataTable.TR>
                    </DataTable.TH>
                    {data && data.length ? (
                        <DataTable.TB>
                            {data.map((el, index) => (
                                <DataTable.TR key={el.id}>
                                    <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                    <DataTable.TCD align="center">{el.user}</DataTable.TCD>

                                    <DataTable.TCD align='center'>
                                        {el.plan}
                                    </DataTable.TCD>
                                    <DataTable.TCD align='center'>
                                        {formatDateTime(el.start_date)}
                                    </DataTable.TCD>
                                    <DataTable.TCD align='center'>
                                        {formatDateTime(el.end_date)}
                                    </DataTable.TCD>

                                    <DataTable.TCD align='center'>
                                        {getStatus(el.status)}

                                    </DataTable.TCD>

                                    <DataTable.TCD align='center'>
                                        {el.stripe_subscription_id}
                                    </DataTable.TCD>
                                    <DataTable.TCD>
                                        <>
                                            <ActionButton>

                                                <ActionButton.DeleteIcon
                                                    onClick={() => handleDeleteData(el.id.toLocaleString())}
                                                />

                                            </ActionButton>
                                        </>
                                    </DataTable.TCD>
                                </DataTable.TR>
                            ))}
                        </DataTable.TB>
                    ) : (
                        <DataTable.EmptyBody span={11} />
                    )}
                </DataTable>
                <Pagination
                    loading={false}
                    totalRecords={data ? data.length : 0}
                    onPageChange={(val) =>
                        setSearchQuery({ ...searchQuery, page: val })
                    }
                    onPageLimitChange={(val) =>
                        setSearchQuery({ ...searchQuery, page_size: val, page: 1 })
                    }
                />
            </DataTableContainer>

            <ConfirmModal
                title="Delete Sport"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
                varient='danger'
            />
        </div>
    )
}

export default SubscribedUser