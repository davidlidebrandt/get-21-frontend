import React from 'react'

export default function Home() {
    return (
        <div id="home">
            <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
            <div className="col-span-4 row-span-6 w-full">
                <div className="w-1/2 h-full bg-darker-blue text-2xl opacity-95 grid place-items-center text-darkest-blue">
                    <div>
                    <button className="block my-10 m-auto px-12 py-4 rounded-lg bg-gradient w-full font-extrabold custom-pink-box-shadow">Log In</button>
                    <button className="block my-10 m-auto px-12 py-4 rounded-lg bg-gradient w-full font-extrabold custom-pink-box-shadow">Sign Up</button>
                    <button className="block my-10 m-auto px-12 py-4 rounded-lg bg-gradient w-full font-extrabold custom-pink-box-shadow">Help</button>
                    </div>
                </div>
            </div>
            <div className="col-span-4 row-span-6 grid place-items-center transform text-darker-blue font-black">
                <div className="bg-gradient min-h-2/5 rounded-md py-12">
                <h1 className="logo text-4xl transform scale-200 mx-10 text-center text-darker-blue text-shadow-pink">Get 21</h1>
                <div className="text-center w-max m-auto custom-pink-box-shadow rounded-md transparent">
                <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform -rotate-6 border-4 border-color-darker-blue bg-medium-blue shadow-2xl text-xs font-bold custom-pink-box-shadow">
                </div>
                <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform rotate-6 border-4 border-color-darker-blue bg-medium-blue shadow-2xl text-xs font-bold custom-pink-box-shadow">
                </div>
                </div>
                <div className="bg-gradient m-10 rounded-md py-6 custom-pink-box-shadow">
                <p className="mx-8 text-2xl text-center">A game based on the classic card game Black Jack. </p>
                <p className="text-xl mx-8 text-center"><a className="text-darkest-blue">Log in</a> in or <a className="text-darkest-blue">Sign up</a> to create an account and start playing</p>
                </div>
            
                </div>
            </div> 
            </div>
        </div>
    )
}
