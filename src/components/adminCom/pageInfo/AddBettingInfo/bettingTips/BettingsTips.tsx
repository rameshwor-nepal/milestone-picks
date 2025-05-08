import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import ImageViewer from '@/ui/ImageViewer/ImageViewer';
import { PageLayout, PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import BettingTipsModalForm from './BettingTipsModalForm';
import { useDeleteBettingTipsInfoMutation, useFetchBettingTipsInfoQuery } from '@/redux/features/other/bettingInfo/bettingTipsInfo/bettingTipsApi';
import { toast } from 'react-toastify';
import { ToastError } from '@/utils/toast/ToastError';
import ConfirmModal from '@/ui/modal/ConfirmModal';

const BettingsTips = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const { data: bettingTips, isLoading, isFetching } = useFetchBettingTipsInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    const [deleteBettingTips] = useDeleteBettingTipsInfoMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteBettingTips(editId)
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
        setAddModalOpen(false);
        setConfirmModalOpen(false);
        setEditId(null);
    };

    return (
        <>
            <PageLayout
                title='Betting Tips Section'
                subtitle='Add/Edit betting tips section'
            >
                <PageLayoutHeader>
                    <Button title='Add Betting tips' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
                </PageLayoutHeader>
                <DataTableContainer>
                    <DataTable loading={isFetching || isLoading}>
                        <DataTable.TH>
                            <DataTable.TR>
                                <DataTable.THD align="center">
                                    {("S.No")}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Title"}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Content"}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Image"}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Order"}
                                </DataTable.THD>

                                <DataTable.ActionCol align="center">
                                    {("Action")}
                                </DataTable.ActionCol>
                            </DataTable.TR>
                        </DataTable.TH>
                        {bettingTips && bettingTips.results?.length > 0 ? (
                            <DataTable.TB>
                                {bettingTips.results.map((el, index) => (
                                    <DataTable.TR key={index}>
                                        <DataTable.TCD align="center">
                                            {index + 1}
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el?.title}
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el.content}
                                        </DataTable.TCD>

                                        <DataTable.TCD align='center'>
                                            <ImageViewer src={el?.image || ''} alt="" />
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el?.order || '-'}
                                        </DataTable.TCD>
                                        <DataTable.TCD>
                                            <>
                                                <ActionButton>
                                                    <ActionButton.EditIcon
                                                    // onClick={() => navigate(`update/${el.id}`)}
                                                    // disabled={
                                                    //   !canUpdateRecord({
                                                    //     status: el.status,
                                                    //     authRoles: roles,
                                                    //   })
                                                    // }
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
                    {/* <Pagination
                  loading={false}
                  onPageLimitChange={() => { }}
                  onPageChange={() => { }}
                  totalRecords={0}
                /> */}
                </DataTableContainer>

            </PageLayout>
            <ModalForm
                isModalOpen={addModalOpen}
                closeModal={handleModalClose}
                title='Add Betting tips'
            >
                <BettingTipsModalForm closeModal={handleModalClose} />
            </ModalForm>
            <ConfirmModal
                title="Delete Betting Tips"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
                varient='danger'
            />
        </>
    )
}

export default BettingsTips