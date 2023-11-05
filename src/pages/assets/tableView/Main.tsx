// fakeAPI
import { equipment } from '../../../fakeAPIdata/assetTable'

import { MainDiv } from './styles'

import Table from '../../../components/table/Table'
import { equipmentModel } from '../../../config/tableColumns/allAssets/equipment'

export default function Main () {
  return (
  <MainDiv>
    <Table tableData={equipment} columns={equipmentModel} />
  </MainDiv>
  )
}
