import { type ColumnDef } from '@tanstack/react-table'
import { type Person } from './tableData'

export const tools: Array<ColumnDef<Person>> = [
  {
    header: 'Tool name',
    accessorKey: 'tools',
    cell: (info) => info.getValue()
  }
]

export const columns: Array<ColumnDef<Person>> = [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: (info) => info.getValue()
  },
  {
    header: 'Country',
    accessorKey: 'country'
  },
  {
    header: 'Region',
    accessorKey: 'region'
  },
  {
    header: 'Complet',
    accessorFn: (row) => `${row.country} / ${row.region}`
  },
  {
    header: 'Value',
    accessorKey: 'numberrange'
  }
]