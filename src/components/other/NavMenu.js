import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <nav className="w-1/2 h-full bg-darker-blue text-2xl opacity-95 grid place-items-center text-darkest-blue relative">
      <div className="w-full">
        <div className="h-1/6 w-full rounded-t-md  m-auto absolute top-0 rounded-md bg-gradient">
          <h1 className="logo text-4xl mt-14 transform scale-150 rounded-md  text-center text-darker-blue text-shadow-pink">
            Get 21
          </h1>
        </div>
        <div className="px-14">
          <Link to="/login" className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
            Log In
          </Link>
          <Link to="/signup" className="text-center block my-10 m-auto py-4 rounded-lg pink-blue-gradient w-full font-extrabold custom-inner-box-shadow hover-pink-button">
            Sign Up
          </Link>
          <button className="text-center block my-10 m-auto w-2/4 py-4 mt-20 rounded-lg bg-lighter-blue font-extrabold custom-inner-box-shadow hover-button">
            Help
          </button>
        </div>
      </div>
    </nav>
  );
}
