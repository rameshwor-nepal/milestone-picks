'use client'
import React, { useState } from 'react'
import SportModalForm from './SportModalForm';
import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch';
import ImageViewer from '@/ui/ImageViewer/ImageViewer';
import { PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import { useFetchSportsQuery } from '@/redux/features/other/predictionAndMatch/sportApi';
import Pagination from '@/ui/pagination/Pagination';

const SportList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchSportsQuery(searchQuery);

    const handleModalClose = () => {
        setAddModalOpen(false);
    };
    return (
        <div>
            <PageLayoutHeader>
                <Button title='Add Sport Category' secondary={true} onClick={() => setAddModalOpen(true)} width='fit' />
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
                                {"Title"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {("Image ")}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("Action")}
                            </DataTable.ActionCol>
                        </DataTable.TR>
                    </DataTable.TH>
                    {data && data.results.length ? (
                        <DataTable.TB>
                            {data.results.map((el, index) => (
                                <DataTable.TR key={el.id}>
                                    <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                    <DataTable.TCD align="center">{el.name}</DataTable.TCD>

                                    <DataTable.TCD align='center'>
                                        {/* <img src="/using-laptop.jpeg" alt="" /> */}
                                        <ImageViewer src={el.icon} alt="" />
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
                                                // onClick={() => navigate(`details/${el.id}`)}
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
                title='Add Sport Category'
            >
                <SportModalForm closeModal={handleModalClose} />
            </ModalForm>
        </div>
    )
}

export default SportList