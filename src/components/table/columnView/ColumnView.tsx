import { Main, Sinput, SlabelAll, SlabelOptions } from './styles'
import { language } from './language'

import { type RowData, type Table } from '@tanstack/react-table'
import { useAppSelector } from '../../../hooks/redux'

interface Props<T extends RowData> {
  table: Table<T>
}

export default function ColumnView<T extends RowData> ({
  table
}: Props<T>) {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]

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
        {idiom.ShowAllColumns}
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
