import React from "react";


function InstallmentsPage(props)
{
    const numberOfInstallments = 12
    function installmentCreator(nOfInstallments, startDate, Period, installment){
        const installmentTable = []
        for(let i = 0; i<=nOfInstallments; i++)
        {
            installmentTable.push
            (
                <tr>
                    <th scope="row">{i}</th>
                    <td>{installment}</td>
                    <td>0</td>
                    <td>{startDate}</td>
                  </tr>
            )
        }
        return installmentTable
    }
    return(
        <>
        <div className = "InstallmentPage Container">
            <div className = "InstallmentTable Header">
                <p className = "InstallmentTable customerName"><strong>CustomerName:</strong> {props.customerName}</p>
                <p className = "InstallmentTable customerId"><strong>CustomerId:</strong> {props.customerId}</p>
                <p className = "InstallmentTable numberOfInstallments"><strong>NumberOfInstallments:</strong> {props.numberOfInstallments}</p>
                <p className = "InstallmentTable installment"><strong>Installment:</strong> {props.installment}</p>
            </div>

            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Debit</th>
                    <th scope="col">Payed</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>

                
                <tbody>
                  {installmentCreator(12,"20/05/2023",1,20000)}
                </tbody>
            </table>
        </div>
        </>
    ) 
};


export default InstallmentsPage;