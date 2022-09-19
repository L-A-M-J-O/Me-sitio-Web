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
            <li><Link href='#' className='active'>Home</Link></li>
            <li><Link to='me' href='#' className=''>Me</Link></li>
            <li><Link href='#' className=''>Job</Link></li>
            <li><Link href='#' className=''>Projects</Link></li>
          </ul>
        </header>
        <div className='content'>
          <h2>Alan Naranjo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos fugiat! Quis nihil ullam eius quas adipisci illum cumque, molestias voluptatibus labore nostrum? Cupiditate perferendis eveniet veniam officia nesciunt harum.</p>
          <Link href='#'>Read More</Link>
        </div>
        <div className='img-icon'>
          <img src={ logotipo } alt='logotipo'/>
        </div>
        <ul className='sci'>
          <li><Link href='#'><img src={linkedin} alt='linkedin'/></Link></li>
          <li><Link href='#'><img src={instagram} alt='instagram'/></Link></li>
          <li><Link href='#'><img src={github} alt='github'/></Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar