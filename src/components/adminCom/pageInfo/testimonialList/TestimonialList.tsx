'use client'
import ActionButton from '@/ui/button/ActionButton'
import Button from '@/ui/button/Button'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch'
import { PageLayoutHeader } from '@/ui/layout/PageLayout'
import React from 'react'

const TestimonialList = () => {
    return (
        <>
            <PageLayoutHeader>
                <Button title='Add hero section' secondary={true} />
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
                                {("Content Title")}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {("Content Detail ")}
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in inventore quaerat at esse illo impedit explicabo
                                reiciendis totam fugit maiores earum, quo voluptatem, nulla exercitationem beatae ex quae excepturi?
                            </DataTable.TCD>

                            <DataTable.TCD>
                                {/* <img src="/using-laptop.jpeg" alt="" /> */}
                            </DataTable.TCD>
                            <DataTable.TCD>
                                <>
                                    <ActionButton>
                                        <ActionButton.ViewIcon
                                        // onClick={() => navigate(`details/${el.id}`)}
                                        />

                                        <ActionButton.EditIcon
                                        // onClick={() => navigate(`update/${el.id}`)}
                                        // disabled={
                                        //   !canUpdateRecord({
                                        //     status: el.status,
                                        //     authRoles: roles,
                                        //   })
                                        // }
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
        </>
    )
}

export default TestimonialList