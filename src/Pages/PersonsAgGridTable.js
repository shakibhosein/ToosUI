import React, {useState, useEffect} from "react"
import AgGridTemplate from "../Components/AgGridTable"
import Loader from "../Components/Loader"
import ErrorComponent from "../Components/Error"

const personsDataURL = "https://localhost:7256/persons/AllpersonNewMali"
function PersonsAgGridTable(){

    const [personsData, setPersonsData] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    let personsDataColumns = []

    //getting data from server
    useEffect(() => {
        //fetching data from server
        fetch(personsDataURL)
        .then((response) => response.json())
        .then(data => {
            setPersonsData(data)
        })
        .catch(error => setFetchError(e => ({...e,Message:error.message})))
        //storing columns in an array
        }
        ,[])
    
        if (personsData) {
            const col = Object.keys(personsData[0])
            col.forEach(c => personsDataColumns.push(
                {
                    headerName: c,
                    field: c
                }
            )
            )
        }
        //Defining Buttons Components for using in each Row
        function Buttons(){
            return(
                <div className="buttonContainer">
                    <button className="btn btn-info btn-sm">
                        details
                    </button>
                    <button className = "btn btn-danger btn-sm">
                        remove
                    </button>
                </div>
            )
        }
    return (
        <>
            <div className = "tableTitleContainer">
                <h3 className = "tableTitle">Persons Information</h3>
            </div>
            {fetchError ? (
                <>
                <ErrorComponent errorMessage={fetchError}/>
                </>
                ) : 
                    personsData ?
                            <AgGridTemplate data ={personsData} datacolumns={personsDataColumns} actionsButtons = {Buttons}/> 
                        :
                        <Loader/>
            }
        </>
    );
}
export default PersonsAgGridTable