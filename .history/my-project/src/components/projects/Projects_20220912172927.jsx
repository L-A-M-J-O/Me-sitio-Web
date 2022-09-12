import '../../components/projects/Projects.css'
import React from 'react'
import  me  from '../../assets/img/me.jpg';

function Projects() {
  return (
    <div className='project'>
        <div className='c-hero-banner has-no-image'>
            <div className='c-hero-banner__background'>
                <picture>{me}</picture>
            </div>
        </div>
    </div>
  )
}

export default Projects