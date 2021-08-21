import React from 'react'
import { useState } from 'react'

export default function GameHeader() {
    
    const [displayWarningModal, setDisplayWarningModal] = useState("hidden");
    const [warningMessage, setWarningMessage] = useState("");

    function displayWarning(message) {
        setWarningMessage(message)
        setDisplayWarningModal("")
    }

    function hideWarningModal() {
        setDisplayWarningModal("hidden")
    }

    return (
        <>
        <div className="center-absolute min-h-50 w-1/2 border-4 border-color-pink">
            <div>{warningMessage}</div>
            
        <button className="my-10" onClick={(e)=>{hideWarningModal()}}><RiCloseCircleFill size="50" className="text-pink"/></button>
        </div>
        <nav className="bg-gradient py-9">
            <h1 className="inline text-3xl ml-12  rounded-md font-black text-center text-darker-blue text-shadow-pink">
            Get 21 
          </h1>
            <div className="float-right">
            <button  className="inline mr-12 hover-button rounded-lg bg-gradient text-darkest-blue py-3 px-12 font-extrabold custom-inner-box-shadow text-xl">Restart Game</button>
            <button onClick={()=> {displayWarning("This game will be lost, proceed?")}} className="inline mr-12 hover-pink-button rounded-lg pink-blue-gradient py-3 px-12  text-white font-extrabold custom-inner-box-shadow text-xl">Go back</button>       
            </div>
               

         
        </nav>
        </>
    )
}
