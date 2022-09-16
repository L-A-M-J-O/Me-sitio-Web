import React from 'react'

import runa from '../../assets/img/icon.png'
import '../About/About.css'

function About() {
  return (
    <section id='about'>
      <div className='container-fluid p-0 m-0'>
      <div className='row justify-content-end me-3 m-hero-about'>
          <div className='col'>
            <h3><span>HISTORY</span></h3>
          </div>
        </div>
        <div className="Main_line__vX9br"></div>
        <div className='row m-hero-runa justify-content-end'>
          <div className='col-4 me-4'>
          <div className='m-hero-runa-box'>
            <div className='bubbles'>
              <span><img src='' alt='runa'/></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className='one-lattera'></span>
            <span className='tow-lattera'></span>
            <span className='tree-lattera'></span>
          </div>
          </div>
        </div>
        <div className="Main_line__vX9br"></div>
      </div>
    </section>
  )
}

export default About