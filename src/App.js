import {React, useMemo} from "react";
import InstallmentsPage from "./Pages/Installments";
import ParvandePage from "./Pages/Parvande";
import Persons from "./Pages/Persons"
import TableTemplate from "./Components/React-Table";
import {Routes, Route} from "react-router-dom"
import PersonsTable from "./Pages/PersonsReactTable";
import PersonsAgGridTable from "./Pages/PersonsAgGridTable";
import Contracts from "./Pages/Contracts"
import Test from "./Pages/FetchTest"



const columns = [
        {
            Header:"ID", // columns Name that will be displayed to help identify each column
            accessorKey: 'id'// this is the key in our data. This is what will be used to assign each value to a column.
        },
        // {
        //     Header:"First Name",
        //     accessorKey: 'firstName'
        // },
        // {
        //     Header:"Last Name",
        //     accessorKey: 'lastName',
        //     cell: info => info.getValue().toUpperCase() // how to manipulate the data that is shown in table.
        // },
        {
            Header: "Full Name",
            accessorKey: "Full Name",
            accessorFn: row => `${row.firstName} ${row.lastName}`.toUpperCase()//using accessor function to create a new column based on the other columns.
        },
        {
            Header:"Email",
            accessorKey: 'email'
        },
        {
            Header:"Departmentn",
            accessorKey: 'department'
        },
        {
            Header:"Date Joined",
            accessorKey: 'dateJoined'
        }
    ]
const myDataSample = []
for(let i = 1; i<101; i++){
    myDataSample.push(
        {
            id: i,
            firstName: "Hosein",
            lastName: "Shakib",
            email: "shakibhoseinkh@gmail.com",
            department: "Tech",
            dateJoined: "2023-09-01"
        }
    )
}
function App() {
  return (
    <>
        <Routes>
                <Route path = {"/"} element ={
                      <div className="App">
                          <header className="App-header">
                          </header>
                          <body>
                            <InstallmentsPage 
                             customerName="CustomerName"
                             customerId = "CustomerId"
                             numberOfInstallments = "numberOfInstallments"
                             installment = "installment"
                            />
                          </body>
                      </div>
                }
                />
                <Route path = {"/persons"} element = {
                  <Persons/>
                }
                />
                <Route path = {"/ReactTable"} element = {<TableTemplate columns={columns} data = {useMemo(() => myDataSample,[])}/>}/>                    
                <Route path = {"/Parvande"} element = {<ParvandePage/>}/>
                <Route path = {"/PersonsReactTable"} element = {<PersonsTable/>}/>
                <Route path = {"/PersonsAgGridTable"} element = {<PersonsAgGridTable/>}/>
                <Route path = {"/Contracts"} element = {<Contracts/>}/>
                <Route path = {"/Test"} element = {<Test/>}/>                  
        </Routes> 
      </> 
  
  );
}

export default App;
