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
            <div className="card-body">
              <h5 className="card-title">Front End Engineer</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="." className="card-link">Card link</a>
              <a href="." className="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Me