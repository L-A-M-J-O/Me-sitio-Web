import React from 'react'

import '../Job/Job.css'

function Job() {
  return (
    <div id='job'>
      <p className='text-job'>I managed to have the opportunity to work in a company and be able to join a work group and develop large projects</p>
      <div className='row'>
        <div className='col'>
          <div className="card-job">
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
        <div className='col'>
          <div className="card-job">
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