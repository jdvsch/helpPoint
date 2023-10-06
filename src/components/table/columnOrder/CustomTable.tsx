/* eslint-disable multiline-ternary */
import { Sth, ColumnName, Resizer, Str, Std } from './styles'
import { TbArrowBigUpLineFilled, TbArrowBigDownLineFilled } from 'react-icons/tb'

import {
  flexRender,
  type RowData,
  type Table
} from '@tanstack/react-table'

import Filter from '../columsFilter/Filter'

interface Props<T extends RowData> {
  table: Table<T>
}

export default function CustomTable<T extends RowData> ({
  table
}: Props<T>) {
  const first = table.getHeaderGroups()
  first[0].headers[0].column.columnDef.size = 50

  return (
    <table>
      <thead>
        {first.map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Sth
                key={header.id}
                style={{ width: header.getSize() }}
                colSpan={header.colSpan}
              >
                {header.isPlaceholder ? null : (
                  <>
                    <ColumnName onClick={header.column.getToggleSortingHandler()} >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {/* ORDEN ASCENDENTE DESCENDENTE */}
                    {{ asc: <TbArrowBigUpLineFilled color='rgba(84, 245, 39, 0.8)' size='20px' />, desc: <TbArrowBigDownLineFilled color='rgba(245, 39, 39, 0.8)' size='20px'/> }[
                      header.column.getIsSorted() as string
                    ] ?? null}
                    </ColumnName>
                    {header.column.getCanFilter()
                      ? (
                        <Filter column={header.column} table={table} />
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
          <Str key={row.id}>
            {row.getVisibleCells().map(cell => (
              <Std
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
