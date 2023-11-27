import { type ColumnDef } from '@tanstack/react-table'
import IndeterminateCheckbox from '../../../components/table/checkBox/InderterminateCheckbox'

export interface Model {
  id: string | number
}

const selectModel: Array<ColumnDef<Model>> = [
  {
    id: 'select',
    header: ({ table }) => (
      <IndeterminateCheckbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        checked={row.getIsSelected()}
        indeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    )
  }
]

export const tableModel = [...selectModel]
