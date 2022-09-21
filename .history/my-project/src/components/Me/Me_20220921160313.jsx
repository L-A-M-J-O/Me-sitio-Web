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
                        <img src='   <div class="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Booststrap V5'/>
                      </div>
                    </div>
                  </div>' alt='Booststrap V5'/>
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