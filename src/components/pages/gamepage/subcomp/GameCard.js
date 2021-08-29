import React from 'react'
import { useState, useEffect } from 'react'

export default function GameCard({score, setScore}) {
    
    
    function generateDeck() {
        const cardTypes = ['HEARTS', 'SPADES', 'CLUBS', 'DIAMONDS']
        let cards = []
    
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
        
        return cards
    }


    function calcTotal(cardOne, cardTwo) {
        let cardOneValue
        let cardTwoValue

        
        if (cardOne[1] === "J" || cardOne[1] === "Q" || cardOne[1] === "K") {
            cardOneValue = 10
        }
        else if (cardOne[1] === "A") {
            cardOneValue = 11
        }
        else { cardOneValue = cardOne[1]}

        if (cardTwo[1] === "J" || cardTwo[1] === "Q" || cardTwo[1] === "K") {
            cardTwoValue = 10
        }
        else if (cardTwo[1] === "A") {
            cardTwoValue = 11
        }
        else { cardTwoValue = cardTwo[1]}

        return cardOneValue + cardTwoValue
    }


    const [deck, setDeck] = useState(generateDeck());

    
    const [computerCardOne, setComputerCardOne] = useState(deck[Math.floor(Math.random() * 51)]);
    const [computerCardTwo, setComputerCardTwo] = useState(deck[Math.floor(Math.random() * 51)]);

    const [userCardOne, setUserCardOne] = useState(deck[Math.floor(Math.random() * 51)]);
    const [userCardTwo, setUserCardTwo] = useState(deck[Math.floor(Math.random() * 51)]);
    const [userTotal, setUserTotal] = useState(calcTotal(userCardOne, userCardTwo))

    function generateCard(cardToSet) {
        cardToSet(Math.floor(Math.random() * 51))
    }



    return (
        <div className="bg-darker-blue h-full rounded-md">
            <div className="pink-blue-gradient rounded-t-md py-8">
            <h1 className="inline text-4xl ml-12  rounded-md font-black text-center text-white text-shadow-pink">
            Get 21 
          </h1>
            </div>
            <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
            <div className="h-48 w-36 inline-block  border-2 rounded-md">
              <div>{userCardOne[0]}</div>
              <div>{userCardOne[1]}</div>
            </div>
            <div className="h-48 w-36 inline-block border-2 rounded-md">
            <div>{userCardTwo[0]}</div>
              <div>{userCardTwo[1]}</div>
            </div>
            </div>
            <div className="col-span-12 text-center">
                {userTotal}
            </div>
            </div>
            
        </div>
    )
}
