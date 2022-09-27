import React from 'react';
import { useQuery } from 'react-query';
import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { fetchData, ReservationData } from '../fetchData';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: center;
  word-break: keep-all;
  .thead {
    th {
      td {
        padding: 8px;
      }
      padding: 10px;
    }
    tr {
      border-bottom: 1px solid #000;
      background-color: #f7f7f7;
    }
  }
  .tbody {
    tr {
      border-bottom: 1px solid #cecece;
      td {
        padding: 20px;
      }
    }
    & tr:last-child {
      border-bottom: 1px solid #000;
    }
  }
`;

export default function Reservation() {
  const columnHelper = createColumnHelper<ReservationData>();
  interface _TableKeys {
    engKey: string;
    korKey: string;
  }
  type TableKeys = _TableKeys;

  //FIXME 타입 나중에 수정 예정
  const tableKeys: TableKeys | any = [
    { engKey: 'id', korKey: '예약코드' },
    { engKey: 'title', korKey: '상품명' },
    { engKey: 'price', korKey: '결제 금액' },
    { engKey: 'people', korKey: '인원' },
    { engKey: 'startDate', korKey: '출발일' },
    { engKey: 'endDate', korKey: '귀국일' },
    { engKey: 'period', korKey: '여행 기간' },
    { engKey: 'status', korKey: '여행/예약상태' },
  ];

  //FIXME 타입 나중에 수정 예정
  const columns = tableKeys.map((tablekey: any) => {
    return columnHelper.accessor(tablekey.engKey, { header: tablekey.korKey });
  });

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
      예약 및 취소 조회
      <StyledTable>
        <thead className="thead">
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
        <tbody className="tbody">
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
      </StyledTable>
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
      {/* {dataQuery.isFetching ? 'Loading...' : null} */}
    </div>
  );
}
