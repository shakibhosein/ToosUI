import React, {useState, useEffect} from "react"
import TableTemplate from "../Components/React-Table"

const personsDataURL = "https://localhost:7256/persons/AllpersonNewMali"
function PersonsTable(){

    const [personsData, setPersonsData] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    let personsDataColumns = []

    //getting data from server
    useEffect(() => {
        //fetching data from server
        fetch(personsDataURL)
        .then(response => response.json())
        .then(data => {
            setPersonsData(data)
        })
        .catch(error => setFetchError(error))
        //storing columns in an array
        }
        ,[])
    
        if (personsData) {
            const col = Object.keys(personsData[0])
            col.forEach(c => personsDataColumns.push(
                {
                    Header: c,
                    accessorKey: c
                }
            )
            )
        }
    return (
        <>
            <h3>Persons Information</h3>
            {personsData ?
                // <p>{JSON.stringify(personsDataColumns)}</p>
                <TableTemplate columns={personsDataColumns} data ={personsData}/> 
                :
                <h3>Loading data</h3>
                }
        </>
    );
}
export default PersonsTable