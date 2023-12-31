import { MainDiv, TableDiv } from './styles'

import React from 'react'
import {
  type ColumnFiltersState,
  type ColumnDef,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { useSkipper } from './hook/hooks'
import Pagination from './pagination&others/Pagination'
import CustomTable from './columnOrder/CustomTable'
import ColumnView from './columnView/ColumnView'
import MenuOptions from './menuOptions/MenuOptions'
import RightMenuModal from '../modal/rightMenuModal/RightMenuModal'

interface tableType<T> {
  tableData: T[]
  tableColumns: Array<ColumnDef<T, any>>
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default function Table<T extends {}> ({ tableData, tableColumns }: tableType<T>) {
  const [showModal, setShowModal] = React.useState(false)
  const [data, setData] = React.useState(tableData)
  const [columns, setColumns] = React.useState(tableColumns)
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [autoResetPageIndex] = useSkipper()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    onColumnFiltersChange: setColumnFilters,
    autoResetPageIndex,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    // Provide our updateData function to our table meta
    state: {
      columnFilters,
      columnVisibility,
      rowSelection
    },
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  })

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  React.useEffect(() => {
    setData(tableData)
    setColumns(tableColumns)
  }, [tableData, tableColumns])

  return (
    <MainDiv>

      <MenuOptions table={table} showModal={showModal} setShowModal={setShowModal}/>

      {showModal &&
      <RightMenuModal showModal={showModal} setShowModal={setShowModal}> <ColumnView table={table}/> </RightMenuModal>
      }

      <TableDiv>
        <CustomTable table={table} />
      </TableDiv>

      <Pagination
          getSelectedRowModel={table.getSelectedRowModel}
          hasNextPage={table.getCanNextPage()}
          hasPreviousPage={table.getCanPreviousPage()}
          nextPage={table.nextPage}
          pageCount={table.getPageCount()}
          pageIndex={table.getState().pagination.pageIndex}
          pageSize={table.getState().pagination.pageSize}
          previousPage={table.previousPage}
          rowSelection={rowSelection}
          setPageIndex={table.setPageIndex}
          setPageSize={table.setPageSize}
          totalRows={table.getPrePaginationRowModel().rows.length}
        />
    </MainDiv>
  )
}
