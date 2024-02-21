import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-cyan-700 text-white'>
      <div className='container navbar'>
        <h1>logon</h1>
        <ul className='flex gap-4'>
            <li>home</li>
            <li>About</li>
            <li>services</li>
            <li>contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
