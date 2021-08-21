import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserAstronaut } from "react-icons/fa"
import { RiCloseCircleFill } from "react-icons/ri"

export default function StartmenuCard() {
    const [displayLeaderBoard, setDisplayLeaderBoard] = useState("hidden")

    return (
        <div className="bg-gradient w-full h-max-content rounded-md text-xl custom-pink-box-shadow text-darker-blue font-black">
            <div className={displayLeaderBoard + " center-absolute min-h-50 bg-darker-blue top-0 text-pink z-50 w-1/2 rounded-md text-center px-10 custom-inner-box-shadow"}>
            <h3 className="text-3xl my-6"><span className="text-lighter-blue">Leader</span> <span className="text-pink">Board</span></h3>
            <div className="w-full py-4 my-2 bg-lighter-blue rounded-md text-darker-blue">User Score</div>
            <div className="w-full py-4 my-2 pink-blue-gradient rounded-md text-white">User Score</div>
            <div className="w-full py-4 my-2 bg-lighter-blue rounded-md text-darker-blue">User Score</div>
            <div className="w-full py-4 my-2 pink-blue-gradient rounded-md text-white">User Score</div>
            <div className="w-full py-4 my-2 bg-lighter-blue rounded-md text-darker-blue">User Score</div>
            <div className="w-full py-4 my-2 pink-blue-gradient rounded-md text-white">User Score</div>
            <button className="my-10" onClick={(e)=>{setDisplayLeaderBoard("hidden")}}><RiCloseCircleFill size="50" className="text-pink"/></button>
            </div>
           <div className="grid grid-cols-12">
              <div className="col-span-12 text-center">
                  <h3 className="my-12 text-3xl text-center transform text-center text-darker-blue">
                  <span className="">Welcome </span><span className="text-pink opacity-90">User</span>
                  </h3>
                  </div> 
              <div className="col-span-6 bg-darker-blue px-16 text-darkest-blue rounded-bl-md">
              <Link to="/gamepage" className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
            New Game
          </Link>
          <Link to="/signup" className="text-center block my-10 m-auto py-4 rounded-lg pink-blue-gradient text-white w-full font-extrabold custom-inner-box-shadow hover-pink-button">
            Options
          </Link>
          <button onClick={(e)=> {setDisplayLeaderBoard("")}} className="text-center block my-10 m-auto py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow hover-button">
            Leader Board
          </button>
              </div> 
              <div className="col-span-6 bg-darker-blue rounded-br-md text-lighter-blue text-center">
                  <div className="bg-gradient m-auto rounded-md mx-8 my-10 p-3 custom-inner-box-shadow">
                      <div className="bg-darker-blue rounded-md pt-4">
                         <div className=""><FaUserAstronaut size="80" className="m-auto mb-4 p-2 pink-blue-gradient rounded-md text-darker-blue custom-inner-box-shadow"/></div> 
                  <div className="py-5">Your high score:
                  <p className="text-2xl text-white">900</p>
                  </div>
                  </div>
                  </div>
               </div> 
            </div> 
        </div>
    )
}
