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
              <div className="row g-2 justify-content-center">
              <div className="col-5">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                  <div className="col">
                    <div className="p-3 border bg-light">Row column</div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light">Row column</div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light">Row column</div>
                  </div>
                </div>
              <div className="col-4 ">
                <div className="border p-3"><img src={ me } alt='Alan Naranjo' width={400}/></div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects