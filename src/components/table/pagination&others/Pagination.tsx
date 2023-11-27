import { Main, Sbutton, Sspan, Sinput, Sselect } from './styles'
import { language } from './language'

import { type RowData, type RowModel } from '@tanstack/react-table'
import { useAppSelector } from '../../../hooks/redux'

import {
  TbSquareRoundedChevronsLeftFilled,
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronsRightFilled,
  TbSquareRoundedChevronRightFilled
} from 'react-icons/tb'
import React from 'react'

interface Props<T extends RowData> {
  getSelectedRowModel: () => RowModel<T>
  hasNextPage: boolean
  hasPreviousPage: boolean
  nextPage: () => void
  pageCount: number
  pageIndex: number
  pageSize: number
  previousPage: () => void
  // eslint-disable-next-line @typescript-eslint/ban-types
  rowSelection: Object
  setPageIndex: (index: number) => void
  setPageSize: (size: number) => void
  totalRows: number
}

export function Pagination<T extends RowData> ({
  hasNextPage,
  hasPreviousPage,
  nextPage,
  pageCount,
  pageIndex,
  pageSize,
  previousPage,
  setPageIndex,
  setPageSize
}: Props<T>) {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]

  const rangePagination = [...new Set([10, 20, 30, 40, 50].concat([authState.globalStatus.tableRowSize]))].sort(function (a, b) { return a - b })

  React.useEffect(() => {
    setPageSize(authState.globalStatus.tableRowSize)
  }, [])

  return (
    <Main>
      <Sbutton
        onClick={() => { setPageIndex(0) }}
        disabled={!hasPreviousPage}
      >
        <TbSquareRoundedChevronsLeftFilled />
      </Sbutton>
      <Sbutton
        onClick={() => { previousPage() }}
        disabled={!hasPreviousPage}
      >
        <TbSquareRoundedChevronLeftFilled />
      </Sbutton>
      <Sspan>
        {idiom.page} <strong> {pageIndex + 1} {idiom.of} {pageCount} </strong>
      </Sspan>
      <Sbutton
        onClick={() => { nextPage() }}
        disabled={!hasNextPage}
      >
        <TbSquareRoundedChevronRightFilled />
      </Sbutton>
      <Sbutton
        onClick={() => { setPageIndex(pageCount - 1) }}
        disabled={!hasNextPage}
      >
        <TbSquareRoundedChevronsRightFilled />
      </Sbutton>
      <Sspan>
        {idiom.goToPage}
        <Sinput
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = (e.target.value.length > 0) ? Number(e.target.value) - 1 : 0
            setPageIndex(page)
          }}
        />
      </Sspan>
      <Sselect
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {rangePagination.map(pageSize => (
          <option key={pageSize} value={pageSize}>
            {idiom.show} {pageSize}
          </option>
        ))}
      </Sselect>
    </Main>
  )
}

export default Pagination
