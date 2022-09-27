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
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="." class="card-link">Card link</a>
              <a href="." class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Me