/* eslint-disable multiline-ternary */
import { Sth, ColumnName, Resizer, Str, Std } from './styles'
import { TbArrowBigUpLineFilled, TbArrowBigDownLineFilled } from 'react-icons/tb'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import {
  flexRender,
  type Cell,
  type RowData,
  type Table
} from '@tanstack/react-table'

import Filter from '../columsFilter/Filter'
import { setViewPageControl } from '../../../redux/slices/authState'

interface Props<T extends RowData> {
  table: Table<T>
}

export default function CustomTable<T extends RowData> ({
  table
}: Props<T>) {
  const first = table.getHeaderGroups()
  first[0].headers[0].column.columnDef.size = 50

  const dispatch = useAppDispatch()
  const { authState } = useAppSelector(state => state)

  const editViewRecord = (rowId: string, cellData: Cell<T, unknown>) => {
    if (cellData.column.id !== 'select') {
      // call the page with data
      dispatch(setViewPageControl({ viewControl: authState.viewPageControl.tableDefaultToRender, idToEdit: cellData.row.original }))
      // console.log(cellData.column.id)
      // console.log(cellData.row.original)
      // console.log(rowId)
    }
  }

  return (
    <table {...{ style: { width: table.getCenterTotalSize() } }}>
      <thead>
        {first.map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Sth
                key={header.id}
                Width={header.getSize().toString() + 'px'}
                colSpan={header.colSpan}
                className={header.id === 'select' ? 'select' : ''}
              >
                {header.isPlaceholder ? null : (
                  <>
                    <ColumnName onClick={header.column.getToggleSortingHandler()} >
                      <div style={{ marginRight: '8px' }}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      </div>

                    {/* ORDEN ASCENDENTE DESCENDENTE */}
                    {{ asc: <TbArrowBigUpLineFilled color='rgba(84, 245, 39, 0.8)' size='18px' />, desc: <TbArrowBigDownLineFilled color='rgba(245, 39, 39, 0.8)' size='18px'/> }[
                      header.column.getIsSorted() as string
                    ] ?? null}
                    </ColumnName>
                    {header.column.getCanFilter()
                      ? (<></>
                        // <Filter column={header.column} table={table} />
                        )
                      : null}
                  </>
                )}
                {header.id !== 'select' &&
                  <Resizer {...{
                    onMouseDown: header.getResizeHandler(),
                    onTouchStart: header.getResizeHandler(),
                    className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`
                  }}/>
                }
              </Sth>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <Str key={row.id} className={table.getState().rowSelection[row.id] ? 'rowSelected' : ''} >
            {row.getVisibleCells().map(cell => (
              <Std
                className={cell.column.id === 'select' ? 'checkbox' : 'noCheckbox'}
                onClick={() => { editViewRecord(row.id, cell) }}
                key={cell.id}
                style={{ maxWidth: cell.column.getSize() }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Std>
            ))}
          </Str>
        ))}
      </tbody>
    </table>
  )
}
