// data from API, delte this line on production mode
import { buildings, equipment, spareParts, tools, vehicles } from '../../../fakeAPIdata/assetTable'

import React from 'react'

import { MainDiv } from './styles'
import { language } from './language'

import Table from '../../../components/table/Table'

import { useAppSelector } from '../../../hooks/redux'
import { tableModel } from '../../../components/table/tabletSelectModel/TableModel'

export default function TableView () {
  const { authState } = useAppSelector(state => state)
  const tableColumnsLanguage = language[authState.globalStatus.language as keyof typeof language][authState.viewPageControl.tableDefaultToRender as keyof typeof language.English]
  const [tableData, setTableData] = React.useState([{}])
  const [tableColumns, setTableColumns] = React.useState<any[]>([])

  React.useEffect(() => {
    // aqui realizo la busqueda de los datos de la tabla
    switch (authState.viewPageControl.tableDefaultToRender) {
      case 'buildings':
        setTableData(buildings)
        setTableColumns([...tableModel, ...tableColumnsLanguage])
        break
      case 'equipment':
        setTableData(equipment)
        setTableColumns([...tableModel, ...tableColumnsLanguage])
        break
      case 'spare':
        setTableData(spareParts)
        setTableColumns([...tableModel, ...tableColumnsLanguage])
        break
      case 'tools':
        setTableData(tools)
        setTableColumns([...tableModel, ...tableColumnsLanguage])
        break
      default:
        setTableData(vehicles)
        setTableColumns([...tableModel, ...tableColumnsLanguage])
    }
  }, [authState.viewPageControl.tableDefaultToRender])

  return (
  <MainDiv>
    {tableData.length > 0 && tableColumns.length > 0 &&
    <Table tableData={tableData} tableColumns={tableColumns} />
    }
  </MainDiv>
  )
}
