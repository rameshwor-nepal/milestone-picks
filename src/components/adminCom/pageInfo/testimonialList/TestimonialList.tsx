'use client'
import ActionButton from '@/ui/button/ActionButton'
import Button from '@/ui/button/Button'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch'
import ImageViewer from '@/ui/ImageViewer/ImageViewer'
import { PageLayoutHeader } from '@/ui/layout/PageLayout'
import React, { useState } from 'react'
import TestimonialModalForm from './TestimonialModalForm'
import ModalForm from '@/ui/modal/ModalForm'
import { useDeleteTestimonialsContentMutation, useFetchTestimonialsContentQuery } from '@/redux/features/other/testimonials/testimonialsApi'
import { toast } from 'react-toastify'
import ConfirmModal from '@/ui/modal/ConfirmModal'
import Pagination from '@/ui/pagination/Pagination'
import { ToastError } from '@/utils/toast/ToastError'

const TestimonialList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchTestimonialsContentQuery(searchQuery)
    const [deleteTestimonial] = useDeleteTestimonialsContentMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteTestimonial(editId)
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
                <Button title='Add Testimonial' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
            </PageLayoutHeader>
            <DataTableContainer>
                <DataTableSearchContainer onTableSearch={() => { }} />
                <DataTable loading={isLoading || isFetching}>
                    <DataTable.TH>
                        <DataTable.TR>
                            <DataTable.THD align="center">
                                {("S.No")}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Name"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Role"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Description"}
                            </DataTable.THD>
                            <DataTable.THD align="center">
                                {"Image"}
                            </DataTable.THD>
                            <DataTable.THD align="center">
                                {"Rating"}
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
                                    <DataTable.TCD align="center">{el.name}</DataTable.TCD>
                                    <DataTable.TCD align="center">{el.role}</DataTable.TCD>
                                    <DataTable.TCD align="center">
                                        {el.description}
                                    </DataTable.TCD>

                                    <DataTable.TCD align='center'>
                                        {/* <img src="/using-laptop.jpeg" alt="" /> */}
                                        <ImageViewer src={el.image ? el.image : "/using-laptop.jpeg"} alt="testimonials" />
                                    </DataTable.TCD>
                                    <DataTable.TCD align="center">{el.star_rating}</DataTable.TCD>
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
                title='Add Testimonial'
            >
                <TestimonialModalForm closeModal={handleModalClose} editId={editId} />
            </ModalForm>
            <ConfirmModal
                title="Delete Testimonials"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
                varient='danger'
            />
        </>
    )
}

export default TestimonialList