import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import { PageLayout, PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import FeatureModalForm from './FeatureModalForm';
import { useDeleteFeatureInfoMutation, useFetchFeatureInfoQuery } from '@/redux/features/other/aboutInfo/featureInfo/featureInfoApi';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import ConfirmModal from '@/ui/modal/ConfirmModal';

const FeatureList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null)
    const { data: featureData, isFetching, isLoading } = useFetchFeatureInfoQuery({
        search: '',
        page: 1,
        page_size: 10
    })
    const [deleteFeature] = useDeleteFeatureInfoMutation()

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
                title='Feature (Why Choose Us) Section'
                subtitle='Add/Edit feature section'
            >

                <PageLayoutHeader>
                    <Button title='Add Feature' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
                </PageLayoutHeader>
                <DataTableContainer>
                    <DataTable loading={isLoading || isFetching}>
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
                                    {"Icon"}
                                </DataTable.THD>

                                <DataTable.ActionCol align="center">
                                    {("Action")}
                                </DataTable.ActionCol>
                            </DataTable.TR>
                        </DataTable.TH>
                        {featureData && featureData.results.length ? (
                            <DataTable.TB>
                                {featureData.results.map((el, index) => (
                                    <DataTable.TR key={index}>
                                        <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.title}</DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el.description}
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
                title='Add Feature'
            >
                <FeatureModalForm closeModal={handleModalClose} editId={editId} />
            </ModalForm>

            <ConfirmModal
                title="Delete Feature info"
                info="Are you sure you want to delete this record?"
                isModalOpen={confirmModalOpen}
                onConfirm={() => handleDeleteConfirm()}
                closeModal={handleModalClose}
            />
        </>
    )
}

export default FeatureList