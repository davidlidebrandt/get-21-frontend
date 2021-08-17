import React from 'react'

export default function Home() {
    return (
        <div id="home">
            <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
            <div className="col-span-4 row-span-6 w-full">
                <div className="w-1/2 h-full bg-darker-blue text-2xl opacity-95 grid place-items-center text-darkest-blue relative">
                    <div>
                    <div className="bg-gradient opacity-90 m-10 p-6 rounded-t-md  w-max m-auto absolute top-6 rounded-md">
                <h1 className="logo text-4xl transform scale-150  text-center text-darker-blue text-shadow-pink">Get 21</h1>
                <div className="text-center m-auto rounded-md transparent">
                <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform -rotate-6 border-4 border-color-darker-blue bg-gradient text-xs font-extrabold text-pink">
                </div>
                <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform rotate-6 border-4 border-color-darker-blue bg-gradient text-xs font-extrabold text-pink">
                </div>
                </div>
                </div>
                    <button className="block my-10 m-auto px-12 py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow">Log In</button>
                    <button className="block my-10 m-auto px-12 py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow">Sign Up</button>
                    <button className="block my-10 m-auto px-12 py-4 rounded-lg bg-gradient w-full font-extrabold custom-inner-box-shadow">Help</button>
                    </div>
                </div>
            </div>
            <div className="col-span-4 row-span-6 grid place-items-center transform text-darker-blue font-black">
                <div className="bg-gradient min-h-2/5 rounded-md pt-12 custom-pink-box-shadow">
                    <div className="bg-gradient m-10 p-16 rounded-t-md py-5 m-auto">
                <h1 className="logo text-4xl transform scale-200 mx-10 text-center text-darker-blue text-shadow-pink">Get 21</h1>
                <div className="text-center m-auto rounded-md transparent">
                <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform -rotate-6 border-4 border-color-darker-blue bg-gradient text-xs font-extrabold text-pink">
                </div>
                <div className="m-3 mt-8 h-16 w-10 bg-white rounded-md inline-block transform rotate-6 border-4 border-color-darker-blue bg-gradient text-xs font-extrabold text-pink">
                </div>
                </div>
                </div>
                <div className="bg-gradient rounded-md py-5">
                <p className="mx-8 my-8 text-2xl text-center">A game based on the classic card game Black Jack. </p>
                <p className="text-xl mx-8 text-center"><a className="rounded-lg bg-gradient text-darkest-blue py-3 px-10 font-extrabold custom-inner-box-shadow">Log in</a> in or <a className="rounded-lg bg-gradient py-3 px-10  text-darkest-blue font-extrabold custom-inner-box-shadow">Sign up</a></p>
                <p className="text-xl mx-8 text-center mt-4 mb-12">To create an account and start playing</p>
                </div>
            
                </div>
            </div> 
            </div>
        </div>
    )
}
