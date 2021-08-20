import React from 'react'
import NavMenu from '../other/NavMenu'
import StartmenuCard from '../other/StartmenuCard'

export default function StartMenu() {
    return (
        <div id="start-menu">
        <div className="grid grid-cols-12 xl:grid-rows-6 min-h-screen w-full">
        <div className="col-span-12  xl:col-span-2 xl:row-span-6">
        <NavMenu/>
        </div>
        <div className="col-span-6 col-start-4 row-span-6 grid place-items-center">
            <StartmenuCard/>
        </div> 
        </div>
    </div>
    )
}
