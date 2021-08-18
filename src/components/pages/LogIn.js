import React from 'react'
import NavMenu from '../other/NavMenu'
import LoginCard from '../other/LoginCard'

export default function LogIn() {
    return (
        <div id="login">
        <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
        <div className="col-span-4 row-span-6 w-full">
        <NavMenu/>
        </div>
        <div className="col-span-4 row-span-6 grid place-items-center">
            <LoginCard/>
        </div> 
        </div>
    </div>
    )
}
