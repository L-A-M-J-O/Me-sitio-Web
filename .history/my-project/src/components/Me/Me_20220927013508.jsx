import React from 'react'

import '../Me/Me.css';

import me from '../../assets/img/me1.jpg'

import { faBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Me() {
  return (
    <div id='about'>
      <div className='row'>
        <div className='col-10 col-sm-10 col-md-6 col-md-6'>
          <div className="card">
            <div className='row'>
              <div className='col'>
                <div className='box-img'>
                  <img src='' alt='me'/>
                </div>
              </div>
              <div className='col'>
                <div className="card-body">
                  <h5 className="card-title">Front End Engineer</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Alan Mateo Naranjo Alvarado</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Me