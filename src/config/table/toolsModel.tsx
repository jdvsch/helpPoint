import { type ColumnDef } from '@tanstack/react-table'
import { type toolsDataType } from '../../fakeData/tools'
import IndeterminateCheckbox from '../../components/table/pagination&others/InderterminateCheckbox'

export const toolsModel: Array<ColumnDef<toolsDataType>> = [
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
          <div className="px-1">
            <IndeterminateCheckbox
              checked={row.getIsSelected()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          </div>
    )
  },

  {
    header: 'tool name',
    accessorKey: 'tool_name'
  },

  {
    header: 'boolean',
    accessorKey: 'boolean'
  },

  {
    header: 'year',
    accessorKey: 'year'
  },

  {
    header: 'money',
    accessorKey: 'money'
  },

  {
    header: 'number',
    accessorKey: 'number'
  },

  {
    header: 'time',
    accessorKey: 'time'
  }
]
