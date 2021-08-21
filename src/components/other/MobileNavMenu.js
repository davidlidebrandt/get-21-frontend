import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { GiCardAceSpades } from "react-icons/gi"
import { RiCloseCircleFill } from "react-icons/ri"
import svg from "../../assets/images/svg.svg"

export default function MobileNavMenu({currentPage, setDisplayHelp}) {
    const [displayMenuModal, setDisplayMenuModal] = useState("hidden");

    return (
        <>
        <div className={displayMenuModal + " absolute top-0 left-0 w-full px-10 bg-gradient custom-inner-box-shadow z-50"}>
            <div className="w-1/3 m-auto">
            <h1 className="logo text-4xl my-16 transform scale-125  transition-all duration-700 rounded-md font-black text-center text-darker-blue text-shadow-pink">
            Get 21 
          </h1>
        {
            currentPage !== "login" ? (
              <Link to="/login" className="text-center block  my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
            Log In 
          </Link>
            ) : ( null )
          }

          {
            currentPage !== "signup" ? (
              <Link to="/signup" className="text-center block my-10 m-auto py-4 rounded-lg pink-blue-gradient w-full font-extrabold custom-inner-box-shadow hover-pink-button">
              Sign Up 
            </Link>
            ) : ( null )
          }
           <button onClick={()=> {setDisplayMenuModal("hidden"); setDisplayHelp(""); }} className="text-center block my-10 mb-0 m-auto w-full py-4 rounded-lg bg-gradient font-extrabold custom-inner-box-shadow hover-button">
            Help 
          </button>
          <button className="block m-auto" onClick={()=> { setDisplayMenuModal("hidden")}}>
          <RiCloseCircleFill size="50" className="text-darker-blue my-10"/>
          </button>
        
        </div>
        </div>
        <nav className="xl:hidden col-span-12 grid grid-cols-2">
          <div className="bg-gradient">
          <Link to="/">
          <h1 className="logo text-3xl float-left my-6 ml-6 transform  transition-all duration-700 rounded-md font-black text-center text-darker-blue text-shadow-pink">
            Get 21 
          </h1>
          </Link>
          </div>
          <div className="bg-darker-blue">
              <div className="float-right my-6 mr-6">
              <button onClick={()=> { setDisplayMenuModal("")
              }} className="">  <img className="h-10 w-10" src={ svg } alt="Hamburger icon"></img>  </button> 
              </div>
            </div>
    </nav>
    </>
    )
}
