import {React, useState, useEffect} from "react";

export default function Contracts (){
    const [data,setData]=useState(null)
    useEffect(() =>{
                    fetch("https://localhost:7256/api/Contracts/AllContracts")
                    .then(Response => Response.json())
                    .then(data => setData(data))
                    .catch(error => setData(JSON.stringify(error)))
    },[])
    let contractInfo = data ? data.map(c => {
        return(
            <div>
            <div>contract ID: {c.contractId} - Gharardad Number: {c.ghrard_no}</div>
            <p>Name: {c.persons[0] ? (c.persons)[0].name + " " +(c.persons)[0].famil : "No Person" }</p>
            {/* <p>{JSON.stringify(c.persons)}</p> */}
            <hr/>
            </div>
        )
    }): null    


    return (
        <>
            <div>Contract Informations</div>
            <div>
                {data ? contractInfo : "Loading Data"}
            </div>
        </>
    )
}

