import React from 'react'

export default function Home() {
    return (
        <div id="home">
            <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
            <div className="col-span-4 row-span-6 w-full">
                <div className="w-1/2 h-full bg-darker-blue text-2xl opacity-95 grid place-items-center">
                    <div>
                    <button className="block my-6 m-auto px-12 py-4 rounded-lg bg-gradient">Log In</button>
                    <button className="block my-6 m-auto px-12 py-4 rounded-lg bg-gradient">Sign Up</button>
                    <button className="block my-6 m-auto px-12 py-4 rounded-lg bg-gradient">Help</button>
                    </div>
                </div>
            </div>
            <div className="col-span-4 row-span-6 grid place-items-center transform">
                <div className="bg-gradient h-1/3 rounded-md py-12">
                <h1 className="logo text-4xl transform scale-200 mx-10 text-center text-darker-blue">Get 21</h1>
                <p className="mx-8 mt-8 text-2xl text-center">A game based on the classic card game Black Jack. </p>
                <p className="text-xl mx-8 text-center">Log in or Sign up to create an account and start playing</p>
                </div>
            </div> 
            </div>
        </div>
    )
}
