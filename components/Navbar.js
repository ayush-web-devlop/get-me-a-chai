import React from 'react'
import Link from 'next/link'

function Navbar() {
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
        <Link href='/login'>
        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
