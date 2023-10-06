import { type RowData, type RowModel } from '@tanstack/react-table'
import React from 'react'

import {
  TbSquareRoundedChevronsLeftFilled,
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronsRightFilled,
  TbSquareRoundedChevronRightFilled
} from 'react-icons/tb'

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
  return (
    <React.Fragment>
      <div>
        <button
          onClick={() => { setPageIndex(0) }}
          disabled={!hasPreviousPage}
        >
          <TbSquareRoundedChevronsLeftFilled size='20px'/>
        </button>
        <button
          onClick={() => { previousPage() }}
          disabled={!hasPreviousPage}
        >
          <TbSquareRoundedChevronLeftFilled size='20px'/>
        </button>
        <button
          onClick={() => { nextPage() }}
          disabled={!hasNextPage}
        >
          <TbSquareRoundedChevronRightFilled size='20px'/>
        </button>
        <button
          onClick={() => { setPageIndex(pageCount - 1) }}
          disabled={!hasNextPage}
        >
          <TbSquareRoundedChevronsRightFilled size='20px'/>
        </button>
        <span>
          <div>Page</div>
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = (e.target.value.length > 0) ? Number(e.target.value) - 1 : 0
              setPageIndex(page)
            }}
          />
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  )
}

export default Pagination
