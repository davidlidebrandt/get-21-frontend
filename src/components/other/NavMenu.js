import React from "react";
import { Link } from "react-router-dom";
import { RiLoginCircleFill, RiAccountPinCircleFill } from "react-icons/ri"
import { MdHelp } from "react-icons/md"
import { GiCardAceSpades } from "react-icons/gi"

export default function NavMenu() {
  return (
    <nav className="w-1/2 h-full bg-darker-blue text-xl opacity-95 grid place-items-center text-darkest-blue relative">
      <div className="w-full">
        <div className="h-1/6 w-full rounded-t-md  m-auto absolute top-0 rounded-md bg-gradient">
          <Link to="/">
          <h1 className="logo text-3xl mt-14 transform scale-150 rounded-md font-black text-center text-darker-blue text-shadow-pink">
            Get 21 <GiCardAceSpades className="inline m-0 rounded-md bg-gradient custom-inner-box-shadow transform rotate-6 opacity-95" />
          </h1>
          </Link>
        </div>
        <div className="px-14">
          <Link to="/login" className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
            Log In 
          </Link>
          <Link to="/signup" className="text-center block my-10 m-auto py-4 rounded-lg pink-blue-gradient w-full font-extrabold custom-inner-box-shadow hover-pink-button">
            Sign Up 
          </Link>
          <button className="text-center block my-10 m-auto w-2/4 py-4 mt-20 rounded-lg bg-gradient font-extrabold custom-inner-box-shadow hover-button">
            Help 
          </button>
        </div>
      </div>
    </nav>
  );
}
