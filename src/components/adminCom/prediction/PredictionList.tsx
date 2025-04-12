'use client'
import ActionButton from '@/ui/button/ActionButton';
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch';
import ModalForm from '@/ui/modal/ModalForm';
import React, { useState } from 'react'
import PredictionModalForm from './PredictionModalForm';
import { useFetchMatchesQuery } from '@/redux/features/other/predictionAndMatch/matchApi';
import Pagination from '@/ui/pagination/Pagination';
import { useFetchPredictionsQuery } from '@/redux/features/other/predictionAndMatch/predictionApi';

const PredictionList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchMatchesQuery(searchQuery);
    const { data: predictionData } = useFetchPredictionsQuery(searchQuery)

    const handleModalClose = () => {
        setAddModalOpen(false);
    };

    const getPredictionForMatch = (matchId: string | number) => {
        if (!predictionData || !predictionData.results) return null;
        return predictionData.results.find((pred) => pred.match === matchId) || null;
    };

    return (
        <div>
            {/* <PageLayoutHeader>
                <Button title='Add Prediction' secondary={true} onClick={() => setAddModalOpen(true)} />
            </PageLayoutHeader> */}
            <DataTableContainer>
                <DataTableSearchContainer onTableSearch={() => { }} />
                <DataTable loading={isLoading || isFetching}>
                    <DataTable.TH>
                        <DataTable.TR>
                            <DataTable.THD align="center">
                                {("S.No")}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Team 1"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Team 2"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Sport"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Winner?"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Prediction"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Result"}
                            </DataTable.THD>

                            <DataTable.ActionCol align="center">
                                {("Action")}
                            </DataTable.ActionCol>
                        </DataTable.TR>
                    </DataTable.TH>
                    {data && data.results.length ? (
                        <DataTable.TB>
                            {data.results.map((el, index) => {
                                const prediction = getPredictionForMatch(el.id);
                                return (
                                    <DataTable.TR key={el.id}>
                                        <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.team_1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.team_2}</DataTable.TCD>

                                        <DataTable.TCD align="center">{el.sport}</DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {prediction?.prediction_type || "-"} </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {prediction?.predicted_outcome || "-"}
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {prediction?.result || "-"}
                                        </DataTable.TCD>
                                        <DataTable.TCD>
                                            <>
                                                <ActionButton>
                                                    <ActionButton.AddIcon
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
                                )
                            }
                            )}
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
                title='Add Faq'
            >
                <PredictionModalForm closeModal={handleModalClose} />
            </ModalForm>
        </div>
    )
}

export default PredictionList