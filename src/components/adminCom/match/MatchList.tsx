'use client'
import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch';
import { PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import MatchModalForm from './MatchModalForm';

const MatchList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

    const handleModalClose = () => {
        setAddModalOpen(false);
    };
    return (
        <div>
            <PageLayoutHeader>
                <Button title='Add Match' secondary={true} onClick={() => setAddModalOpen(true)} />
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
                                {"Result"}
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
                            <DataTable.TCD align="center">{"Sport"}</DataTable.TCD>
                            <DataTable.TCD align="center">{"Team 1"}</DataTable.TCD>
                            <DataTable.TCD align="center">{"Team 2"}</DataTable.TCD>
                            <DataTable.TCD align="center">{"Location"} </DataTable.TCD>
                            <DataTable.TCD align="center">{"Result"}</DataTable.TCD>
                            <DataTable.TCD>
                                <>
                                    <ActionButton>
                                        <ActionButton.EditIcon
                                            onClick={() => { }}
                                        // disabled={
                                        //   !canUpdateRecord({
                                        //     status: el.status,
                                        //     authRoles: roles,
                                        //   })
                                        // }
                                        />
                                        <ActionButton.DeleteIcon
                                            onClick={() => { }}
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
                title='Add Match'
            >
                <MatchModalForm closeModal={handleModalClose} />
            </ModalForm>
        </div>
    )
}

export default MatchList