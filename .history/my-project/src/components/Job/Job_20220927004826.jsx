
import '../Job/Job.css'

import {Link} from 'react-scroll' 
import company from '../../assets/img/company.png'

function Job() {
  return (
    <div id='job'>
      <div className='row me-0 justify-content-center justify-content-md-end justify-content-lg-end mt-5 mb-4'>
        <div className='col-1 text-end p-0 pb-4'>
          <img src={company} alt='frase de compañia' width={18}/>
        </div>
        <div className='col-9 col-sm-9 col-md-7 col-lg-7 m-0 text-start'>
          <p className='text-job'>I managed to have the opportunity to work in a company and be able to join a work group and develop large projects</p>
        </div>
      </div>
      <div className='m-hero-job row me-0 justify-content-center justify-content-md-end justify-content-lg-end'>
        <div className='col-10 col-sm-12 col-md-4 col-lg-4 mb-2'>
          <div className="card-job">
              <div className='row logo-and-name align-items-center justify-content-center mb-3'>
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
              <div className='row justify-content-end'>
                <div className='col-4'>
                  <Link to='about' className='media-icon-arrow'>
                  <button className='btn-job'><p>Read More</p></button>       
                  </Link>
                </div>
            </div>
          </div>
        </div>
      <div className='col-10 col-sm-12 col-md-4 col-lg-4'>
          <div className="card-job">
            <div className='row logo-and-name align-items-center justify-content-center mb-3'>
              <div className='col-6'>
                <h4 className='name-company fs-5 mb-0'>Backbone Latam</h4>
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
              <div className='row justify-content-end'>
                <div className='col-4'>
                  <Link to='about' className='media-icon-arrow'>
                    <button className='btn-job'><p>Read More</p></button>        
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Job