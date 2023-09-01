import React from "react";
export default function ErrorComponent({errorMessage}){
    return(
        <div className= "errorMessageContainer">
            <h4 className="errorMessage">{errorMessage.Message}</h4>
            <div className = "errorImageContainer">
                <img alt= "There is an error happening" src = "../errorImage.png"/>
            </div>
        </div>
    )
}