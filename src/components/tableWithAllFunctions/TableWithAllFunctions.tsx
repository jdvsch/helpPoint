import React, { type HTMLProps } from 'react'
import {
  Main,
  Resizer,
  Tables,
  Th,
  Tr,
  Td,
  TrTd,
  Topmenu,
  MenuOptions,
  Button,
  Submenu,
  Label,
  Pagination,
  Arrows,
  Span,
  Input,
  Goto,
  Select,
  TableHeader
} from './styles'
import {
  type Column,
  type Table,
  type ColumnDef,
  type SortingState,
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type ColumnResizeMode
} from '@tanstack/react-table'
import { RiFileExcel2Fill, RiTableFill } from 'react-icons/ri'
import {
  TbSquareRoundedChevronsLeftFilled,
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronsRightFilled,
  TbSquareRoundedChevronRightFilled
} from 'react-icons/tb'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { LANGUAGE } from '../../config/constants/language/components/tableWithAllFunctions'
import { lightTheme, darkTheme } from '../../styles/themes'
import { ExcelOutput } from './subMenu/Excel'
import { setModal } from '../../redux/slices/authState'

interface Id {
  id: number | string
}

const selectColumn: Array<ColumnDef<Id>> = [
  {
    id: 'select',
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }}
      />
    ),
    cell: ({ row }) => (
      <div>
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }}
        />
      </div>
    )
  }
]

interface ThemesMode {
  bg: string
  bgAlpha: string
  bg2: string
  bg3: string
  text: string
  primary: string
}

interface TableData {
  tableData: any
  tableColumns: any
}

