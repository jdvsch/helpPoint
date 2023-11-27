import React from 'react'
import { MainDiv, Header, HeaderInpunts, Row } from './styles'
import { language } from './language'
import QrCode from '../../../components/qrCode/QrCode'

import TextValidator from '../../../components/inputs/textValidator/TextValidator'
import Select from '../../../components/inputs/select/Select'
import Text from '../../../components/inputs/text/Text'
import TextArea from '../../../components/inputs/textarea/TextArea'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAppSelector } from '../../../hooks/redux'

export default function GeneralInfo () {
  const { authState } = useAppSelector(state => state)
  const [isCodeUnique, setIsCodeUnique] = React.useState(false)
  const idiom = language[authState.globalStatus.language as keyof typeof language]

  const schema = yup.object({
    isActive: yup.string(),
    code: yup.string().required(),
    name: yup.string(),
    maker: yup.string(),
    model: yup.string(),
    serial: yup.string(),
    purchase_date: yup.string(),
    warranty_due_date: yup.string(),
    priority: yup.number(),
    note: yup.string()
  }).required()

  const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
    // defaultValues: infoInputs.defaultGeneralAssetsInputs,
    mode: 'all',
    resolver: yupResolver(schema)
  })
  return (
    <MainDiv>
      <Header>
        <QrCode />
        <HeaderInpunts>
          <TextValidator {...{
            API: 'building',
            Placeholder: idiom.id_placeholder,
            Register: register('code'),
            setIsCodeUnique
          }} />
          <Select {...{
            Register: register('isActive'),
            Placeholder: idiom.select_placeholder,
            Error: errors.isActive?.message,
            selectOptions: idiom.select_options
          }}/>
        </HeaderInpunts>
      </Header>

      <Row>
        <Text {...{
          Register: register('name'),
          Placeholder: idiom.country,
          Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('name'),
          Placeholder: idiom.state,
          Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('name'),
          Placeholder: idiom.city,
          Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('name'),
          Placeholder: idiom.address,
          Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('name'),
          Placeholder: idiom.zipCode,
          Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('name'),
          Placeholder: idiom.type,
          Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('name'),
          Placeholder: idiom.group1,
          Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('name'),
          Placeholder: idiom.group2,
          Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('name'),
          Placeholder: idiom.budgetDescription,
          Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('name'),
          Placeholder: idiom.maintenancePlan,
          Error: errors.name?.message
        }} />
      </Row>

      <TextArea {...{
        Register: register('note'),
        Placeholder: idiom.note,
        Error: errors.note?.message
      }} />

    </MainDiv>
  )
}
