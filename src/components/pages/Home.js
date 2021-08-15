import React from 'react'

export default function Home() {
    return (
        <div id="home">
            <div className="grid grid-cols-12 grid-rows-6 place-items-center min-h-screen">
            <div className="col-span-12 row-start-2 transform scale-150"><h1 className="logo text-4xl transform mx-10">Get 21</h1></div>
            <div className="col-span-4 row-start-3 bg-blue-400 w-full">Hey</div>
            <div className="col-span-4 row-start-3 text-xl bg-blue-400 w-full">
            <p className="">A game based on the classic card game Black Jack. Log in or Sign up to create an account and start playing</p>
            </div>     
            </div>
        </div>
    )
}
