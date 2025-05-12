'use client'
import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch';
import { PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import MatchModalForm from './MatchModalForm';
import { useDeleteMatchMutation, useFetchMatchesQuery } from '@/redux/features/other/predictionAndMatch/matchApi';
import Pagination from '@/ui/pagination/Pagination';
import { formatDate } from '@/utils/dateFormat/dateFormat';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import ConfirmModal from '@/ui/modal/ConfirmModal';

const MatchList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchMatchesQuery(searchQuery);
    const [deleteMatch] = useDeleteMatchMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteMatch(editId)
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
        <div className='text-left'>
            <PageLayoutHeader>
                <Button
                    title='Add Match'
                    secondary={true}
                    onClick={() => setAddModalOpen(true)}
                    width='fit'
                />
            </PageLayoutHeader>
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
                                {"Sport"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Team 1"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Team 2"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Location"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Date"}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("Action")}
                            </DataTable.ActionCol>
                        </DataTable.TR>
                    </DataTable.TH>
                    {data && data.results?.length ? (
                        <DataTable.TB>
                            {data.results.map((el, index) => (
                                <DataTable.TR key={el.id}>
                                    <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                    <DataTable.TCD align="center">{el.sport.name}</DataTable.TCD>
                                    <DataTable.TCD align="center">{el.team_1}</DataTable.TCD>
                                    <DataTable.TCD align="center">{el.team_2}</DataTable.TCD>
                                    <DataTable.TCD align="center">{el?.location || '-'} </DataTable.TCD>
                                    <DataTable.TCD align="center">{formatDate(el?.match_date)}</DataTable.TCD>
                                    <DataTable.TCD>
                                        <>
                                            <ActionButton>
                                                <ActionButton.EditIcon
                                                    onClick={() => handleModalOpen(el.id)}
                                                />
                                                <ActionButton.DeleteIcon
                                                    onClick={() => handleDeleteData(el.id)}

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
                title='Add Match'
            >
                <MatchModalForm closeModal={handleModalClose} editId={editId} />
            </ModalForm>

            <ConfirmModal
                title="Delete Match Info"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
                varient='danger'
            />
        </div>
    )
}

export default MatchList