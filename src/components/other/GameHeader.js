import React from 'react'

export default function GameHeader() {
    return (
        <nav className="bg-gradient py-6">
            <h1 className="inline text-3xl ml-12  rounded-md font-black text-center text-darker-blue text-shadow-pink">
            Get 21 
          </h1>
            
                <button className="inline float-right mr-12">Go back</button>
              <button className="inline float-right mr-12">Restart Game</button>

         
        </nav>
    )
}
