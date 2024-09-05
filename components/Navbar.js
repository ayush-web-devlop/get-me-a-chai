'use client'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

function Navbar() {
  
  const [showdropdown, setShowdropdown] = useState(false)


  const { data: session } = useSession()
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  //   }
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16'>
      <div className='logo font-bold'>Get me a chai</div>
      {/* <ul className='flex justify-between gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Login</li>
      </ul> */}
      <div>
        {session &&
          <><button 
          onClick={() => setShowdropdown(!showdropdown)}
          onBlur={() => setTimeout(() => {
            setShowdropdown(false)
          }, 300)}
          id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center" type="button">Options<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>


            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link 
                  href={"/profile"}
                  onClick={() => setShowdropdown(!showdropdown)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                </li>
                <li>
                  <Link 
                  href={"/"}
                  onClick={() => setShowdropdown(!showdropdown)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Homepage</Link>
                </li>
                <li>
                  <Link 
                  onClick={() => signOut()}
                  href={"/"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</Link>
                </li>
              </ul>
            </div></>
        }

        {session ? ""
          :
          <Link href='/login'>
            <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >Login</button>
          </Link>}
      </div>
    </nav>
  )
}

export default Navbar
