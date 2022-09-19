import React from 'react'

import logotipo from '../../assets/img/logotipo.png'
import icon from '../../assets/img/icon.png'

import '../Navbar/Navbar.css'


function Navbar() {
  return (
    <section>
      <div className='container-m'>
        <header>
          <img src={ icon} alt='icon' width={40}/>
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
          <a href='#'>Read More</a>
        </div>
        <div className='img-icon'>
          <img src={ logotipo} alt='logotipo'/>
        </div>
        <ul className='sci'>
          <li><a href='#'><img src='' alt='linkedin'/></a></li>
          <li><a href='#'><img src='' alt='linkedin'/></a></li>
          <li><a href='#'><img src='' alt='linkedin'/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar