import '../../components/projects/Projects.css'

import React from 'react'
// import  me  from '../../assets/img/me.jpg';

function Projects() {   
  return (
    <div className='project'>
        <div className='block-highlight h-3 w-full left-0 top-0 bg-emeraldGreen transition-all duration-500 ease-in-out'>
        </div>
        <div className='container-fluid'>
          <div class="row g-2">
            <div class="col-6">
              <div class="p-3 border bg-light">Custom column padding</div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light">Custom column padding</div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light">Custom column padding</div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light">Custom column padding</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects