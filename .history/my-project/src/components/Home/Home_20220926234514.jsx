import { useState } from 'react'

import runa from '../../assets/img/icon.png'

import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import '../Home/Home.css'

function Home() {

  return ( 
    <>
    <header>
        <nav>
            <div id='home' className='container'>
                <div className='menu'>
                    <ul className='social-media'>
                        <li>
                            <a href='https://github.com/L-A-M-J-O' className='media-icon'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/aelan__30/' className='media-icon'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/alann3009200330092003/' className='media-icon'>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </li>
                    </ul>
                    <ul className='nav-links'>
                        <li>
                            <Link to='home'>Home</Link>
                        </li>
                        <li>    
                            <Link to='about'>About</Link>
                        </li>
                        <li>
                            <Link to='projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='job'>Job</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='glass'>
            <h1 className='h-glass'>Alan</h1>
            <div>
                <div>
                    <img src={runa} alt='runa' width={40}/>
                </div>
                <div>
                    <h2>Portfolio</h2>
                    <p><i>Dios, Hijo de Odin</i></p>
                    <p>Hello my name is alan I think it looks great up there haha I hope you are well I would love to introduce you I was born in Colombia and since I was 15 years old I have dedicated myself to programming. it all started...</p>
                    <Link to='about' className='media-icon-arrow'>
                        <FontAwesomeIcon className='runa' icon={faArrowRight}/>
                        <p>Read More</p>
                    </Link>
                </div>
            </div>
        </div>
        <h1 className='h-regular'>Naranjo</h1>
    </header>
    </>
  )
}

export default Home