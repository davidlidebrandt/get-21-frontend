import React from 'react'
import { useState } from 'react'

export default function GameCard({score, setScore}) {
    const cardTypes = ['HEARTS', 'SPADES', 'CLUBS', 'DIAMONDS']
    let cards = []
    
    function generateDeck() {
    
        for(let i =0; i < cardTypes.length; i++) {
            for(let j = 2; j <= 13; j++) {
                if(j === 13) {
                    cards.push([cardTypes[i], "A"])
                }
                else if(j === 12) {
                    cards.push([cardTypes[i], "K"])
                }
                else if(j === 11) {
                    cards.push([cardTypes[i], "Q"])
                }
                else if(j === 10) {
                    cards.push([cardTypes[i], "J"])
                }
                else {
                    cards.push([cardTypes[i], j])
                }
            }
        }
    }

    generateDeck();
    
    const [computerCardOne, setComputerCardOne] = useState(cards[Math.floor(Math.random() * 51)]);
    const [computerCardTwo, setComputerCardTwo] = useState(cards[Math.floor(Math.random() * 51)]);

    const [userCardOne, setUserCardOne] = useState(cards[Math.floor(Math.random() * 51)]);
    const [userCardTwo, setUserCardTwo] = useState(cards[Math.floor(Math.random() * 51)]);
    const [userTotal, setUserTotal] = useState(userCardOne[1] + userCardTwo[1])

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
            <div className="">
                <div className="w-1/2 inline-block">
            <div className="grid place-items-center h-48 w-36  border-2 rounded-md">
                <div>{userCardOne[0]}</div>
                <div>{userCardOne[1]}</div>
            </div>
            </div>
            <div className="w-1/2 inline-block">
            <div className="grid place-items-center h-48 w-36 x border-2 rounded-md">
                <div>{userCardTwo[0]}</div>
                <div> {userCardTwo[1]}</div>  
            </div>
            </div>
            <div className="text-center">{userTotal}</div>
            </div>
        
            
        </div>
    )
}
