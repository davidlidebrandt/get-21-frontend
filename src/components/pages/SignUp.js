import React from 'react'
import { useEffect } from 'react'
import NavMenu from '../other/NavMenu'
import SignupCard from '../other/SignupCard'


export default function SignUp({currentPage, setCurrentPage}) {
    useEffect(()=> {
        setCurrentPage("signup")
    }, [])

    return (
        <div id="login">
        <div className="grid grid-cols-12 grid-rows-6 min-h-screen">
        <div className="col-span-2 row-span-6 w-full">
        <NavMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
        <div className="col-span-4 col-start-5 row-span-6 grid place-items-center">
            <SignupCard/>
        </div> 
        </div>
    </div>
    )
}