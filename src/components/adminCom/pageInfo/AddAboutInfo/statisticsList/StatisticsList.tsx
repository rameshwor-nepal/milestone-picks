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
import Pagination from '@/ui/pagination/Pagination';

const StatisticsList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });

    const { data: statData, isFetching, isLoading } = useFetchStatsInfoQuery(searchQuery)
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
                    <Pagination
                        loading={false}
                        totalRecords={statData ? statData.count : 0}
                        onPageChange={(val) =>
                            setSearchQuery({ ...searchQuery, page: val })
                        }
                        onPageLimitChange={(val) =>
                            setSearchQuery({ ...searchQuery, page_size: val, page: 1 })
                        }
                    />
                </DataTableContainer>

            </PageLayout>
            <ModalForm
                isModalOpen={addModalOpen}
                closeModal={handleModalClose}
                title='Add Statistics'
            >
                <StatisticsModalForm closeModal={handleModalClose} editId={editId} />
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