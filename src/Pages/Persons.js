import React, {useState, useEffect, useRef} from "react";

export default function Persons(){
    const [personsData, setPersonsData] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const tableRef = useRef(null)

    function firstGetPersonsData(){
        let url = `https://localhost:7256/Persons/AllPersons/1`
        fetch(url)
        .then(respons => respons.json())
        .then(data => {setPersonsData(data)})
        .catch(error => console.log(error))
    }
    //function for geting a specific page's data and add it to the existing data
    function getPersonsData(pNumber){
        let url = `https://localhost:7256/Persons/AllPersons/${pNumber}`
        fetch(url)
        .then(respons => respons.json())
        .then(data => {setPersonsData(oldData => [...oldData, ...data])})
        .catch(error => console.log(error))
    }

    //function for perfom adding to pagenumber for scrolling
    function loadNewPageDataWithScroll(){
      console.log("hello");
        const container = tableRef.current
        if(container && (container.scrollTop + container.clientHeight - container.scrollHeight > -5)){
        getPersonsData(pageNumber + 1)
        setPageNumber(old => old + 1)}
    }

    function refreshData(){
      console.log("hello");
      // debugger;
        const container = tableRef.current
        if (pageNumber === 1){firstGetPersonsData()}
        else{if(container && (container.scrollTop + container.clientHeight - container.scrollHeight > -6)){
            getPersonsData(pageNumber)
            setPageNumber(old => old + 1)}}
    }
    //getting the first page data at begining
    useEffect(() => refreshData(),[])
    // useEffect(()=> loadNewPageDataWithScroll(pageNumber),[])
    return (personsData !== undefined ?
        <>
        <div className = "Container" ref={tableRef} onScroll={(e) => loadNewPageDataWithScroll()}>
            <table className="table table-bordered table-hover">
                <thead className="sticky-header">
                  <tr>
                    <th scope="col">Row</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Melli Cod</th>
                  </tr>
                </thead>
                <tbody>
                  {personsData.map(person => 
                  <tr className="sel">
                    <th scope="row">{person.person_code}</th>
                    <td>{person.fullName}</td>
                    <td>{person.nat_code}</td>
                  </tr>)}
                </tbody>
            </table>
        </div>
        {/* <div>{tableRef.current.scrollTop + tableRef.current.clientHeight - tableRef.current.scrollHeight}</div> */}
        </>
        : <p>loading</p>
    )
}