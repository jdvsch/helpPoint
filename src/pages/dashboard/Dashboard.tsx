// import { MainDiv } from './styles'
// import { useAppDispatch } from '../../hooks/redux'
// import { useEffect } from 'react'
import Table from '../../components/table/Table'
import { toolsData } from '../../fakeData/tools'
import { toolsModel } from '../../config/table/toolsModel'

export default function Dashboard () {
  // const dispatch = useAppDispatch()
  // useEffect(() => {

  // }, [])

  return (
  // <Table />
     <Table tableData={toolsData} columns={toolsModel} />
  )
}
