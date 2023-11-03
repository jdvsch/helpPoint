import { type Column, type RowData, type Table } from '@tanstack/react-table'
import React from 'react'
import DebouncedInput from './DebouncedInput'

interface NumberInputProps {
  columnFilterValue: [number, number]
  getFacetedMinMaxValues: () => [number, number] | undefined
  setFilterValue: (updater: any) => void
}

const NumberInput: React.FC<NumberInputProps> = ({
  columnFilterValue,
  setFilterValue
}) => {
  return (
    <>
      <DebouncedInput
      style={{
        width: '70px',
        textAlign: 'center',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
        type="number"
        value={columnFilterValue?.[0] ?? ''}
        onChange={value => { setFilterValue((old: [number, number]) => [value, old?.[1]]) }
        }
        placeholder={'Min...'}
      />
      <DebouncedInput
      style={{
        width: '70px',
        textAlign: 'center',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
        type="number"
        value={columnFilterValue?.[1] ?? ''}
        onChange={value => { setFilterValue((old: [number, number]) => [old?.[0], value]) }
        }
        placeholder={'Max...'}
      />
    </>
  )
}

interface TextInputProps {
  columnId: string
  columnFilterValue: string
  columnSize: number
  setFilterValue: (updater: any) => void
  sortedUniqueValues: any[]
}

const TextInput: React.FC<TextInputProps> = ({
  columnId,
  columnFilterValue,
  setFilterValue,
  sortedUniqueValues
}) => {
  const dataListId = columnId + 'list'

  return (
    <>
      <datalist id={dataListId}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        style={{ width: '140px', textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}
        type="text"
        value={columnFilterValue ?? ''}
        onChange={value => { setFilterValue(value) }}
        placeholder={'Search...'}
        list={dataListId}
      />
    </>
  )
}

interface Props<T extends RowData> {
  column: Column<T, unknown>
  table: Table<T>
}

export function Filter<T extends RowData> ({ column, table }: Props<T>) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()
  const uniqueValues = column.getFacetedUniqueValues()

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
        : Array.from(uniqueValues.keys()).sort(),
    [uniqueValues]
  )

  return typeof firstValue === 'number'
    ? (
    <NumberInput
      columnFilterValue={columnFilterValue as [number, number]}
      getFacetedMinMaxValues={column.getFacetedMinMaxValues}
      setFilterValue={column.setFilterValue}
    />
      )
    : (
    <TextInput
      columnId={column.id}
      columnFilterValue={columnFilterValue as string}
      columnSize={uniqueValues.size}
      setFilterValue={column.setFilterValue}
      sortedUniqueValues={sortedUniqueValues}
    />
      )
}

export default Filter
