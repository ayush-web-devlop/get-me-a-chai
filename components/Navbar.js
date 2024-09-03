import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16'>
      <div className='logo font-bold'>Get me a chai</div>  
      <ul className='flex justify-between gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
