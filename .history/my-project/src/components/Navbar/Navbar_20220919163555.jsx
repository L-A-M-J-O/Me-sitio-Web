import React from 'react'

import {Link} from 'react-scroll'

import logotipo from '../../assets/img/logotipo.png'
import icon from '../../assets/img/icon.png'
import instagram from '../../assets/img/instagram.png'
import linkedin from '../../assets/img/linkedin.png'
import github from '../../assets/img/github.png'

import '../Navbar/Navbar.css'


function Navbar() {
  return (
    <section>
      <div className='container-m'>
        <header>
          <Link to='/' className='logo'><img src={ icon} alt='icon' width={30}/></Link>
          <ul>
            <><li href='#' className='active'>Home</li>
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
          <img src={ logotipo } alt='logotipo'/>
        </div>
        <ul className='sci'>
          <li><a href='#'><img src={linkedin} alt='linkedin'/></a></li>
          <li><a href='#'><img src={instagram} alt='instagram'/></a></li>
          <li><a href='#'><img src={github} alt='github'/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar