import '../../components/projects/Projects.css'

import React from 'react'
import  me  from '../../assets/img/me.jpg';

function Projects() {   
  return (
    <div className='project'>
        <div className='block-highlight h-3 w-full left-0 top-0 bg-emeraldGreen transition-all duration-500 ease-in-out'>
        </div>
        <div className='container-fluid'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-11 p-1 bg-primary'>
              <div class="row g-2 justify-content-center">
              <div class="col-5">
                <div class="row-cols-1 gy-5 justify-content-center">
                  <div class="col-3 p-3 border">
                    <h6>Este es mi portfolio</h6>
                  </div>
                  <div class="col-5 p-3 border">
                    Alan Mateo Naranjo Alvarado
                  </div>
                </div>
              </div>
              <div class="col-4 ">
                <div class="border p-3"><img src={ me } alt='Alan Naranjo' width={400}/></div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects