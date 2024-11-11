import React, { useState } from 'react';
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table';
import { data as fullData } from '../../assets/data'

// Định nghĩa kiểu dữ liệu cho mỗi hàng
type Person = {
    id: number;
    name: string;
    age: number;
    job: string;
};

// Tạo helper để tạo các cột dễ dàng hơn
const columnHelper = createColumnHelper<Person>();

// Định nghĩa các cột của bảng
const columns: ColumnDef<Person, any>[] = [
    columnHelper.accessor('id', {
        header: 'ID',
    }),
    columnHelper.accessor('name', {
        header: 'Name',
    }),
    columnHelper.accessor('age', {
        header: 'Age',
    }),
    columnHelper.accessor('job', {
        header: 'Job',
    }),
];

const ProductTable: React.FC = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);

    // Lấy dữ liệu cho trang hiện tại dựa trên pageIndex và pageSize
    const currentData = React.useMemo(() => {
        const start = pageIndex * pageSize;
        return fullData.slice(start, start + pageSize);
    }, [pageIndex, pageSize]);

    const table = useReactTable({
        data: currentData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount: Math.ceil(fullData.length / pageSize),
    });
    return (
        <>
            <table className="min-w-full bg-white border">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="px-4 py-2 border-b text-left bg-[#81ecec] text-black text-sm font-semibold"
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="hover:bg-gray-100">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="px-4 py-2 border-b text-sm">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Điều khiển phân trang */}
            <div className="mt-4 flex justify-center items-center space-x-2">
                <button
                    onClick={() => setPageIndex(0)}
                    disabled={pageIndex === 0}
                    className="px-2 py-1 border rounded mr-2"
                >
                    {'<<'}
                </button>
                <button
                    onClick={() => setPageIndex(prev => Math.max(prev - 1, 0))}
                    disabled={pageIndex === 0}
                    className="px-2 py-1 border rounded mr-2"
                >
                    {'<'}
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {Math.ceil(fullData.length / pageSize)}
                    </strong>
                </span>
                <button
                    onClick={() => setPageIndex(prev => Math.min(prev + 1, Math.ceil(fullData.length / pageSize) - 1))}
                    disabled={pageIndex >= Math.ceil(fullData.length / pageSize) - 1}
                    className="px-2 py-1 border rounded ml-2"
                >
                    {'>'}
                </button>
                <button
                    onClick={() => setPageIndex(Math.ceil(fullData.length / pageSize) - 1)}
                    disabled={pageIndex >= Math.ceil(fullData.length / pageSize) - 1}
                    className="px-2 py-1 border rounded ml-2"
                >
                    {'>>'}
                </button>
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                    className="ml-4 p-1 border rounded"
                >
                    {[5, 10, 20].map(size => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default ProductTable;