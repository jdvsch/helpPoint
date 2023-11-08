import React from 'react'
import { language } from './language'

import { type ColumnDef } from '@tanstack/react-table'
import IndeterminateCheckbox from '../../../components/table/checkBox/InderterminateCheckbox'
import { type equipmentInterface } from '../../../fakeAPIdata/assetTable'
import { useAppSelector } from '../../../hooks/redux'

export default function TableModel () {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]

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

  const tableModel = [...equipmentEsModel]

  return { tableModel }
}
