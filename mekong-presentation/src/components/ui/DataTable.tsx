import { ReactNode } from 'react';

interface Column<T> {
    key: string;
    header: string;
    render?: (row: T, index: number) => ReactNode;
    align?: 'left' | 'right' | 'center';
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    highlightRow?: (row: T, index: number) => boolean;
}

export function DataTable<T extends Record<string, unknown>>({ columns, data, highlightRow }: DataTableProps<T>) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs">
                <thead>
                    <tr className="border-b border-white/10">
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className={`py-2 text-gray-400 font-medium ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr
                            key={i}
                            className={`border-b border-white/5 ${highlightRow?.(row, i) ? 'bg-white/[0.03]' : ''}`}
                        >
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className={`py-2 ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : ''} ${col.key === columns[0].key ? 'text-gray-300' : 'text-white font-semibold'}`}
                                >
                                    {col.render ? col.render(row, i) : String(row[col.key] ?? '')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
