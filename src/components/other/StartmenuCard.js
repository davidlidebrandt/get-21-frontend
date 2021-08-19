import React from 'react'
import { Link } from 'react-router-dom'

export default function StartmenuCard() {
    return (
        <div className="bg-gradient w-full rounded-md text-xl custom-pink-box-shadow text-darker-blue font-black">
           <div className="grid grid-cols-12">
              <div className="col-span-12 text-center">
                  <h3 className="my-12 text-3xl text-center transform text-center text-darker-blue text-shadow-pink">Welcome User</h3>
                  </div> 
              <div className="col-span-6 bg-darker-blue px-16 text-darkest-blue rounded-bl-md">
              <Link to="/login" className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
            New Game
          </Link>
          <Link to="/signup" className="text-center block my-10 m-auto py-4 rounded-lg pink-blue-gradient w-full font-extrabold custom-inner-box-shadow hover-pink-button">
            Options
          </Link>
          <Link to="/signup" className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
            Leader Board
          </Link>
              </div> 
              <div className="col-span-6 bg-darker-blue rounded-br-md text-darker-blue text-center">
                  <div className="bg-gradient m-auto rounded-md mx-8 my-10 py-10">
                  <div className="mb-10">Your high score: 900</div>
                  <div className="mb-10">Email: example@gmail.com</div>
                  </div>
               </div> 
            </div> 
        </div>
    )
}
