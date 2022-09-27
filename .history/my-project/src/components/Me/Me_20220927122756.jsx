import React from 'react'

import '../Me/Me.css';

import me from '../../assets/img/me1.jpg'

import { faBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Me() {
  return (
    <div id='about'>
      <div className='row justify-content-start me-0 m-5'>
        <div className='col-10'>
          <div className='row hero-me justify-content-center mb-5'>
            <div className='col-12 col-sm-12 col-md-7 col-lg-7'>
              <div className="card">
                <div className='row justify-content-center'>
                  <div className='col-9'>
                    <div className="card-body text-center">
                      <h5 className="card-title">Front End Engineer &#x2614;</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Alan Mateo Naranjo Alvarado</h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet porro unde incidunt nemo suscipit, non est accusantium magni possimus voluptatibus a praesentium fugiat sed alias debitis ratione voluptas mollitia facilis dolore repellendus? Illum fugiat temporibus quidem laborum voluptas modi voluptatum. Vitae ea corporis quisquam nobis blanditiis, dolore perferendis maxime?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9 col-sm-10 col-md-4 col-lg-4'>
             <div className='box-img'>
                <img src={me} alt='me'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Me