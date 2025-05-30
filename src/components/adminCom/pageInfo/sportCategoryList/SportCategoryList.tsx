'use client'
import ActionButton from '@/ui/button/ActionButton'
import Button from '@/ui/button/Button'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch'
import ImageViewer from '@/ui/ImageViewer/ImageViewer'
import { PageLayoutHeader } from '@/ui/layout/PageLayout'
import React, { useState } from 'react'
import SportCategoryModalForm from './SportCategoryModalForm'
import ModalForm from '@/ui/modal/ModalForm'

const SportCategoryList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

    const handleModalClose = () => {
        setAddModalOpen(false);
    };
    return (
        <>
            <PageLayoutHeader>
                <Button title='Add Sport Category' secondary={true} onClick={() => setAddModalOpen(true)} />
            </PageLayoutHeader>
            <DataTableContainer>
                <DataTableSearchContainer onTableSearch={() => { }} />
                <DataTable loading={false}>
                    <DataTable.TH>
                        <DataTable.TR>
                            <DataTable.THD align="center">
                                {("S.No")}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Title"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Name"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {("Image ")}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("Action")}
                            </DataTable.ActionCol>
                        </DataTable.TR>
                    </DataTable.TH>
                    {/* {records.results.length ? ( */}
                    <DataTable.TB>
                        {/* {records.results.map((el, index) => ( */}
                        <DataTable.TR >
                            <DataTable.TCD align="center">{1}</DataTable.TCD>
                            <DataTable.TCD align="center">{"Title"}</DataTable.TCD>
                            <DataTable.TCD align="center">
                                {"Name"}
                            </DataTable.TCD>

                            <DataTable.TCD>
                                {/* <img src="/using-laptop.jpeg" alt="" /> */}
                                <ImageViewer src="/using-laptop.jpeg" alt="" />
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
                        {/* // ))} */}
                    </DataTable.TB>
                    {/*  ) : ( 
                                <DataTable.EmptyBody span={11} />
                            {/*  )} */}
                </DataTable>
                {/* <Pagination
                  loading={false}
                  onPageLimitChange={() => { }}
                  onPageChange={() => { }}
                  totalRecords={0}
                /> */}
            </DataTableContainer>
            <ModalForm
                isModalOpen={addModalOpen}
                closeModal={handleModalClose}
                title='Add Sport Category'
            >
                <SportCategoryModalForm closeModal={handleModalClose} />
            </ModalForm>
        </>
    )
}

export default SportCategoryList