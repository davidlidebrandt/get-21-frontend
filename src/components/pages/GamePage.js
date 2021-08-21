import React from 'react'
import GameCard from '../other/GameCard'
import GameHeader from '../other/GameHeader'

export default function GamePage() {
    return (
        <div id="game-page">
        <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
            <div className="col-span-12">
                <GameHeader/>
            </div>
            <div className="col-span-12 xl:col-span-8 xl:col-start-3 row-span-6 px-2 place-items-center py-14"> <GameCard/></div>
            </div>
           
            </div>
    )
}
