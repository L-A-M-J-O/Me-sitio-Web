import React from 'react'

import '../Job/Job.css'

function Job() {
  return (
    <div id='job'>
        <p>I have managed to work on a project and in a web application development company</p>
       <div className='row'>
        <div className='col-4'>
          <div class="card-job">
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className='col-4'>
          <div class="card-job">
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Job