import { MainDiv } from './styles'
import Table from '../../components/table/Table'
import { toolsData } from '../../fakeData/tools'
import { toolsModel } from '../../config/table/toolsModel'

export default function Dashboard () {
  return (
    <MainDiv>
      <Table tableData={toolsData} columns={toolsModel} />
    </MainDiv>
  )
}
