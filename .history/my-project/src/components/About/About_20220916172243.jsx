import React from 'react'

import runa from '../../assets/img/icon.png'
import runa1 from '../../assets/img/jera.png'
import runa2 from '../../assets/img/othila.png'
import runa3 from '../../assets/img/runas.png'
import runa4 from '../../assets/img/sowelu.png'
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
          <div className='col-4 m-hero-tittle align-self-center'>
            <h1 className='tittle-history'><span>touch the rune</span></h1>
          </div>
          <div className='col-2 m-hero-tittle align-self-center'>
            <h1 className='tittle-history'><span>touch the rune</span></h1>
          </div>
          <div className='col-4 me-4'>
          <div className='m-hero-runa-box'>
            <div className='bubbles'>
              <img src={ runa } alt='runa' width={50 } height={50}/>
              <img src={ runa1 } alt='runa' width={50 } height={50}/>
              <img src={ runa2 } alt='runa' width={50 } height={50}/>
              <img src={ runa3  } alt='runa' width={50 } height={50}/>
              <img src={ runa4 } alt='runa' width={50 } height={50}/>
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