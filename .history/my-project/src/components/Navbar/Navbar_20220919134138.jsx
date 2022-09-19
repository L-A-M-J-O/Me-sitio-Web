import React from 'react'

import '../Navbar/Navbar.css'


function Navbar() {
  return (
    <section>
      <div className='container'>
        <header>
          <a href='#' className='logo'>Logo</a>
          <ul>
            <li><a href='#' className=''>Home</a></li>
            <li><a href='#' className=''>Me</a></li>
            <li><a href='#' className=''>Job</a></li>
            <li><a href='#' className=''>Projects</a></li>
          </ul>
        </header>
      </div>
    </section>
  )
}

export default Navbar