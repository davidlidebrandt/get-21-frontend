import React from 'react'
import { useEffect } from 'react'
import NavMenu from '../other/NavMenu'
import SignupCard from '../other/SignupCard'


export default function SignUp({currentPage, setCurrentPage}) {
    useEffect(()=> {
        setCurrentPage("signup")
    }, [])

    return (
        <div id="signup">
        <div className="grid grid-cols-12 xl:grid-rows-6 min-h-screen w-full">
        <div className="col-span-12  xl:col-span-2 xl:row-span-6">
        <NavMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 row-span-6 grid place-items-center px-2">
            <SignupCard/>
        </div> 
        </div>
    </div>
    )
}