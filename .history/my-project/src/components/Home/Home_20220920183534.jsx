import { useState} from 'react'

import runa from '../../assets/img/runawhite.png'

import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../Home/Home.css'

function Home() {

    const [state, setstate] = useState( null ) 

    const navbar = document.querySelector("nav");
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");


  return ( 
    <>
    <header>
        <nav>
            <div className='container'>
                <div className='menu'>
                    <ul className='social-media'>
                        <li>
                            <Link to='/' className='media-icon'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='media-icon'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='media-icon'>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </li>
                    </ul>
                    <ul className='nav-links'>
                        <li>
                            <Link to=''>Home</Link>
                        </li>
                        <li>    
                            <Link to=''>About</Link>
                        </li>
                        <li>
                            <Link to=''>Projects</Link>
                        </li>
                        <li>
                            <Link to=''>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className='menu-btn'>
                    <FontAwesomeIcon icon={faBars}/>
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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius molestias placeat quam expedita, nemo perferendis dolorum dolor sed iure. Illum.</p>
                    <Link to='' className='media-icon'>
                        <FontAwesomeIcon className='runa' icon={faArrowRight}/>
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