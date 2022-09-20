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
            </ul>
        </div>
    <FontAwesomeIcon icon={faGithub}/>
    <FontAwesomeIcon icon={faLinkedin}/>
    <FontAwesomeIcon icon={faInstagram}/>
    </div>
  )
}

export default Home