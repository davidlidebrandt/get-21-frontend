import React from "react";
import { Link } from "react-router-dom"

export default function IndexCard() {
  return (
    <div className="bg-gradient min-h-2/5 rounded-md pt-12 custom-pink-box-shadow text-lighter-blue font-black">
      <div className="bg-gradient m-10 p-16 rounded-t-md py-5 m-auto">
        <h1 className="logo text-4xl transform scale-200 mx-10 text-center text-darker-blue text-shadow-pink">
          Get 21
        </h1>
        <div className="text-center m-auto rounded-md transparent">
          <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform -rotate-6 border-4 border-color-darker-blue bg-gradient text-xs font-extrabold text-pink"></div>
          <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform rotate-6 border-4 border-color-darker-blue bg-gradient text-xs font-extrabold text-pink"></div>
        </div>
      </div>
      <div className="bg-darker-blue rounded-b-md py-5">
        <p className="mx-12 my-14 text-2xl text-center">
          A game based on the classic card game Black Jack.
        </p>
        <p className="text-xl mx-12 text-center">
          <Link to="/login" className="hover-button rounded-lg bg-gradient text-darkest-blue mx-2 py-3 px-12 font-extrabold custom-inner-box-shadow text-2xl">
            Log in
          </Link>
          in or
          <Link to="/signup" className="hover-pink-button rounded-lg pink-blue-gradient py-3 px-12 mx-2  text-darkest-blue font-extrabold custom-inner-box-shadow text-2xl">
            Sign up
          </Link>
        </p>
        <p className="text-xl mx-12 text-center mt-6 mb-12">
          To create an account and start playing.
        </p>
      </div>
    </div>
  );
}
