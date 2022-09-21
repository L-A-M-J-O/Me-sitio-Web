import React from 'react'

import '../Me/Me.css'

import me from '../../assets/img/me1.jpg'

import {Link } from 'react-scroll'

function Me() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row justify-content-center m'>
        <div className='col-5'>
          <div className='recuadro-img'>
              {/* <img src={me} alt='Alan Naranjo' className='img-fluid' width={300}/> */}
          </div>
          <div class="card">
            <h3 class="card-title">Glassmorphism is awesome</h3>
            <p>A modern CSS UI library based on the glassmorphism design principles that will help you quickly design and build beautiful websites and applications.</p>
            <a href="https://ui.glass">Read more</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Me