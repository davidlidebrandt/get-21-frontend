import React from 'react'
import NavMenu from '../other/NavMenu'
import StartmenuCard from '../other/StartmenuCard'

export default function StartMenu() {
    return (
        <div id="start-menu">
        <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
        <div className="col-span-2 row-span-6 w-full">
        <NavMenu/>
        </div>
        <div className="col-span-6 col-start-4 row-span-6 grid place-items-center">
            <StartmenuCard/>
        </div> 
        </div>
    </div>
    )
}
