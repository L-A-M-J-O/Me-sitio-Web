import React from 'react'

import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../Home/Home.css'

function Home() {
  return (
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
        </div>
    </div>
  )
}

export default Home