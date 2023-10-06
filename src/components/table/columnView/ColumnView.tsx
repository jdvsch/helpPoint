import { Main, Sinput, SlabelAll, SlabelOptions } from './styles'

import { type RowData, type Table } from '@tanstack/react-table'

interface Props<T extends RowData> {
  table: Table<T>
}

export default function ColumnView<T extends RowData> ({
  table
}: Props<T>) {
  const obj = table.getState().columnVisibility
  console.log(obj)
  
  // console.log(Object.values(obj))

  return (
    <Main>
      <SlabelAll>
        {Object.keys(table.getState().columnVisibility).length !== 0 &&
        <>
        <Sinput
        type="checkbox"
        checked={table.getIsAllColumnsVisible()}
        onChange={table.getToggleAllColumnsVisibilityHandler()}
        />
        Toggle All
        </>
        }


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
