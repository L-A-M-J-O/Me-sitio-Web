import React from 'react'

import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouzz } from '@fortawesome/free-brands-svg-icons'
import '../Home/Home.css'

function Home() {
  return (
    <header>
        <nav>
            <div className='container-main'>
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
                    menu
                </div>
            </div>
        </nav>
        <div className='glass'>
            <h1 className='h-glass'>Alan</h1>
            <div className=''
        </div>
    </header>
  )
}

export default Home