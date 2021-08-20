import React from 'react'
import { Link } from "react-router-dom";
import { GiCardAceSpades } from "react-icons/gi"
import { RiCloseCircleFill } from "react-icons/ri"
import svg from "../../assets/images/svg.svg"

export default function MobileNavMenu() {
    return (
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
              <button className="">  <img className="h-10 w-10" src={ svg } alt="Hamburger icon"></img>  </button> 
              </div>
            </div>
    </nav>
    )
}
