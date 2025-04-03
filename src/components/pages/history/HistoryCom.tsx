'use client'

import ActionButton from '@/ui/button/ActionButton'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch'
import { DateInput, Form } from '@/ui/formInput/FormInput'
import { PageLayout } from '@/ui/layout/PageLayout'
import React from 'react'

const HistoryCom = () => {
    return (
        <section className='bg-blue-1 mx-16 my-8'>
            <div className='bg-blue-2'>
                <div className='flex flex-col md:flex-row gap-4  p-6'>
                    {/* <div>
                        <p className='text-xl text-green-3 font-medium py-2'>From</p>
                        <DateInput />
                    </div>
                    <div>
                        <p className='text-xl text-green-3 font-medium py-2'>To</p>
                        <DateInput />
                    </div> */}
                    <h1 className='text-xl font-bold md:text-2xl text-green-3'>View our history</h1>

                </div>
                <DataTableContainer >
                    <DataTableSearchContainer onTableSearch={() => { }} onExcel={() => { }} onPdf={() => { }} onPrint={() => { }}>
                        {/* <p className='text-xl text-green-3 font-medium py-2'>To</p> */}
                        {/* <div className='flex gap-3 items-center justify-center'>
                            <span>Date From</span>  <DateInput />
                            <span>Date To</span>  <DateInput />
                        </div> */}
                    </DataTableSearchContainer>
                    <DataTable loading={false} >
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
                                    {"Match Date"}
                                </DataTable.THD>

                                <DataTable.ActionCol align="center">
                                    {("Result")}
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
                                <DataTable.TCD align="center">
                                    {"Team 2"}
                                </DataTable.TCD>
                                <DataTable.TCD align="center">{"Match Date"}</DataTable.TCD>
                                <DataTable.TCD align="center">{"Location"}</DataTable.TCD>
                                <DataTable.TCD align='center'>
                                    {"Win"}
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
            </div>
        </section >

    )
}

export default HistoryCom