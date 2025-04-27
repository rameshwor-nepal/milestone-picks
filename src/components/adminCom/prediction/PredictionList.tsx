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

export interface MatchInfoI {
    team1: string;
    team2: string;
    id: string;
}
const PredictionList = () => {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [MatchInfo, setMatchInfo] = useState<MatchInfoI | null>(null)
    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data, isLoading, isFetching } = useFetchMatchesQuery(searchQuery);
    const { data: predictionData } = useFetchPredictionsQuery(searchQuery)

    const getPredictionForMatch = (matchId: string | number) => {
        if (!predictionData || !predictionData.results) return null;
        return predictionData.results.find((pred) => pred.match === matchId) || null;
    };

    const handleModalClose = () => {
        setAddModalOpen(false);
    };

    const handleAddIconClick = (id: string, team1: string, team2: string) => {
        setMatchInfo({
            team1: team1,
            team2: team2,
            id: id
        })
        setAddModalOpen(true);
    }

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
                                                    {
                                                        prediction == null ?
                                                            <ActionButton.AddIcon
                                                                onClick={() => handleAddIconClick(el.id, el.team_1, el.team_2)}
                                                            // disabled={
                                                            //   !canUpdateRecord({
                                                            //     status: el.status,
                                                            //     authRoles: roles,
                                                            //   })
                                                            // }
                                                            /> :
                                                            <ActionButton.EditIcon
                                                                onClick={() => { }}
                                                            />
                                                    }

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
                title='Add Prediction'
            >
                <PredictionModalForm closeModal={handleModalClose} matchInfo={MatchInfo as MatchInfoI} />
            </ModalForm>
        </div>
    )
}

export default PredictionList