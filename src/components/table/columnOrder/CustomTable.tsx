/* eslint-disable multiline-ternary */
import {
  flexRender,
  // type Row,
  type RowData,
  type Table
} from '@tanstack/react-table'

import Filter from '../columsFilter/Filter'

import './custom.css'
import { Th, ColumnName, Resizer, Record } from './styles'

// type TableGroup = 'center' | 'left' | 'right'

// function getRowGroup<T extends RowData> (row: Row<T>, tg?: TableGroup) {
//   if (tg === 'left') return row.getLeftVisibleCells()
//   if (tg === 'right') return row.getRightVisibleCells()
//   if (tg === 'center') return row.getCenterVisibleCells()
//   return row.getVisibleCells()
// }

interface Props<T extends RowData> {
  table: Table<T>
  // tableGroup?: TableGroup
}

export default function CustomTable<T extends RowData> ({
  table
}: Props<T>) {
  const first = table.getHeaderGroups()
  first[0].headers[0].column.columnDef.size = 50
  console.log(first)

  return (
    <table>
      <thead>
        {first.map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Th
                className="relative"
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
                    {{ asc: ' 🔼', desc: ' 🔽' }[
                      header.column.getIsSorted() as string
                    ] ?? null}
                    </ColumnName>
                    {header.column.getCanFilter()
                      ? (
                      <div>
                        <Filter column={header.column} table={table} />
                      </div>
                        )
                      : null}
                  </>
                )}
                <Resizer {...{
                  onMouseDown: header.getResizeHandler(),
                  onTouchStart: header.getResizeHandler(),
                  className: `resizer ${
                          header.column.getIsResizing() ? 'isResizing' : ''
                        }`
                }}
                />
              </Th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <Record key={row.id} className='row'>
            {row.getVisibleCells().map(cell => (
              <td
                key={cell.id}
                style={{
                  width: cell.column.getSize()
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </Record>
        ))}
      </tbody>
    </table>
  )
}
