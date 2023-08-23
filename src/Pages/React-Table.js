import {useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel} from '@tanstack/react-table'
import {useState} from 'react'

function TableTemplate({columns, data}){
    
    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        getPaginationRowModel:getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state:{
            sorting: sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    });
    // passing an object to useTable hook, this object has two properties. Columns and data.{columns : [array of columns], data: [array of data]}
    //const tableInstace = useTable({columns, data})//  creating a table instance
    
    return (
        <div className = "w3-container">
            <div class = "global-search-box">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm"><i class="bi bi-search"></i></span>
                    </div>
                        <input 
                        type="text" 
                        class="form-control" 
                        aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder='Type to Live Search'
                        value={filtering}
                        onChange = {(e) => setFiltering(e.target.value)}
                        />
                </div>
            </div>
            <table className="w3-table-all">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key = {headerGroup.id}>
                        {headerGroup.headers.map(header => (
                        <th key = {header.id} onClick = {header.column.getToggleSortingHandler()}>
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                            {
                               {
                                asc:<i class="bi bi-sort-up"></i>,
                                desc:<i class="bi bi-sort-down"></i>
                            }[header.column.getIsSorted() ?? null]
                            }
                        </th>
                        ))}
                    </tr>
                ))}

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key = {row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key = {cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell)}
                                </td>
                            ))}
                            <button className = "btn btn-danger">test1</button>
                        </tr>
                    ))}
                </tbody>
                   
                <tfoot>
                </tfoot>

            </table>
            <div className = "buttonContainer">
                <button className="btn btn-primary" onClick={() => table.setPageIndex(0)}>First</button>
                <button className="btn btn-primary" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous</button>
                <button className="btn btn-primary" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next</button>
                <button className="btn btn-primary" onClick={() => table.setPageIndex(table.getPageCount() -1)}>Last</button>
            </div>
        </div>
    )
}

export default TableTemplate;