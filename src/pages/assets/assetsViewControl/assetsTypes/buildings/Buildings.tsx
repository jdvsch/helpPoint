import React from 'react'
import { MainDiv, Header, HeaderInpunts, Row } from './styles'
import { language } from './language'
import QrCode from '../../../../../components/qrCode/QrCode'

import TextValidator from '../../../../../components/inputs/textValidator/TextValidator'
import Select from '../../../../../components/inputs/select/Select'
import Text from '../../../../../components/inputs/text/Text'
import TextArea from '../../../../../components/inputs/textarea/TextArea'

import { useAppSelector } from '../../../../../hooks/redux'

export default function Buildings ({ register }: any) {
  const { authState } = useAppSelector(state => state)
  const [isCodeUnique, setIsCodeUnique] = React.useState(false)
  const idiom = language[authState.globalStatus.language as keyof typeof language]

  return (
    <MainDiv>
      <Header>
        <QrCode />
        <HeaderInpunts>
          <TextValidator {...{
            API: 'building',
            Placeholder: idiom.id_placeholder,
            Register: register('id'),
            setIsCodeUnique
          }} />
          <Select {...{
            Register: register('isActive'),
            Placeholder: idiom.select_placeholder,
            // // Error: errors.name?.message,
            selectOptions: idiom.select_options
          }}/>
        </HeaderInpunts>
      </Header>

      <Row>
        <Text {...{
          Register: register('country'),
          Placeholder: idiom.country
          // Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('state'),
          Placeholder: idiom.state
          // Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('city'),
          Placeholder: idiom.city
          // Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('address'),
          Placeholder: idiom.address
          // Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('zipCode'),
          Placeholder: idiom.zipCode
          // Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('type'),
          Placeholder: idiom.type
          // Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('group1'),
          Placeholder: idiom.group1
          // Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('group2'),
          Placeholder: idiom.group2
          // Error: errors.name?.message
        }} />
      </Row>

      <Row>
        <Text {...{
          Register: register('budgetDescription'),
          Placeholder: idiom.budgetDescription
          // Error: errors.name?.message
        }} />

        <Text {...{
          Register: register('maintenancePlan'),
          Placeholder: idiom.maintenancePlan
          // Error: errors.name?.message
        }} />
      </Row>

      <TextArea {...{
        Register: register('note'),
        Placeholder: idiom.note
        // Error: errors.note?.message
      }} />

    </MainDiv>
  )
}
