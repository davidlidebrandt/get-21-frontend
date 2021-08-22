import React from "react";
import { Link } from "react-router-dom";

export default function DesktopNavMenu({ currentPage, setDisplayHelp }) {
  return (
    <nav className="hidden xl:grid h-full bg-darker-blue text-xl place-items-center text-darkest-blue relative">
      <div className="w-full">
        <div className="h-1/6 w-full rounded-t-md  m-auto absolute top-0 rounded-md bg-gradient">
          <Link to="/">
            <h1 className="logo text-3xl mt-14 transform scale-150 hover-scale-175 transition-all duration-700 rounded-md font-black text-center text-darker-blue text-shadow-pink">
              Get 21
            </h1>
          </Link>
        </div>
        <div className="px-14">
          {currentPage !== "login" ? (
            <Link
              to="/login"
              className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button"
            >
              Log In
            </Link>
          ) : null}

          {currentPage !== "signup" ? (
            <Link
              to="/signup"
              className="text-center block my-10 m-auto py-4 rounded-lg pink-blue-gradient w-full text-white font-extrabold custom-inner-box-shadow hover-pink-button"
            >
              Sign Up
            </Link>
          ) : null}

          <button
            onClick={() => {
              setDisplayHelp("");
            }}
            className="text-center block my-10 m-auto  py-4 w-full rounded-lg bg-gradient font-extrabold custom-inner-box-shadow hover-button"
          >
            Help
          </button>
        </div>
      </div>
    </nav>
  );
}
