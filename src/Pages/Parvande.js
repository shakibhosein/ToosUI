import React, {useState, useEffect} from "react"
import ReactTemplate from "../Components/React-Table"


export default function ParvandePage(){
    const [fetchedData, setFetchedData] = useState()
    useEffect( () => 
        {fetch(`https://localhost:7256/Persons/AllPersons/1`)
        .then(response => response.json())
        .then(data => {setFetchedData(data)})
        .catch(error => console.log(error))}
        ,[]
    )

    const columns = [
        {
            header: "کد شخص",
            accessorKey: "person_code",
        },
        {
            header: "کد ملی",
            accessorKey: "nat_code",
        },
        {
            header: "نام و نام خانوادگی",
            accessorKey: "fullName",
        }
    ]
    return(
        <div>
            <div style = {{"display": "flex", "justify-content": "center", "margin-top": "20px"}}>
                <h3>اطلاعات اشخاص</h3>
            </div>
            {fetchedData ?
            <ReactTemplate columns={columns} data={fetchedData}/>
        :
        <h2>Loading ...</h2>}
        </div>
    )
    
}