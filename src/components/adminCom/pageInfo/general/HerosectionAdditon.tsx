'use client'
import ActionButton from '@/ui/button/ActionButton'
import Button from '@/ui/button/Button'
import DataTable, { DataTableContainer } from '@/ui/DataTable/DataTable'
import DataTableSearchContainer from '@/ui/DataTable/DataTableSearch'
import { PageLayoutHeader } from '@/ui/layout/PageLayout'
import ModalForm from '@/ui/modal/ModalForm'
import React, { useState } from 'react'
import HeroSectionAdditionModalForm from './HeroSectionAdditionModalForm'
import { useFetchHeroSectionQuery } from '@/redux/features/other/generalInfo/generalInfoApi'
import ImageViewer from '@/ui/ImageViewer/ImageViewer'

const HerosectionAdditon = () => {
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const { data, isLoading, isFetching } = useFetchHeroSectionQuery({ search: '', page: 1, page_size: 10 });

  const handleModalClose = () => {
    setAddModalOpen(false);
  };
  return (
    <>
      <PageLayoutHeader>
        <Button title='Add hero section' secondary={true} onClick={() => setAddModalOpen(true)} />
      </PageLayoutHeader>
      <DataTableContainer>
        <DataTableSearchContainer onTableSearch={() => { }} />
        <DataTable loading={isLoading || isFetching}>
          <DataTable.TH>
            <DataTable.TR>
              <DataTable.THD align="center">
                {("S.No")}
              </DataTable.THD>

              <DataTable.THD align="center">
                {("Title")}
              </DataTable.THD>

              <DataTable.THD align="center">
                {("Sub Title")}
              </DataTable.THD>

              <DataTable.THD align="center">
                {("Image ")}
              </DataTable.THD>

              <DataTable.ActionCol align="center">
                {("Action")}
              </DataTable.ActionCol>
            </DataTable.TR>
          </DataTable.TH>
          {data && data.results && data.results.length > 0 ? (
            <DataTable.TB>
              {data.results.map((el, index) => (
                <DataTable.TR key={index}>
                  <DataTable.TCD align="center">{index + 1}</DataTable.TCD>
                  <DataTable.TCD align="center">{el.title}</DataTable.TCD>
                  <DataTable.TCD align="center">
                    {el.subtitle}
                  </DataTable.TCD>

                  <DataTable.TCD align='center'>
                    <ImageViewer src={el.image} alt='hero-section-image' />
                    {/* <img src={el.image} alt="" height={180} width={300} /> */}
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
        title='Add Hero Section'
      >
        <HeroSectionAdditionModalForm closeModal={handleModalClose} />
      </ModalForm>
    </>

  )
}

export default HerosectionAdditon