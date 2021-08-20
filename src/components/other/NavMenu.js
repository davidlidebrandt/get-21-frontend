import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiCardAceSpades } from "react-icons/gi"
import { RiCloseCircleFill } from "react-icons/ri"
import MobileNavMenu from "./MobileNavMenu";

export default function NavMenu({currentPage, setCurrentPage}) {
  
  const [displayHelp, setDisplayHelp] = useState("hidden");

  return (
    <>
    <div className={displayHelp + " center-absolute min-h-50 bg-darker-blue top-0 text-pink z-50 w-1/2 rounded-md text-center px-10 custom-inner-box-shadow"}>
    <button className="my-10" onClick={(e)=>{setDisplayHelp("hidden")}}><RiCloseCircleFill size="50" className="text-pink"/></button>
    </div>
    <nav className="hidden xl:grid h-full bg-darker-blue text-xl opacity-95 place-items-center text-darkest-blue relative">
      <div className="w-full">
        <div className="h-1/6 w-full rounded-t-md  m-auto absolute top-0 rounded-md bg-gradient">
          <Link to="/">
          <h1 className="logo text-3xl mt-14 transform scale-150 hover-scale-175 transition-all duration-700 rounded-md font-black text-center text-darker-blue text-shadow-pink">
            Get 21 <GiCardAceSpades className="inline m-0 rounded-md bg-gradient custom-inner-box-shadow transform rotate-6 opacity-95" />
          </h1>
          </Link>
        </div>
        <div className="px-14">
          {
            currentPage !== "login" ? (
              <Link to="/login" className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
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
          
  
          <button onClick={()=> {setDisplayHelp("")}} className="text-center block my-10 m-auto w-2/4 py-4 mt-20 rounded-lg bg-gradient font-extrabold custom-inner-box-shadow hover-button">
            Help 
          </button>
        </div>
      </div>
    </nav>
          <MobileNavMenu/>
   
    </>
  );
}
