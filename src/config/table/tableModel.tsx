import IndeterminateCheckbox from '../../components/table/pagination&others/InderterminateCheckbox'
import { type ColumnDef } from '@tanstack/react-table'
import { type Person } from '../../fakeData/tools'

export const defaultColumns: Array<ColumnDef<Person>> = [
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
                <div style={{ textAlign: 'center' }}>
                  <IndeterminateCheckbox
                    checked={row.getIsSelected()}
                    indeterminate={row.getIsSomeSelected()}
                    onChange={row.getToggleSelectedHandler()}
                  />
                </div>
    )
  },

  {
    header: 'firstName',
    accessorKey: 'firstName'
  },

  {
    header: 'lastName',
    accessorKey: 'lastName'
  },

  {
    header: 'age',
    accessorKey: 'age'
  },

  {
    header: 'visits',
    accessorKey: 'visits'
  },

  {
    header: 'status',
    accessorKey: 'status'
  },

  {
    header: 'progress',
    accessorKey: 'progress'
  }]
