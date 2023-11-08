// fakeAPI
import { buildings, equipment, tools, spareparts, vehicles } from '../../../fakeAPIdata/assetTable'

import { MainDiv } from './styles'

import Table from '../../../components/table/Table'
import { useAppSelector } from '../../../hooks/redux'
import { equipmentEnModel, equipmentEsModel, aaa } from './TableModel_'

export default function Main () {
  return (
  <MainDiv>
    <Table tableData={equipment} tableColumns={equipmentEnModel} />
  </MainDiv>
  )
}
