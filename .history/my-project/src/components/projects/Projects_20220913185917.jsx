import '../../components/projects/Projects.css'

// import { r1 } from '../../assets/img/jera.png';
// import { r2 } from '../../assets/img/runas.png'
// import { r3 } from '../../assets/img/sowelu.png'

import { faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from 'react'

function Projects() {   
  return (
    <div className='project'>
        <div className='row'>
          <div>
            <FontAwesomeIcon icon={faHome} />
            <FontAwesomeIcon icon={solid('user-secret')} />
            <FontAwesomeIcon icon={regular('coffee')} />
            <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
            <FontAwesomeIcon icon={brands('twitter')} />
          </div>
        </div>
    </div>
  )
}

export default Projects