import React from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css'


export default function AgGridTemplate({data, datacolumns,actionsButtons}){
    const defaultColDef = {
        sortable:true,
        filter:true,
        floatingFilter: true
    }
    //adding buttons components Column to colums object
    let columns = [...datacolumns,{headerName:"Actions",cellRenderer: actionsButtons}]
    //styling all columns including the action column
    columns = columns.map(c => (
        {...c, cellStyle:
            {
                "border-right":"solid 1px",
                "border-bottom":"solid 1px",
                "justify-content":"center",
                "font-size":"17px",
                "text-align": "center"
            }
        }
    ))
    return (
        <div className="ag-theme-alpine" >
            <AgGridReact rowData = {data} columnDefs={columns} defaultColDef={defaultColDef}/>
        </div>
    )
}