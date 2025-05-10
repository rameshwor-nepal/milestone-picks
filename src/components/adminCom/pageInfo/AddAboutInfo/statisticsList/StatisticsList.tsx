import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import { PageLayout, PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import StatisticsModalForm from './StatisticsModalForm';
import { useDeleteStatsInfoMutation, useFetchStatsInfoQuery } from '@/redux/features/other/aboutInfo/statsInfo/statsInfoApi';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import ConfirmModal from '@/ui/modal/ConfirmModal';

const StatisticsList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const { data: statData, isFetching, isLoading } = useFetchStatsInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    const [deleteFeature] = useDeleteStatsInfoMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteFeature(editId)
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
                title='Statistics Section'
                subtitle='Add/Edit Statistics'
            >

                <PageLayoutHeader>
                    <Button title='Add Stats' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
                </PageLayoutHeader>
                <DataTableContainer>
                    <DataTable loading={isLoading || isFetching}>
                        <DataTable.TH>
                            <DataTable.TR>
                                <DataTable.THD align="center">
                                    {("S.No")}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Description"}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Count"}
                                </DataTable.THD>
                                <DataTable.THD align="center">
                                    {"Icon"}
                                </DataTable.THD>

                                <DataTable.ActionCol align="center">
                                    {("Action")}
                                </DataTable.ActionCol>
                            </DataTable.TR>
                        </DataTable.TH>
                        {statData && statData.results.length ? (
                            <DataTable.TB>
                                {statData.results.map((el, index) => (
                                    <DataTable.TR key={index}>
                                        <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.description}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.number}
                                        </DataTable.TCD>
                                        <DataTable.TCD align='center'>
                                            <span className='text-2xl'>
                                                <i className={`fa ${el.icon}`}></i>
                                            </span>
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
                title='Add Statistics'
            >
                <StatisticsModalForm closeModal={handleModalClose} />
            </ModalForm>
            <ConfirmModal
                title="Delete Stat info"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
            />
        </>
    )
}

export default StatisticsList