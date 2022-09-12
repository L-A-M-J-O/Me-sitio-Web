import '../../components/projects/Projects.css'

import { Link } from 'react-router-dom'
import React from 'react'
import  me  from '../../assets/img/me.jpg';

function Projects() {
  return (
    <div className='project'>
        <div className='c-hero-banner has-no-image'>
            <div className='c-hero-banner__background'>
                <picture></picture>
                <picture></picture>
            </div>
            <div className='c-hero-banner__inner'>
                <div className='c-hero-banner__container'>
                    <div className='c-hero-banner__cta-item is-position-middle-right'>
                    </div>
                    <div className='c-hero-banner__content-item is-position-middle-left'>
                        <div className='c-hero-banner__subtitle'>
                            <p className='c-hero-banner__subtitle-inner o-subheading'>
                            SPRING 2022 COLLECTION
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects