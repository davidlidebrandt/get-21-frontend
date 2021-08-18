import React from 'react'

export default function LoginCard() {
    return (
        <div className="bg-gradient w-full min-h-2/5 rounded-md pt-12 custom-pink-box-shadow text-lighter-blue font-black">
             <form>
                 <h3 className="text-3xl text-center text-4xl transform mb-12 mx-10 text-center text-darker-blue text-shadow-pink">Log In</h3>
      <div className="w-2/3 m-auto text-darker-blue font-extrabold">
      <label className="text-xl text-left block">
       Username
      </label>
      <input
        className="block mb-2 w-full rounded"
        type="text"
        name="username"
        required
      />
      <label className="text-xl text-left block">
        Password
      </label>
      <input
        className="block mb-2 w-full rounded"
        type="password"
        name="password"
        required
      />
    
       <div className="my-8 pt-8 text-center">
            <button type="submit" className="hover-button rounded-lg bg-gradient py-3 px-12 mx-2  mb-12 text-darkest-blue font-extrabold custom-inner-box-shadow text-2xl">
              Log In
            </button>
            </div>
            </div>
    </form>
      </div>
    )
}