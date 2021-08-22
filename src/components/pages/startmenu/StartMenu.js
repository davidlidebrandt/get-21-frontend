import React from 'react'
import StartmenuCard from './subcomp/StartmenuCard'

export default function StartMenu() {
    return (
        <div className="col-span-12 xl:col-span-6 xl:col-start-4 row-span-6 grid place-items-center px-2">
            <StartmenuCard/>
        </div> 
    )
}
