import React from 'react'

import '../Navbar/Navbar.css'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <header>
        <a href='#' className='logo'>Logo</a>
      </header>
    </div>
  )
}

export default Navbar