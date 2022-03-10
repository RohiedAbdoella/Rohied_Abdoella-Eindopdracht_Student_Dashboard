import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import '../styles/Tableview.css';


const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data },
        useFilters,
        useSortBy
    );

    const generateSortingIndicator = column => {
        if (column.isSorted) {
            return "🔽🔼"
        } else if (column.isSortedDesc) {
            return "🔽🔼"
        } else {
            return "🔽🔼"
        }
    };

    return (
        <div>
            {headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column) =>
                    column.Filter ? (
                        <div className='filter' key={column.id}>
                            <label htmlFor={column.id}>{column.render("Header")}: </label>
                            {column.render("Filter")}
                        </div>
                    ) : null
                )
            )}

            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th  {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    {generateSortingIndicator(column)}</th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Table;