import '../Home/Home.css'

import runa from '../../assets/img/runawhite.png'

import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Home() {

    const [fix, setFix] = useState(false)
    
    function setFixed (){
        if(window.scrollY >= 30){
            setFix(true)
        }
        else {
            setFix(false)
        }
    }

    window.addEventListener('scroll', setFixed)
  return ( 
    <>
    <header id='home'>
        <nav className={fix ? 'nav fixed': 'nav'}>
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
        <div className='glass' >
            <h1 className='h-glass'>Alan</h1>
            <div>
                <div>
                    <img src={runa} alt='runa' width={40}/>
                </div>
                <div>
                    <h2>Portfolio</h2>
                    <p><i></i></p>
                    <p>I am a guy who wants to create Yarbis from the Tony Stark movie, it may sound fanciful but it can be done if you imagine it means it can be done, I live in Madrid Spain and I created several test icommerce, as well as shipments. . pages, and I keep trying to find many more ways to improve and innovate web development, Start. .</p>
                    <Link to='about' className='media-icon-arrow'>
                        <button className='btn-runa'><FontAwesomeIcon className='runa' icon={faArrowRight}/> Read More</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='me-img'>
        </div>  
    </header>
    </>
  )
}

export default Home