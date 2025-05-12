'use client'
import ActionButton from '@/ui/button/ActionButton'
import Button from '@/ui/button/Button'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch'
import { PageLayoutHeader } from '@/ui/layout/PageLayout'
import ModalForm from '@/ui/modal/ModalForm'
import React, { useState } from 'react'
import FaqModalForm from './FaqModalForm'
import ConfirmModal from '@/ui/modal/ConfirmModal'
import { useDeleteFaqContentMutation, useFetchFaqContentQuery } from '@/redux/features/other/faq/faqContentApi'
import { ToastError } from '@/utils/toast/ToastError'
import { toast } from 'react-toastify'
import Pagination from '@/ui/pagination/Pagination'
import Toggle from '@/ui/toggle/Toggle'

const FaqList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchFaqContentQuery(searchQuery);

    const [deleteFaq] = useDeleteFaqContentMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteFaq(editId)
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

    const handleModalOpen = (id: string) => {
        setAddModalOpen(true)
        setEditId(id)
    }

    const handleModalClose = () => {
        setAddModalOpen(false);
        setConfirmModalOpen(false);
        setEditId(null);
    };
    return (
        <>
            <PageLayoutHeader>
                <Button title='Add Faq' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
            </PageLayoutHeader>
            <DataTableContainer>
                <DataTableSearchContainer onTableSearch={(val) => setSearchQuery({ ...searchQuery, search: val })} />
                <DataTable loading={isLoading || isFetching}>
                    <DataTable.TH>
                        <DataTable.TR>
                            <DataTable.THD align="center">
                                {("S.No")}
                            </DataTable.THD>
                            {/* 
                            <DataTable.THD align="center">
                                {"Main Heading"}
                            </DataTable.THD> */}

                            <DataTable.THD align="center">
                                {"Question"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Answer"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Category"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Is Active"}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("Action")}
                            </DataTable.ActionCol>
                        </DataTable.TR>
                    </DataTable.TH>
                    {data && data.results?.length ? (
                        <DataTable.TB>
                            {data.results.map((el, index) => (
                                <DataTable.TR key={index}>
                                    <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                    {/* <DataTable.TCD align="center">{"Heading"}</DataTable.TCD> */}
                                    <DataTable.TCD align="center">{el.title}</DataTable.TCD>
                                    <DataTable.TCD align="center">
                                        {el.title_description}
                                    </DataTable.TCD>
                                    <DataTable.TCD align="center">{el?.category || '-'}</DataTable.TCD>
                                    <DataTable.TCD align="center">
                                        <Toggle
                                            initialState={el.is_active}
                                            onChange={() => { }}
                                            disabled={true}
                                        />
                                    </DataTable.TCD>
                                    <DataTable.TCD>
                                        <>
                                            <ActionButton>
                                                <ActionButton.EditIcon
                                                    onClick={() => handleModalOpen(el.id)}
                                                />
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
                    totalRecords={data ? data.count : 0}
                    onPageChange={(val) =>
                        setSearchQuery({ ...searchQuery, page: val })
                    }
                    onPageLimitChange={(val) =>
                        setSearchQuery({ ...searchQuery, page_size: val, page: 1 })
                    }
                />
            </DataTableContainer>
            <ModalForm
                isModalOpen={addModalOpen}
                closeModal={handleModalClose}
                title='Add Faq'
            >
                <FaqModalForm closeModal={handleModalClose} editId={editId} />
            </ModalForm>

            <ConfirmModal
                title="Delete FAQ Info"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
                varient='danger'
            />
        </>
    )
}

export default FaqList