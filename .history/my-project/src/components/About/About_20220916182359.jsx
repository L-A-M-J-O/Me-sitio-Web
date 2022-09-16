import React from 'react'

// import runa from '../../assets/img/icon.png'
// import runa1 from '../../assets/img/jera.png'
// import runa2 from '../../assets/img/othila.png'
import runa3 from '../../assets/img/runas.png'
// import runa4 from '../../assets/img/sowelu.png'
import '../About/About.css'


function About() {
  return (
    <section id='about'>
      <div className='container-fluid p-0 m-0'>
      <div className='row justify-content-center me-3 m-hero-about'>
          <div className='col mb-5'>
            <h3><span>HISTORY</span></h3>
          </div>
        </div>
        <div className="Main_line__vX9br"></div>
        <div className='row m-hero-runa justify-content-start'>
          <div className='col-4 m-hero-tittle align-self-center'>
            <h1 className='tittle-history'><span>touch the rune</span></h1>
          </div>
          <div className='col-3 m-hero-tittle align-self-center'>
          <div className="Main_line__vX9br"></div>
          </div>
          <div className='col'>
          <div className='row m-hero-me mt-2'>
            <div className='col-12'>
              <div className='card-history'>
                <div className='m-img-Runa'>
                  <img src={ runa3 } alt='Runa' width={100} height={100}/>
                </div>
                <div className='content-me-history'>
                  \<div className='details mt-5'>
                  <h3 className='h2-tittle'>Alan Naranjo<br/><span className='m-hero-title'>Developer Front-end</span></h3>
                  <div className='m-skills'>
                    <div className='row m-skills-r justify-content-center'>
                      <div className='col-3'>
                        <h4>HTML5<br/><span>80%</span></h4>
                      </div>
                      <div className='col-4'>
                        <h4>JavaScript<br/><span>60%</span></h4>
                      </div>
                      <div className='col-3'>
                        <h4>CSS3<br/><span>95%</span></h4>
                      </div>
                      <div className='col-4'>
                        <h4>React JS<br/><span>70%</span></h4>
                      </div>
                      <div className='col-3'>
                        <h4>Java<br/><span>50%</span></h4>
                      </div>
                    </div>
                  </div>
                  <div className='actionBtn'>
                    <button>Message</button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="Main_line__vX9br"></div>
      </div>
    </section>
  )
}

export default About