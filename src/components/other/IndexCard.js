import React from "react";
import { Link } from "react-router-dom"
import { GiCardAceSpades } from "react-icons/gi"

export default function IndexCard() {
  return (
    <div className="bg-gradient min-h-2/5 rounded-md pt-12 custom-pink-box-shadow text-lighter-blue font-black">
      <div className="bg-gradient m-10 p-16 rounded-t-md py-5 m-auto">
        <h1 className="logo text-4xl mb-16 transform scale-200 mx-10 text-center text-darker-blue text-shadow-pink">
          Get 21   <GiCardAceSpades className=" m-auto rounded-md bg-gradient custom-inner-box-shadow  transparent opacity-95 transform -rotate-6" />
        </h1>
      </div>
      <div className="bg-darker-blue rounded-b-md py-5">
        <p className="mx-12 my-14 text-2xl text-center">
          A game based on the classic card game Black Jack.
        </p>
        <p className="text-xl mx-12 text-center">
          <Link to="/login" className="hover-button rounded-lg bg-gradient text-darkest-blue mx-2 py-3 px-12 font-extrabold custom-inner-box-shadow text-xl">
            Log in
          </Link>
          in or
          <Link to="/signup" className="hover-pink-button rounded-lg pink-blue-gradient py-3 px-12 mx-2  text-darkest-blue font-extrabold custom-inner-box-shadow text-xl">
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
