import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../Home/Home.css'

function Home() {
  return (
    <div className='container-main'>

    <FontAwesomeIcon icon={faGithub}/>
    <FontAwesomeIcon icon={faLinkedin}/>
    <FontAwesomeIcon icon={faInstagram}/>
    </div>
  )
}

export default Home