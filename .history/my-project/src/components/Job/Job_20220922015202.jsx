import React from 'react'

import '../Job/Job.css'

function Job() {
  return (
    <div id='job'>
        <p>I managed to have the opportunity to work in a company and be able to join a work group and develop large projects</p>
       <div className='row card-job-main align-items-center'>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4 mb-2 mt-4'>
          <div className="card-job">
            <div className='row logo-and-name align-items-center justify-content-center mb-3'>
              <div className="col-5 col-sm-5 col-md-4 col-lg-4">
                      <div className='block'>
                        <div className='box-job'>
                          <a href='https://es.backbone.digital/'><img src='https://media-exp1.licdn.com/dms/image/C4E0BAQHVWeqmIAjzAw/company-logo_200_200/0/1522233689880?e=2147483647&v=beta&t=sNf-YB9yxGLVqyLa_xykMX7PCG1eaWAJ9LH2kuqItHU' alt='Booststrap V5'/></a>
                        </div>
                  </div>
              </div>
              <div className='col-6'>
                <h4 className='name-company'>Backbone Latam</h4>
              </div>
            </div>    
          <div className="card-body">
          <span className="small text-muted span-description">Team QA</span>
            <p className="card-text">My job in this position was, <br/>
              - Matrix creation
              <br/>
              - Modification of the boarding websites
              <br/>
              - Upload content and update e-commerce website
              <br/>
              - Verify that the web application is fully working without errors and also design errors
              <br/>
              - Meetings every morning with the front-end team and project leaders "Daily"
              </p>
          </div>
        </div>
        </div>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4 mb-2'>
          <div className="card-job">
            <div className='row logo-and-name align-items-center justify-content-center mb-3'>
              <div className="col-5 col-sm-5 col-md-4 col-lg-4">
                    <div className='block'>
                      <div className='box-job'>
                        <a href='https://www.nocountry.tech/'><img src='https://uploads-ssl.webflow.com/62cc216ce23f79c10bc88169/62d0486c8fb98db540881355_header.png' alt='Booststrap V5'/> </a>
                      </div>  
                    </div>
              </div>
              <div className='col-5'>
                <h4 className='name-company fs-5 mb-0'>No Country</h4>
              </div> 
            </div>
            <div className="card-body">
          <span className="small text-muted span-description">Team QA</span>
            <p className="card-text">My job in this position was, <br/>
             - Creation of project from scratch with organization and routing with react js
             <br/>
              - Creation of HTML and CSS structure Design of all mobile and desktop design. 
              <br/>
              - Creation of functions 
              <br/>
              - Meetings with all colleagues to organize ideas.
              <br/>
              - Creating components with bootstrap V5
              </p>
          </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Job