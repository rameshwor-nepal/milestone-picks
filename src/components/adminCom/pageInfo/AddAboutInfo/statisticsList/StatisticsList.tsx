import ActionButton from '@/ui/button/ActionButton';
import Button from '@/ui/button/Button';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import ImageViewer from '@/ui/ImageViewer/ImageViewer';
import { PageLayout, PageLayoutHeader } from '@/ui/layout/PageLayout';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import StatisticsModalForm from './StatisticsModalForm';

const StatisticsList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

    const handleModalClose = () => {
        setAddModalOpen(false);
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
                    <DataTable loading={false}>
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
                        {/* {records.results.length ? ( */}
                        <DataTable.TB>
                            {/* {records.results.map((el, index) => ( */}
                            <DataTable.TR >
                                <DataTable.TCD align="center">{1}</DataTable.TCD>
                                <DataTable.TCD align="center">{"Description"}</DataTable.TCD>
                                <DataTable.TCD align="center">7+
                                </DataTable.TCD>
                                <DataTable.TCD align='center'>
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

            </PageLayout>
            <ModalForm
                isModalOpen={addModalOpen}
                closeModal={handleModalClose}
                title='Add Statistics'
            >
                <StatisticsModalForm closeModal={handleModalClose} />
            </ModalForm>
        </>
    )
}

export default StatisticsList