import { type RowData, type Table } from '@tanstack/react-table'

interface Props<T extends RowData> {
  table: Table<T>

}

export default function ColumnView<T extends RowData> ({
  table
}: Props<T>) {
  return (
<div className="p-2 grid grid-cols-4 gap-4">
<div className="p-2 inline-block border border-black shadow rounded">
<div className="px-1 border-b border-black">
<label>
<input
type="checkbox"
checked={table.getIsAllColumnsVisible()}
onChange={table.getToggleAllColumnsVisibilityHandler()}
className="mr-1"
/>
Toggle All
</label>
</div>
{table.getAllLeafColumns().map(column => {
  return (
<div key={column.id} className="px-1">
<label>
<input
type="checkbox"
checked={column.getIsVisible()}
onChange={column.getToggleVisibilityHandler()}
className="mr-1"
/>
{column.id}
</label>
</div>
  )
})}
</div>
</div>

  )
}
