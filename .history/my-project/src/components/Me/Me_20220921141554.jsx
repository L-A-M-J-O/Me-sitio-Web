import React from 'react'

import '../Me/Me.css'

import me from '../../assets/img/me1.jpg'

import {Link } from 'react-scroll'

function Me() {
  return (
    <>  
    <div className='container-fluid' id='about'>
      <div className='row justify-content-center m-hero-me align-items-center'>
        <div className='col-12 col-sm-7 col-md-5'>
          <div className="card">
            <div className='row justify-content-center'>
              <div className='col-4 m-0'>
                <img src={ me } alt='Alan Naranjo' className='img-fluid'/>
              </div>
              <div className='col-8 p-0 m-0'>
                <h3 className="card-title">Developer Front-end</h3>
                <p>Soy un desarrollador nato en el front-end me gusta los diseños y programacion en este mundo comence desde los 15 años</p>
                  <a href='·'>Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-7 col-md-5 card-skills'>
          <div className='row'>
            <div className='col-6'>
            <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      HTML5
                  </h4>
                  <span class="small text-muted span-description">Lenguaje de marcado</span>
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
                      CSS3
                  </h4>
                  <span class="small text-muted span-description">Lenguaje de diseño gráfico</span>
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
                    Bootstrap v5.0
                  </h4>
                  <span class="small text-muted span-description">CSS3, Sitios mobile first</span>
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
                    Tailwind CSS
                  </h4>
                  <span class="small text-muted span-description">CSS3, Diseño Web </span>
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
                    SASS
                  </h4>
                  <span class="small text-muted span-description">CSS3, Preprocesador </span>
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
                    BEM
                  </h4>
                  <span class="small text-muted span-description">CSS3, Medotologia 'HTML' </span>
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
                    GIT,  Gitub, Gitlab
                  </h4>
                  <span class="small text-muted span-description">Control de versionamientos</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
            </div>
            <div className='col-6'>
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
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    React JS
                  </h4>
                  <span class="small text-muted"> Biblioteca Javascript</span>
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
                    Angular JS
                  </h4>
                  <span class="small text-muted">Framework de JavaScript</span>
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
                      Java
                  </h4>
                  <span class="small text-muted">Lenguaje de Programacion</span>
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
                      C
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
      </div>
    </div>
    </>
  )
}

export default Me