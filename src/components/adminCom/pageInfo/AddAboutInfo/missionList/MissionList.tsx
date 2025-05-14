import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import ImageViewer from '@/ui/ImageViewer/ImageViewer';
import { PageLayout, PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import MissionModalForm from './MissionModalForm';
import { useDeleteMissionInfoMutation, useFetchMissionInfoQuery } from '@/redux/features/other/aboutInfo/missionInfo/missionInfoApi';
import ConfirmModal from '@/ui/modal/ConfirmModal';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';

const MissionList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const { data: missionContent, isLoading, isFetching } = useFetchMissionInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    const [deleteMission] = useDeleteMissionInfoMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteMission(editId)
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

    const handleModalOpen = (id: string) => {
        setAddModalOpen(true)
        setEditId(id)
    }
    return (
        <>
            <PageLayout
                title='Misson Section'
                subtitle='Add/Edit misson section'
            >
                <PageLayoutHeader>
                    <Button title='Add Mission' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
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
                                    {"Description"}
                                </DataTable.THD>
                                <DataTable.THD align="center">
                                    {"Image"}
                                </DataTable.THD>

                                <DataTable.ActionCol align="center">
                                    {("Action")}
                                </DataTable.ActionCol>
                            </DataTable.TR>
                        </DataTable.TH>
                        {missionContent && missionContent.results?.length ? (
                            <DataTable.TB>
                                {missionContent.results.map((el, index) => (
                                    <DataTable.TR key={el.id}>
                                        <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.title}</DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el.description}
                                        </DataTable.TCD>
                                        <DataTable.TCD align='center'>
                                            <ImageViewer src={el?.image || ''} alt="" />
                                        </DataTable.TCD>
                                        <DataTable.TCD>
                                            <>
                                                <ActionButton>
                                                    <ActionButton.EditIcon
                                                        onClick={() => handleModalOpen(el.id.toLocaleString())}
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
                title='Add Faq'
            >
                <MissionModalForm closeModal={handleModalClose} editId={editId} />
            </ModalForm>

            <ConfirmModal
                title="Delete Betting Tips"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
            />
        </>
    )
}

export default MissionList