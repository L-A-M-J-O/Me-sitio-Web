import React from 'react'

import '../Navbar/Navbar.css'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <header>
        <Link href='#' className='logo'>Logo</Link>
      </header>
    </div>
  )
}

export default Navbar