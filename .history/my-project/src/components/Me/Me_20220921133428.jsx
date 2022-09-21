import React from 'react'

import '../Me/Me.css'

import me from '../../assets/img/me1.jpg'

import {Link } from 'react-scroll'

function Me() {
  return (
    <>  
    <div className='container-fluid' id='about'>
      <div className='row justify-content-center align-center-baseline'>
        <div className='col-12 col-sm-7 col-md-5'>
          <div className="card">
            <div className='row justify-content-center'>
              <div className='col-4'>
                <img src={ me } alt='Alan Naranjo' className='img-fluid'/>
              </div>
              <div className='col-8'>
                <h3 className="card-title">Glassmorphism is awesome</h3>
                <p>A modern CSS UI library based on the glassmorphism design principles that will help you quickly design and build beautiful websites and applications.</p>
                <a href="https://ui.glass">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-7 col-md-5 card-skills'>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      HTML5
                  </h4>
                  <span class="small text-muted">Lenguaje Estructurado</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      JavaScript
                  </h4>
                  <span class="small text-muted">Lenguaje de Programacion</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
        </div>
      </div>
    </div>
    </>
  )
}

export default Me