import React from 'react'

import '../Me/Me.css'

import me from '../../assets/img/me1.jpg'

import {Link } from 'react-scroll'

function Me() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row justify-content-center'>
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
        <div className='col-12'>
        <li class="list-group-item bg-transparent border-bottom py-3 px-0">
    <div class="row align-items-center">
        <div class="col-auto">
            <a href="#" class="user-avatar rounded bordered">
                <img class="p-1 rounded" alt="Image placeholder" src="./assets/img/team/profile-picture-1.jpg">
            </a>
        </div>
        <div class="col-auto px-0">
            <h4 class="fs-6 mb-0">
                Chris Wood
            </h4>
            <span class="small text-muted">Graphic Designer</span>
        </div>
        <div class="col text-end">
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