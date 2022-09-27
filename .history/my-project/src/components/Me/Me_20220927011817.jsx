import React from 'react'

import '../Me/Me.css';

import me from '../../assets/img/me1.jpg'

import { faBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Me() {
  return (
    <div id='about'>
        <div className='row justify-content-center justify-content-sm-center justify-content-md-around justify-content-lg-around m-hero-me align-items-center m-0'>
          <div className='col-12 col-sm-12 col-md-5 col-lg-5 mb-4'>
            <div className="card">
              <div className='row justify-content-center'>
                <div className='col-4'>
                  <img src={ me } alt='Alan Naranjo' className='img-fluid img-me'/>
                </div>
                <div className='col-8 m-0'>
                  <h3 className="card-title text-center">Front End Developer  &#9989;</h3>
                  <p className='text-center  text-md-start text-lg-start small span-description'>It all started when I wondered how they can create a system in computers so that they work in such a way or how they create programs, so over time I was in research and to get started in this whole vast world I started with html5 later with time I continued researching and I came up with the term Front-end and I studied to be that profile and I keep improving</p>
                  <div className="m-hero-container-me text-center">
                      <h1 className='small text-muted span-description'><FontAwesomeIcon className='runa-me' icon={faBolt}/></h1>
                    <div className="m-container small span-description">
                      I have various knowledge that over time I have acquired and used in projects if you want to see them
                    </div>
                </div>
                </div>  
              </div>
            </div>
        </div>
      </div>
    </div>
  ) 
}

export default Me