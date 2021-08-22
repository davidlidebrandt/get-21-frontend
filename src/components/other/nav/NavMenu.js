import React from "react";
import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri"
import MobileNavMenu from "./subcomp/MobileNavMenu";
import DesktopNavMenu from "./subcomp/DesktopNavMenu";

export default function NavMenu({currentPage}) {
  
  const [displayHelp, setDisplayHelp] = useState("hidden");

  return (
    <>
    <div className={displayHelp + " center-absolute min-h-50 bg-darker-blue top-0 text-pink z-50 w-1/2 rounded-md text-center px-10 custom-inner-box-shadow"}>
    <button className="my-10" onClick={(e)=>{setDisplayHelp("hidden")}}><RiCloseCircleFill size="50" className="text-pink"/></button>
    </div>
          <DesktopNavMenu currentPage={currentPage} setDisplayHelp={setDisplayHelp}/>
          <MobileNavMenu currentPage={currentPage} setDisplayHelp={setDisplayHelp}/>
    </>
  );
}
