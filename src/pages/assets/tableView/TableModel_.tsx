import { type ColumnDef } from '@tanstack/react-table'
import IndeterminateCheckbox from '../../../components/table/checkBox/InderterminateCheckbox'
import { type equipmentInterface } from '../../../fakeAPIdata/assetTable'

import { language } from './language'

export const equipmentEnModel: Array<ColumnDef<equipmentInterface>> = [
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
  },

  {
    header: 'equipment/machinery',
    accessorKey: 'name'
  },
  {
    header: 'is Part of',
    accessorKey: 'isPartOf'
  },
  {
    header: 'make',
    accessorKey: 'make'
  },
  {
    header: 'model',
    accessorKey: 'model'
  },
  {
    header: 'serial number',
    accessorKey: 'serialNumber'
  },
  {
    header: 'priority',
    accessorKey: 'priority'
  },
  {
    header: 'type',
    accessorKey: 'type'
  },
  {
    header: 'group1',
    accessorKey: 'group1'
  },
  {
    header: 'group2',
    accessorKey: 'group2'
  },
  {
    header: 'supplier',
    accessorKey: 'supplier'
  },
  {
    header: 'purchase date',
    accessorKey: 'purchaseDate'
  },
  {
    header: 'hour of use',
    accessorKey: 'hourOfUse'
  },
  {
    header: 'note',
    accessorKey: 'note'
  }
]

const equipmentEsModel: Array<ColumnDef<equipmentInterface>> = [
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

export const aaa = [...equipmentEsModel, ...language.Español]
