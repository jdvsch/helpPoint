// develoment tool
import { DevTool } from '@hookform/devtools'

import React from 'react'

import { MainDiv, BodyDiv } from './styles'

import { useAppSelector } from '../../../hooks/redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import PrivateLeftMenu from '../../../components/navbar/privateLeftMenu/PrivateLeftMenu'
import Buildings from './assetsTypes/buildings/Buildings'
import TableView from '../tableView/TableView'

export interface FormValues {
  id?: string
  isActive: number
  country: string
  state: string
  city: string
  address: string
  zipCode: string
  type: string
  group1: string
  group2: string
  budgetDescription: string
  maintenancePlan: string
  note: string
}

export default function ViewControl () {
  const schema = yup.object({
    isActive: yup.number(),
    id: yup.string().required(),
    name: yup.string(),
    maker: yup.string(),
    model: yup.string(),
    serial: yup.string(),
    purchase_date: yup.string(),
    warranty_due_date: yup.string(),
    priority: yup.number(),
    note: yup.string()
  }).required()

  const { register, handleSubmit, formState: { errors, isDirty }, control } = useForm({
    // defaultValues: infoInputs.defaultGeneralAssetsInputs,
    mode: 'all',
    resolver: yupResolver(schema)
  })

  const onSubmit = (formInfo: FormValues): void => {
    console.log(formInfo)
  }

  const [viewControl, setViewControl] = React.useState('general')
  const { authState } = useAppSelector(state => state)
  const viewController = authState.viewPageControl.tableDefaultToRender
  const selectPageToRender = {
    tableView: TableView,
    buildings: Buildings
  }
  const PageToRender = selectPageToRender[viewController as keyof typeof selectPageToRender]

  return (
    <>
    {viewController === 'tableView'
      ? <TableView />
      : <MainDiv>
          {/* <SaveMenu /> */}
          <BodyDiv>
            <PrivateLeftMenu />
            <form onSubmit={handleSubmit(onSubmit)}>
            {viewControl === 'general' && <PageToRender register={register}/>}
            {viewControl === 'customForm' && <CustomInfo register={register}/>}
            {viewControl === 'thirdParties' && <ThirdParties register={register}/>}
            {viewControl === 'spareParts' && <SparePartsAndSupplies register={register}/>}
            {viewControl === 'historical' && <Historical register={register}/>}
            {viewControl === 'attachments' && <Attachments register={register}/>}
            </form>
          </BodyDiv>
          <DevTool control={control}/>
        </MainDiv>
    }
    </>
  )
}
