import '../../components/projects/Projects.css'

import React from 'react'
import  me  from '../../assets/img/me.jpg';

function Projects() {   
  return (
    <div className='project'>
        <div className='block-highlight h-3 w-full left-0 top-0 bg-emeraldGreen transition-all duration-500 ease-in-out'>
        </div>
        <div className='container-fluid m-hero-project'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-11 p-1 m-hero-banner mt-4'>
              <div class="row g-2 justify-content-center">
                <div class="col-5">
                  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col col-4">
                      <div class="p-3 border bg-light">
                        <h6 className=''>Este es mi portfolio</h6>
                      </div>
                    </div>
                    <div class="col col-12">
                      <div class="p-3 border bg-light">
                        <h1 className=''>Alan Mateo Naranjo Alvarado</h1></div>
                    </div>
                  </div>
                </div>
              <div class="col-5 ">
                <div class=""><img src={ me } alt='Alan Naranjo' width={400}/></div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects