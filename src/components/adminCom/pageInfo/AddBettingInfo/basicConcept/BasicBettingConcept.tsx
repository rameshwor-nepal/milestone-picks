import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import { PageLayout, PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import BasicBettingConceptModalForm from './BasicBettingConceptModalForm';
import { useDeleteBettingConceptInfoMutation, useFetchBettingConceptInfoQuery } from '@/redux/features/other/bettingInfo/bettingConceptInfo/bettingConceptInfoApi';
import ConfirmModal from '@/ui/modal/ConfirmModal';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';

const BasicBettingConcept = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const { data: bettingConcepts, isFetching, isLoading } = useFetchBettingConceptInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    const [deleteInfo] = useDeleteBettingConceptInfoMutation()

    const handleDeleteData = (id: string) => {
        setEditId(id);
        setConfirmModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (editId) {
            await deleteInfo(editId)
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
                title='Betting Concept Section'
                subtitle='Add/Edit betting concept section'
            >

                <PageLayoutHeader>
                    <Button title='Add Betting concept' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
                </PageLayoutHeader>
                <DataTableContainer>
                    <DataTable loading={isLoading || isFetching}>
                        <DataTable.TH>
                            <DataTable.TR>
                                <DataTable.THD align="center">
                                    {("S.No")}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Concept Type / Title"}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Description"}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Example"}
                                </DataTable.THD>

                                <DataTable.THD align="center">
                                    {"Icon"}
                                </DataTable.THD>

                                <DataTable.ActionCol align="center">
                                    {("Action")}
                                </DataTable.ActionCol>
                            </DataTable.TR>
                        </DataTable.TH>
                        {bettingConcepts && bettingConcepts.results.length ? (
                            <DataTable.TB>
                                {bettingConcepts.results.map((el, index) => (
                                    <DataTable.TR key={el.id}>
                                        <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.concept_type}</DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el.description}
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">{el.example}</DataTable.TCD>

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
                title='Add Betting concept'
            >
                <BasicBettingConceptModalForm closeModal={handleModalClose} />
            </ModalForm>
            <ConfirmModal
                title="Delete Betting Concept"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
            />
        </>
    )
}

export default BasicBettingConcept