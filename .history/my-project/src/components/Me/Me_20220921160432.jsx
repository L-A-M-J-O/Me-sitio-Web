import React from 'react'

import '../Me/Me.css'

import logoReact from '../../assets/img/logo192.png'
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt='Javascript'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt='CSS'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://blog.artegrafico.net/wp-content/uploads/2021/04/bootstrap.png' alt='Booststrap V5'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Booststrap V5'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='data:image/png;base64,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' alt='Booststrap V5'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Booststrap V5'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Booststrap V5'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='Javascript'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src={ logoReact } alt='Javascript'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' alt='Javascript'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      Kotlin
                  </h4>
                  <span class="small text-muted">En proceso...</span>
                  </div>
                  <div class="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png' alt='Javascript'/>
                      </div>
                    </div>
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
                    <div className='block'>
                      <div className='box'>
                        <img src='data:image/png;base64,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' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      MySQL
                  </h4>
                  <span class="small text-muted">Gestión de bases de datos</span>
                  </div>
                  <div class="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/528/528260.png' alt='MySQL'/>
                      </div>
                    </div>
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