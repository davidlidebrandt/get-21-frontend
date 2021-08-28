import React from 'react'
import { useState } from 'react'

export default function GameCard({score, setScore}) {
    
    const [computerCardOne, setComputerCardOne] = useState(Math.floor(Math.random() * 11));
    const [computerCardTwo, setComputerCardTwo] = useState(Math.floor(Math.random() * 11));

    const [userCardOne, setUserCardOne] = useState(Math.floor(Math.random() * 11));
    const [userCardTwo, setUserCardTwo] = useState(Math.floor(Math.random() * 11));

    function generateCard(cardToSet) {
        cardToSet(Math.floor(Math.random() * 11))
    }

    return (
        <div className="bg-darker-blue h-full rounded-md">
            <div className="pink-blue-gradient rounded-t-md py-8">
            <h1 className="inline text-4xl ml-12  rounded-md font-black text-center text-white text-shadow-pink">
            Get 21 
          </h1>
            </div>
            <p>{userCardOne}, {userCardTwo}</p>
          

        </div>
    )
}
