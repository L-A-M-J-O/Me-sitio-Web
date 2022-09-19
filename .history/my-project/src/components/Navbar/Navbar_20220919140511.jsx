import React from 'react'

import '../Navbar/Navbar.css'


function Navbar() {
  return (
    <section>
      <div className='container-m'>
        <header>
          <a href='#' className='logo'>Logo</a>
          <ul>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#' className=''>Me</a></li>
            <li><a href='#' className=''>Job</a></li>
            <li><a href='#' className=''>Projects</a></li>
          </ul>
        </header>
        <div className='content'>
          <h2>Alan Naranjo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos fugiat! Quis nihil ullam eius quas adipisci illum cumque, molestias voluptatibus labore nostrum? Cupiditate perferendis eveniet veniam officia nesciunt harum.</p>
        </div>
      </div>
    </section>
  )
}

export default Navbar