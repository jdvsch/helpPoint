import { type RowData, type RowModel } from '@tanstack/react-table'
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
  return (
    <React.Fragment>
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => { setPageIndex(0) }}
          disabled={!hasPreviousPage}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => { previousPage() }}
          disabled={!hasPreviousPage}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => { nextPage() }}
          disabled={!hasNextPage}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => { setPageIndex(pageCount - 1) }}
          disabled={!hasNextPage}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = (e.target.value.length > 0) ? Number(e.target.value) - 1 : 0
              setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          className="border p-1 rounded"
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