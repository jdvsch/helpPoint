import React from 'react'

import { MainDiv, BodyDiv } from './styles'

import SaveMenu from '../../../components/navbar/saveMenu/SaveMenu'
import PrivateLeftMenu from '../../../components/navbar/privateLeftMenu/PrivateLeftMenu'
import GeneralInfo from '../buildings/GeneralInfo'
import CustomInfo from '../customInfo/CustomInfo'
import ThirdParties from '../thirdParties/ThirdParties'
import SparePartsAndSupplies from '../sparePartsAndSupplies/SparePartsAndSupplies'
import Historical from '../historical/Historical'
import Attachments from '../attachments/Attachments'

export default function Assets () {
  const [viewControl, setViewControl] = React.useState('GeneralInfo')
  return (
    <MainDiv>
      <SaveMenu/>
      <BodyDiv>
        <PrivateLeftMenu/>
        {viewControl === 'GeneralInfo' && <GeneralInfo/>}
        {viewControl === 'CustomInfo' && <CustomInfo/>}
        {viewControl === 'ThirdParties' && <ThirdParties/>}
        {viewControl === 'SparePartsAndSupplies' && <SparePartsAndSupplies/>}
        {viewControl === 'Historical' && <Historical/>}
        {viewControl === 'Attachments' && <Attachments/>}
      </BodyDiv>
    </MainDiv>
  )
}
