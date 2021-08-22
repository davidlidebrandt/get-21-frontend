import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginCard() {
    return (
        <div className="bg-gradient w-full my-10 mx-3 rounded-md pt-12 custom-pink-box-shadow text-lighter-blue font-black">
             <form>
                 <h3 className="text-3xl text-center text-4xl transform mb-12 mx-10 text-center text-darker-blue">
                   <span className="">Log </span><span className="text-pink opacity-80">In</span>
                   </h3>
      <div className="w-5/6 xl:w-2/3 m-auto text-darker-blue font-extrabold">
      <label className="text-xl text-left block">
       Username
      </label>
      <input
        className="block text-xl font-extrabold mb-4 w-full rounded-md border-b-2 border-color-darker-blue bg-lighter-blue focus:outline-none py-1 focus-bg custom-box-shadow "
        type="text"
        name="username"
        required
      />
      <label className="text-xl text-left block">
        Password
      </label>
      <input
        className="block mb-2 text-xl font-extrabold  w-full rounded-md border-b-2 border-color-darker-blue bg-lighter-blue focus:outline-none py-1 focus-bg custom-box-shadow "
        type="password"
        name="password"
        required
      />
    
       <div className="my-8 pt-8 text-center">
            <button type="submit" className="hover-pink-button block w-full rounded-lg pink-blue-gradient py-3 px-12 mb-16 text-white font-extrabold custom-inner-box-shadow text-2xl">
              Log In
            </button>
            </div>
            <p className="text-center text-xl mb-12 ">Not signed up yet? <Link  to="/signup" className="block xl:inline mt-4 bg-gradient rounded-md px-4 py-2 text-darkest-blue custom-inner-box-shadow hover-button">Sign Up</Link></p>
            </div>
    </form>
      </div>
    )
}
