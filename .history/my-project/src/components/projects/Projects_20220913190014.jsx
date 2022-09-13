import '../../components/projects/Projects.css'

// import { r1 } from '../../assets/img/jera.png';
// import { r2 } from '../../assets/img/runas.png'
// import { r3 } from '../../assets/img/sowelu.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import React from 'react'

function Projects() {   
  return (
    <div className='project'>
        <div className='row'>
          <div>
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