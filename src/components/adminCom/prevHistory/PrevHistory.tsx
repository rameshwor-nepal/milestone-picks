'use client'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable';
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch';
import React, { useState } from 'react'
import Pagination from '@/ui/pagination/Pagination';
import { useFetchPredictionsQuery } from '@/redux/features/other/predictionAndMatch/predictionApi';

const PrevHistory = () => {

    const [searchQuery, setSearchQuery] = useState<SearchFieldI>({
        search: '',
        page: 1,
        page_size: 10
    });
    const { data: predictionData, isLoading, isFetching } = useFetchPredictionsQuery(searchQuery)

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
                                {"Prediction Outcome"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Our Prediction"}
                            </DataTable.THD>

                            <DataTable.THD align="center">
                                {"Result"}
                            </DataTable.THD>

                        </DataTable.TR>
                    </DataTable.TH>
                    {predictionData && predictionData.results.length ? (
                        <DataTable.TB>
                            {predictionData.results.map((el, index) => {
                                return (
                                    <DataTable.TR key={el.id}>
                                        <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.match_detail?.team_1 || '-'}</DataTable.TCD>
                                        <DataTable.TCD align="center">{el.match_detail?.team_2 || ''}</DataTable.TCD>

                                        <DataTable.TCD align="center">{el.match_detail?.sport?.name || ''}</DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el?.predicted_outcome || "-"} </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el?.our_prediction || "-"}
                                        </DataTable.TCD>
                                        <DataTable.TCD align="center">
                                            {el?.result || "-"}
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
                    totalRecords={predictionData ? predictionData.count : 0}
                    onPageChange={(val) =>
                        setSearchQuery({ ...searchQuery, page: val })
                    }
                    onPageLimitChange={(val) =>
                        setSearchQuery({ ...searchQuery, page_size: val, page: 1 })
                    }
                />
            </DataTableContainer>
        </div>
    )
}

export default PrevHistory