import { Main, Sinput, SlabelAll, SlabelOptions } from './styles'

import { type RowData, type Table } from '@tanstack/react-table'

interface Props<T extends RowData> {
  table: Table<T>
}

export default function ColumnView<T extends RowData> ({
  table
}: Props<T>) {
  return (
    <Main>
      <SlabelAll className={Object.values(table.getState().columnVisibility).includes(false) ? '' : 'disabled' }>
        <Sinput
        disabled={!Object.values(table.getState().columnVisibility).includes(false)}
        type="checkbox"
        checked={table.getIsAllColumnsVisible()}
        onChange={table.getToggleAllColumnsVisibilityHandler()}
        className={Object.values(table.getState().columnVisibility).includes(false) ? '' : 'disabled'}
        />
        Show all columns
      </SlabelAll>

      {table.getAllLeafColumns().map(column => (
        <div key={column.id}>
          {column.id !== 'select' &&
            <SlabelOptions>
              <Sinput
              type="checkbox"
              checked={column.getIsVisible()}
              onChange={column.getToggleVisibilityHandler()}
              />
              {column.id}
            </SlabelOptions>
          }
        </div >
      ))}
    </Main>
  )
}
