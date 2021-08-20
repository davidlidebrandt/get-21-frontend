import React from "react";
import { Link } from "react-router-dom"
import { GiCardAceSpades } from "react-icons/gi"

export default function IndexCard() {
  return (
    <div className="bg-gradient w-full rounded-md pt-12 my-10 mx-3 height-max-content custom-pink-box-shadow text-lighter-blue font-black">
      <div className="bg-gradient m-10 p-16 rounded-t-md py-5 m-auto">
        <h1 className="logo text-4xl mb-16 transform scale-200 mx-10 text-center text-darker-blue text-shadow-pink">
          Get 21 
        </h1>
      </div>
      <div className="bg-darker-blue rounded-b-md p-5">
        <p className="mx-12 my-14 text-2xl text-center">
          A game based on the classic card game Black Jack.
        </p>
        <p className="text-xl xl:mx-12 text-center">
          <Link to="/login" className="block xl:inline w-full hover-button rounded-lg bg-gradient text-darkest-blue py-3 px-12 font-extrabold custom-inner-box-shadow text-xl">
            Log in
          </Link>
          <div className="xl:inline mx-2">in or</div>
        
          <Link to="/signup" className="block xl:inline w-full hover-pink-button rounded-lg pink-blue-gradient py-3 px-12  text-white font-extrabold custom-inner-box-shadow text-xl">
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
