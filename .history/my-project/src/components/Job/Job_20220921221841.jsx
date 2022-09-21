import React from 'react'

import '../Job/Job.css'

function Job() {
  return (
    <div id='job'>
        <p>I have managed to work on a project and in a web application development company</p>
       <div className='row'>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
          <div class="card-job">
          <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHVWeqmIAjzAw/company-logo_200_200/0/1522233689880?e=2147483647&v=beta&t=sNf-YB9yxGLVqyLa_xykMX7PCG1eaWAJ9LH2kuqItHU" class="card-img-top" alt="..." width={100}/>
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
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