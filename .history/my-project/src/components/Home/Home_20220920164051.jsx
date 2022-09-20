import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../Home/Home.css'

function Home() {
  return (
    <div>
    <FontAwesomeIcon icon={faGithub}/>
    <FontAwesomeIcon icon={faLinkedin}/>
    
    </div>
  )
}

export default Home