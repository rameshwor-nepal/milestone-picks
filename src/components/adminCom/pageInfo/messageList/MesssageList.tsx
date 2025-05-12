'use client'
import ActionButton from '@/ui/button/ActionButton';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch';
import React, { useState } from 'react'
import Pagination from '@/ui/pagination/Pagination';
import ConfirmModal from '@/ui/modal/ConfirmModal';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import { useDeleteContactusMutation, useFetchContactusQuery } from '@/redux/features/other/contactUs/contactUsApi';

const MessageList = () => {
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchContactusQuery(searchQuery);

    const [deleteContactInfo] = useDeleteContactusMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteContactInfo(editId)
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

    return (
        <div>
            <DataTableContainer>
                <DataTableSearchContainer onTableSearch={() => { }} />
                <DataTable loading={isLoading || isFetching}>
                    <DataTable.TH>
                        <DataTable.TR>
                            <DataTable.THD align="center">
                                {("S.No")}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Full Name"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Email"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Phone"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Country"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Message"}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("Action")}
                            </DataTable.ActionCol>
                        </DataTable.TR>
                    </DataTable.TH>
                    {data && data.results.length ? (
                        <DataTable.TB>
                            {data.results.map((el, index) => {
                                return (
                                    <DataTable.TR key={el.id}>
                                        <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.full_name}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.email}</DataTable.TCD>

                                        <DataTable.TCD align="center">{el.phone}</DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el.country || "-"}
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el.message}
                                        </DataTable.TCD>

                                        <DataTable.TCD>
                                            <ActionButton>
                                                <ActionButton.DeleteIcon
                                                    onClick={() => handleDeleteData(el.id)}
                                                />
                                            </ActionButton>
                                        </DataTable.TCD>
                                    </DataTable.TR>
                                )
                            }
                            )}
                        </DataTable.TB>
                    ) : (
                        <DataTable.EmptyBody span={11} />
                    )}
                </DataTable>
                <Pagination
                    loading={false}
                    totalRecords={data ? data.count : 0}
                    onPageChange={(val) =>
                        setSearchQuery({ ...searchQuery, page: val })
                    }
                    onPageLimitChange={(val) =>
                        setSearchQuery({ ...searchQuery, page_size: val, page: 1 })
                    }
                />
            </DataTableContainer>

            <ConfirmModal
                title="Delete Contact Info"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
                varient='danger'
            />
        </div>
    )
}

export default MessageList