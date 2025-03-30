'use client'
import ActionButton from '@/ui/button/ActionButton'
import Button from '@/ui/button/Button'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch'
import ImageViewer from '@/ui/ImageViewer/ImageViewer'
import { PageLayoutHeader } from '@/ui/layout/PageLayout'
import ModalForm from '@/ui/modal/ModalForm'
import React, { useState } from 'react'
import FaqModalForm from './FaqModalForm'

const FaqList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

    const handleModalClose = () => {
        setAddModalOpen(false);
    };
    return (
        <>
            <PageLayoutHeader>
                <Button title='Add Faq' secondary={true} onClick={() => setAddModalOpen(true)} />
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
                                {"Main Heading"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Title"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Description"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Category"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Is Active"}
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
                            <DataTable.TCD align="center">{"Heading"}</DataTable.TCD>
                            <DataTable.TCD align="center">{"Title"}</DataTable.TCD>
                            <DataTable.TCD align="center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in inventore quaerat at esse illo impedit explicabo
                                reiciendis totam fugit maiores earum, quo voluptatem, nulla exercitationem beatae ex quae excepturi?
                            </DataTable.TCD>
                            <DataTable.TCD align="center">{"Category"}</DataTable.TCD>
                            <DataTable.TCD align="center">{"Is active"}</DataTable.TCD>
                            <DataTable.TCD>
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
                title='Add Faq'
            >
                <FaqModalForm closeModal={handleModalClose} />
            </ModalForm>
        </>
    )
}

export default FaqList