export default function TableWithAllFunctions ({ tableData, tableColumns }: TableData) {
  const dispatch = useAppDispatch()
  const { authState } = useAppSelector((state) => state)
  const tongue = authState.pageStatus.language
  const tableTag = LANGUAGE[tongue].TableWithAllFunctions
  const color = authState.pageStatus.theme
  let themeMode: ThemesMode
  color === 'light' ? (themeMode = lightTheme) : (themeMode = darkTheme)

  const columns = [...selectColumn, ...tableColumns]
  const [data] = React.useState(() => [...tableData])
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnResizeMode] = React.useState<ColumnResizeMode>('onEnd')
  const [showColumnSelector, setShowColumnSelector] = React.useState(false)

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    },
    onSortingChange: setSorting
  })

  const exportDataExcel = () => {
    if (table.getSelectedRowModel().flatRows.length === 0) {
      dispatch(setModal({
        initialState: true,
        type: 'warning',
        message: tableTag.Warninig
      }))
      return
    }

    const RowData: Array<{}> = []
    table.getSelectedRowModel().flatRows.map((data) => {
      RowData.push(data.original)
    })

    ExcelOutput(tableColumns, RowData, 'Assets')
  }

  return (
    <Main>
      <Topmenu>
        <MenuOptions>
          <div>
            <Button fSize={'22px'} Color={'green'} onClick={exportDataExcel}>
              <RiFileExcel2Fill />
            </Button>

            <Button
              fSize={'22px'}
              Color={'blue'}
              onClick={() => { setShowColumnSelector(!showColumnSelector) }}
            >
              <RiTableFill />
            </Button>
          </div>

          <div>
            {/* COLUMN VISIBILITY */}
            {showColumnSelector && (
              <Label bgColor={themeMode.primary} Color={themeMode.bg}>
                <input
                  {...{
                    type: 'checkbox',
                    checked: table.getIsAllColumnsVisible(),
                    onChange: table.getToggleAllColumnsVisibilityHandler()
                  }}
                />{' '}
                {tableTag.ToggleAll}
              </Label>
            )}
          </div>

          {showColumnSelector && (
            <Submenu>
              {table.getAllLeafColumns().map((column) => {
                if (column.id !== 'select') {
                  return (
                    <div key={column.id}>
                      <Label bgColor={themeMode.bg} Color={themeMode.text}>
                        <input
                          {...{
                            type: 'checkbox',
                            checked: column.getIsVisible(),
                            onChange: column.getToggleVisibilityHandler()
                          }}
                        />
                        {'   '}
                        {column.id}
                      </Label>
                    </div>
                  )
                }
              })}
            </Submenu>
          )}
        </MenuOptions>

        <Pagination>
          <Arrows>
            <Button
              Color={lightTheme.primary}
              onClick={() => { table.setPageIndex(0) }}
              disabled={!table.getCanPreviousPage()}
            >
              <TbSquareRoundedChevronsLeftFilled />
            </Button>

            <Button
              Color={lightTheme.text}
              onClick={() => { table.previousPage() }}
              disabled={!table.getCanPreviousPage()}
            >
              <TbSquareRoundedChevronLeftFilled />
            </Button>

            <Span>
              {tableTag.page} {table.getState().pagination.pageIndex + 1}{' '}
              {tableTag.of} {table.getPageCount()}
            </Span>

            <Button
              Color={lightTheme.text}
              onClick={() => { table.nextPage() }}
              disabled={!table.getCanNextPage()}
            >
              <TbSquareRoundedChevronRightFilled />
            </Button>

            <Button
              Color={lightTheme.primary}
              onClick={() => { table.setPageIndex(table.getPageCount() - 1) }}
              disabled={!table.getCanNextPage()}
            >
              <TbSquareRoundedChevronsRightFilled />
            </Button>
          </Arrows>

          <Goto>
            <Span>
              {tableTag.GoToPage}
              <Input
                style={{ cursor: 'pointer' }}
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  // ORGANIZAR PARA QUE NO SEA MAYOR AL NUMERO TOTAL DE PAG
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  table.setPageIndex(page)
                }}
              />
            </Span>
            <Select
              style={{ cursor: 'pointer' }}
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {tableTag.Show} {pageSize}
                </option>
              ))}
            </Select>
          </Goto>
        </Pagination>
      </Topmenu>

      <Tables
        {...{
          style: {
            width: table.getCenterTotalSize()
          }
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key= {header.id}
                  {...{
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize()
                    }
                  }}
                >
                  <TableHeader
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {/* ORDEN ASCENDENTE DESCENDENTE */}
                    {{ asc: ' 🔼', desc: ' 🔽' }[
                      header.column.getIsSorted() as string
                    ] ?? null}
                  </TableHeader>

                  {/* CAMPOS DE FILTRADO */}
                  {header.column.getCanFilter()
                    ? (
                    <Filter column={header.column} table={table} />
                      )
                    : null}

                    <Resizer
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: ` ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                      style: {
                        transform:
                          columnResizeMode === 'onEnd' &&
                          header.column.getIsResizing()
                            ? `translateX(${
                              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                table.getState().columnSizingInfo.deltaOffset
                              }px)`
                            : ''
                      }
                    }}
                  />
                </Th>
              ))}
            </Tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TrTd key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </TrTd>
          ))}
        </tbody>
      </Tables>
    </Main>
  )
}

// CAMPOS DE FILTRADO
function Filter ({
  column,
  table
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  return typeof firstValue === 'number'
    ? (
    <>
      <DebouncedInput
        style={{
          width: '56px',
          textAlign: 'center',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        type="number"
        min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
        max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(value) => { column.setFilterValue((old: [number, number]) => [value, old?.[1]]) }
        }
        placeholder={`Min ${
          column.getFacetedMinMaxValues()?.[0]
            ? `(${column.getFacetedMinMaxValues()?.[0]})`
            : ''
        }`}
      />
      <DebouncedInput
        style={{
          width: '56px',
          textAlign: 'center',
          marginLeft: '5px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        type="number"
        min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
        max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(value) => { column.setFilterValue((old: [number, number]) => [old?.[0], value]) }
        }
        placeholder={`Max ${
          column.getFacetedMinMaxValues()?.[1]
            ? `(${column.getFacetedMinMaxValues()?.[1]})`
            : ''
        }`}
      />
    </>
      )
    : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        style={{ textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={(value) => { column.setFilterValue(value) }}
        placeholder={'Search...'}
        list={column.id + 'list'}
      />
    </>
      )
}

// A debounced input react component
function DebouncedInput ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => { clearTimeout(timeout) }
  }, [value])

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => { setValue(e.target.value) }}
    />
  )
}

function IndeterminateCheckbox ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      style={{
        width: '15px',
        height: '15px'
      }}
      {...rest}
    />
  )
}
