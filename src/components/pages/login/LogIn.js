import React from 'react'
import { useEffect } from 'react'
import LoginCard from './subcomp/LoginCard'

export default function LogIn({currentPage, setCurrentPage}) {

    useEffect(()=> {
        setCurrentPage("login")
    })

    

    return (
        <div className="col-span-12 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 row-span-6 grid place-items-center px-2">
            <LoginCard/>
        </div> 
    )
}
