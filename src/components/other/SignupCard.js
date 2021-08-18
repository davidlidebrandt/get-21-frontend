import React from 'react'

export default function SignupCard() {
    return (
        <div className="bg-gradient w-full min-h-2/5 rounded-md pt-12 custom-pink-box-shadow text-lighter-blue font-black">
             <form>
                 <h3 className="text-3xl text-center text-4xl transform mb-12 mx-10 text-center text-darker-blue text-shadow-pink">Log In</h3>
      <div className="w-2/3 m-auto text-darker-blue font-extrabold">
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
        <label className="text-xl text-left block">
        Repeat Password
      </label>
      <input
        className="block mb-2 text-xl font-extrabold  w-full rounded-md border-b-2 border-color-darker-blue bg-lighter-blue focus:outline-none py-1 focus-bg custom-box-shadow "
        type="repeat-password"
        name="repeat-password"
        required
      />
    
       <div className="my-8 pt-8 text-center">
            <button type="submit" className="hover-pink-button block w-full rounded-lg pink-blue-gradient py-3 px-12 mx-2  mb-12 text-darkest-blue font-extrabold custom-inner-box-shadow text-2xl">
              Log In
            </button>
            </div>
            </div>
    </form>
      </div>
    )
}
