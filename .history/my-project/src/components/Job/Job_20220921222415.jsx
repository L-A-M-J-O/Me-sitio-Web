import React from 'react'

import '../Job/Job.css'

function Job() {
  return (
    <div id='job'>
        <p>I have managed to work on a project and in a web application development company</p>
       <div className='row'>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
          <div class="card-job">
            <div className="col">
                    <div className='block'>
                      <div className='box-job'>
                        <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQHVWeqmIAjzAw/company-logo_200_200/0/1522233689880?e=2147483647&v=beta&t=sNf-YB9yxGLVqyLa_xykMX7PCG1eaWAJ9LH2kuqItHU' alt='Booststrap V5'/>
                      </div>
                    </div>
            </div>
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
          <div class="card-job">
            <div className='row logo-and-name align-items-center justify-content-center'>
              <div className="col-2">
                    <div className='block'>
                      <div className='box-job'>
                        <img src='https://uploads-ssl.webflow.com/62cc216ce23f79c10bc88169/62d0486c8fb98db540881355_header.png' alt='Booststrap V5'/>
                      </div>
                    </div>
              </div>
              <div className='col-4'>
                <h4>No Country</h4>
              </div>
            </div>
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