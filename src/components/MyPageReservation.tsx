import React from 'react';
import { useQuery } from 'react-query';
import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { fetchData, Person } from './fetchData';

export default function MyPageReservation() {
  const columnHelper = createColumnHelper<Person>();
  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: '예약코드',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.title, {
      id: 'title',
      cell: (info) => <i>{info.getValue()}</i>,
      header: '상품명',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('price', {
      header: '결제 금액',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('people', {
      header: '인원',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('startDate', {
      header: '출발일',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('endDate', {
      header: '귀국일',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('period', {
      header: '여행 기간',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('status', {
      header: '여행/예약상태',
      footer: (info) => info.column.id,
    }),
  ];

  const [{ pageIndex, pageSize }, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  const dataQuery = useQuery(['data', fetchDataOptions], () => fetchData(fetchDataOptions), {
    keepPreviousData: true,
  });

  const defaultData = React.useMemo(() => [], []);

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const table = useReactTable({
    data: dataQuery.data?.rows ?? defaultData,
    columns,
    pageCount: dataQuery.data?.pageCount ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // debugTable: true,
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}{' '}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        {'<'}
      </button>
      <span>
        <strong>
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </strong>
      </span>
      <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        {'>'}
      </button>
      {dataQuery.isFetching ? 'Loading...' : null}
    </div>
  );
}
