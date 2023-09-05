import { MainDiv, DivInfoTag, DivTable } from './styles'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { LANGUAGE } from '../../config/constants/language/privatePages/allAssets'


import React from 'react'
import InfoTag from '../../components/infoTag/InfoTag'
import TableWithAllFunctions from '../../components/tableWithAllFunctions/TableWithAllFunctions'

// datos desde la API
import { defaultDataUno } from '../../config/constants/table/tableData'
import { columns } from '../../config/constants/table/tableRow'

export default function AllAssets () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const tongue = authState.pageStatus.language
  const tagText = LANGUAGE[tongue].tagText
  const rightMenu = LANGUAGE[tongue].privateRightbar

  React.useEffect(() => {

  }, [])

  return (
    <MainDiv>
      <DivInfoTag>
      {tagText.map((subData, index) => (
        <InfoTag key={index} data={subData}/>))
      }
      </DivInfoTag>

      <DivTable>
        <TableWithAllFunctions tableData={defaultDataUno} tableColumns={columns} />
      </DivTable>
    </MainDiv>
  )
}
