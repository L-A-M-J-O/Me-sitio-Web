import React from 'react'

import '../Me/Me.css'

import git from '../../assets/img/git.png'
import logoReact from '../../assets/img/logo192.png'
import me from '../../assets/img/me1.jpg'

import { faBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Me() {
  return (
    <>  
    <div className='container-fluid p-0' id='about'>
      <div className='row justify-content-center justify-content-sm-center justify-content-md-around justify-content-lg-around m-hero-me align-items-center m-0'>
        <div className='col-12 col-sm-12 col-md-5 col-lg-5 mb-4'>
          <div className="card">
            <div className='row justify-content-center'>
              <div className='col-4'>
                <img src={ me } alt='Alan Naranjo' className='img-fluid img-me'/>
              </div>
              <div className='col-8 m-0'>
                <h3 className="card-title text-center">Front End Developer  &#9989;</h3>
                <p className='text-center  text-md-start text-lg-start small span-description'>It all started when I wondered how they can create a system in computers so that they work in such a way or how they create programs, so over time I was in research and to get started in this whole vast world I started with html5 later with time I continued researching and I came up with the term Front-end and I studied to be that profile and I keep improving</p>
                <div className="m-hero-container-me text-center">
                    <h1 className='small text-muted span-description'><FontAwesomeIcon className='runa-me' icon={faBolt}/></h1>
                  <div className="m-container small span-description">
                  I have various knowledge that over time I have acquired and used in projects if you want to see them
                  </div>
               </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='col-12 col-sm-12 col-md-12 col-lg-5 card-skills mt-4'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
            <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                      HTML5
                  </h4>
                  <span className="small text-muted span-description">Lenguaje de marcado</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt='HTML5'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                      CSS3
                  </h4>
                  <span className="small text-muted span-description">Lenguaje de diseño gráfico</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt='CSS'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    Bootstrap v5.0
                  </h4>
                  <span className="small text-muted span-description">CSS3, Sitios mobile first</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://blog.artegrafico.net/wp-content/uploads/2021/04/bootstrap.png' alt='Booststrap V5'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    Tailwind CSS
                  </h4>
                  <span className="small text-muted span-description">CSS3, Diseño Web </span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Tailwind CSS'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    SASS  
                  </h4>
                  <span className="small text-muted span-description">CSS3, Preprocesador </span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' alt='SASS'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    BEM
                  </h4>
                  <span className="small text-muted span-description">CSS3, Medotologia 'HTML' </span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////Nzc0kJCTm5uaRkZE9PT2+vr4MDAxKSkr09PTv7+9FRUW2trYyMjKLi4vb29uBgYFvb2/ExMQTExO6urqurq6YmJigoKAeHh4rKyvf39/5+flZWVk4ODh3d3dlZWVRUVFWVlbLy8tpaWlzc3OdnZ0RERHSFOmqAAAD20lEQVR4nO3c2XaiQBSFYUAEGZRJZgSckvd/w8YhiYlGiXI8ZfX+1urVF32R+jUNVVCgKAAAAAAAAAAAAAAAAAAAAAAAAP+JST9z7nHeT/P7KDPucd6vUnuJuMd5PxuFKBQeClEoPhS+fqH8Z/yp2YvHPU4AAACAa4J+Wu5x3k/+ean8awsUolB8KESh+FCIQvGNeuIeJwAAADyi566vm7g7ftfz/uFNcTxNkixtC+Fae15r68t2HM3b5txVp3rOvP+mNJfcXV9ICjuawV32gaqwW3AJ8j3SFap2yh23R1ioqqYIW4tJC4VIpC1UTe4+8kJ1yh049Bn/XMtd6I2HkaZplkz1qvr5kZXchYOaTPLa8uLoW+KYe1QU8tB0Pgt1Sa9EFgtNPyYuuMdCxk0PB+oXvl5+00zbFfrcwyDVVLIXKstK9kLFlb5QaTXen28NxHWNusjfL/2IlneBMfAstPK1aNq4xcVUHiRri6paZ03BnXZEt3rS/Y0A61/i9aG/4c5TyFfAEf/vKvUan3/eTV6ocl82pS/0me9i0BeqgfSFzPNSXx/OL58Wc+FsGHXHWLZhGG63TRN44zfN6YhQSGgyctPMlLnwIA+mwt34BgDp1DI/yz8vFmkk29liMs9Hs3q1CbvTvnmY5jAXRtrAdm8GKyuBZm3k94DZC5+wtmC+lf+EQub9X/SFDW8gfSH7bXziwirkDqQtrGKXu492b2K84q7bIStMPP7L3XvDn/HLtRmHgtTtBN4wgqBpwnaxsoyze4e1QDcTSRgy76fZ0+Tau3cu4Z55E7N89rUFrbEAK2BKi8NGU+b9NGRGi4+NtPxTUwqr+GN3qWrX3IMZWO56b/7pHIf7de7GMFzXaoNgnCWl83Omy/2o3nB3SH+Zw3N/heRrfP4DKXGhzf8YInFhy91HXGi33HkKbaEmxDqYrrBiP4oeUBU6yYw77Yik0PY9izvs0/CFlZOtvs1jRhbrdpNB4/w4SRZnj6oZjjYNjRHXlui+7/q6Jb/8JMJOfdj8Vfnaeh0d/Pm1G1H8zA/lrwrnxlffR8VdcVU6QKHNHXHVPJO9UFEC/XbDaxcqo632WKTwhZ1ZmPplt1J27qJzD/+a4mQC/p7PasO9B9/4b3P53xxBrLa5H7mgtpvTBFI35mV3LPQDof8nPcjbH+8dP1gaIzl3tbtfSzS9m3TH0zsk3BHXtQ+d7PfEnnnvbgQ/Svg5TfborhbhC5VFKXthd0Rdy16oKFZr+mWpO/f8xr5G4U4+c/cP8V2yOf75+uvk37gHDgAAAAAAAAAAAAAAAAAAAAAA8Cz/AMWuYnol0q76AAAAAElFTkSuQmCC' alt='BEEM'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    GIT,  Gitub, Gitlab
                  </h4>
                  <span className="small text-muted span-description">Control de versionamientos</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src={git} alt='GIT'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
            <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    JavaScript
                  </h4>
                  <span className="small text-muted">Lenguaje de Programacion</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    React JS
                  </h4>
                  <span className="small text-muted"> Biblioteca Javascript</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src={ logoReact } alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                    Angular JS
                  </h4>
                  <span className="small text-muted">Framework de JavaScript</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                      Java
                  </h4>
                  <span className="small text-muted">Lenguaje de Programacion</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                      Kotlin
                  </h4>
                  <span className="small text-muted">En proceso...</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                      C
                  </h4>
                  <span className="small text-muted">Lenguaje de Programacion</span>
                  </div>
                  <div className="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='data:image/png;base64,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' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li className="list-group-item bg-transparent border-bottom py-3 px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                </div>
                <div className="col-auto px-0">
                  <h4 className="fs-6 mb-0">
                      MySQL
                  </h4>
                  <span className="small text-muted">Gestión de bases de datos</span>
                  </div>
                  <div className="col">
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
        </div> */}
        <div className='col-12 col-sm-12 col-md-5 col-lg-5'>
          <div className='m-skills-hero'>
            <h3>Skills</h3>
            <div className='row'>
              <div className='col-6'>
              <div className='list'>
              <div className='imgBx'>
                <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt='HTML5'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#1</small></h2>
                <h4>HTML5</h4>
                <p>Lenguaje de marcado</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt='CSS3'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#2</small></h2>
                <h4>CSS3</h4>
                <p>Lenguaje de Styles gráfico</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='https://blog.artegrafico.net/wp-content/uploads/2021/04/bootstrap.png' alt='Booststrap V5'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#3</small></h2>
                <h4>Booststrap V5</h4>
                <p>CSS3, Sitios mobile first</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Tailwind CSS'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#5</small></h2>
                <h4>Tailwind CSS</h4>
                <p>CSS3, Diseño Web</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' alt='SASS'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#6</small></h2>
                <h4>SASS</h4>
                <p>CSS3, Preprocesador </p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////Nzc0kJCTm5uaRkZE9PT2+vr4MDAxKSkr09PTv7+9FRUW2trYyMjKLi4vb29uBgYFvb2/ExMQTExO6urqurq6YmJigoKAeHh4rKyvf39/5+flZWVk4ODh3d3dlZWVRUVFWVlbLy8tpaWlzc3OdnZ0RERHSFOmqAAAD20lEQVR4nO3c2XaiQBSFYUAEGZRJZgSckvd/w8YhiYlGiXI8ZfX+1urVF32R+jUNVVCgKAAAAAAAAAAAAAAAAAAAAAAAAP+JST9z7nHeT/P7KDPucd6vUnuJuMd5PxuFKBQeClEoPhS+fqH8Z/yp2YvHPU4AAACAa4J+Wu5x3k/+ean8awsUolB8KESh+FCIQvGNeuIeJwAAADyi566vm7g7ftfz/uFNcTxNkixtC+Fae15r68t2HM3b5txVp3rOvP+mNJfcXV9ICjuawV32gaqwW3AJ8j3SFap2yh23R1ioqqYIW4tJC4VIpC1UTe4+8kJ1yh049Bn/XMtd6I2HkaZplkz1qvr5kZXchYOaTPLa8uLoW+KYe1QU8tB0Pgt1Sa9EFgtNPyYuuMdCxk0PB+oXvl5+00zbFfrcwyDVVLIXKstK9kLFlb5QaTXen28NxHWNusjfL/2IlneBMfAstPK1aNq4xcVUHiRri6paZ03BnXZEt3rS/Y0A61/i9aG/4c5TyFfAEf/vKvUan3/eTV6ocl82pS/0me9i0BeqgfSFzPNSXx/OL58Wc+FsGHXHWLZhGG63TRN44zfN6YhQSGgyctPMlLnwIA+mwt34BgDp1DI/yz8vFmkk29liMs9Hs3q1CbvTvnmY5jAXRtrAdm8GKyuBZm3k94DZC5+wtmC+lf+EQub9X/SFDW8gfSH7bXziwirkDqQtrGKXu492b2K84q7bIStMPP7L3XvDn/HLtRmHgtTtBN4wgqBpwnaxsoyze4e1QDcTSRgy76fZ0+Tau3cu4Z55E7N89rUFrbEAK2BKi8NGU+b9NGRGi4+NtPxTUwqr+GN3qWrX3IMZWO56b/7pHIf7de7GMFzXaoNgnCWl83Omy/2o3nB3SH+Zw3N/heRrfP4DKXGhzf8YInFhy91HXGi33HkKbaEmxDqYrrBiP4oeUBU6yYw77Yik0PY9izvs0/CFlZOtvs1jRhbrdpNB4/w4SRZnj6oZjjYNjRHXlui+7/q6Jb/8JMJOfdj8Vfnaeh0d/Pm1G1H8zA/lrwrnxlffR8VdcVU6QKHNHXHVPJO9UFEC/XbDaxcqo632WKTwhZ1ZmPplt1J27qJzD/+a4mQC/p7PasO9B9/4b3P53xxBrLa5H7mgtpvTBFI35mV3LPQDof8nPcjbH+8dP1gaIzl3tbtfSzS9m3TH0zsk3BHXtQ+d7PfEnnnvbgQ/Svg5TfborhbhC5VFKXthd0Rdy16oKFZr+mWpO/f8xr5G4U4+c/cP8V2yOf75+uvk37gHDgAAAAAAAAAAAAAAAAAAAAAA8Cz/AMWuYnol0q76AAAAAElFTkSuQmCC' alt='BEM'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#7</small></h2>
                <h4>BEM</h4>
                <p>CSS3, Medotologia HTML</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src={git} alt='GIT'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#8</small></h2>
                <h4> GIT,  Gitub, Gitlab</h4>
                <p>Control de versionamientos</p>
              </div>
            </div>
              </div>
              <div className='col-6'>
              <div className='list'>
              <div className='imgBx'>
                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='JavaScript'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#9</small></h2>
                <h4>JavaScript</h4>
                <p>Lenguaje de Programacion</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt='CSS3'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#9</small></h2>
                <h4>CSS3</h4>
                <p>Lenguaje estructurado</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='https://blog.artegrafico.net/wp-content/uploads/2021/04/bootstrap.png' alt='Booststrap V5'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#10</small></h2>
                <h4>Booststrap V5</h4>
                <p>Lenguaje estructurado</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' alt='SASS'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#11</small></h2>
                <h4>SASS</h4>
                <p>Lenguaje estructurado</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////Nzc0kJCTm5uaRkZE9PT2+vr4MDAxKSkr09PTv7+9FRUW2trYyMjKLi4vb29uBgYFvb2/ExMQTExO6urqurq6YmJigoKAeHh4rKyvf39/5+flZWVk4ODh3d3dlZWVRUVFWVlbLy8tpaWlzc3OdnZ0RERHSFOmqAAAD20lEQVR4nO3c2XaiQBSFYUAEGZRJZgSckvd/w8YhiYlGiXI8ZfX+1urVF32R+jUNVVCgKAAAAAAAAAAAAAAAAAAAAAAAAP+JST9z7nHeT/P7KDPucd6vUnuJuMd5PxuFKBQeClEoPhS+fqH8Z/yp2YvHPU4AAACAa4J+Wu5x3k/+ean8awsUolB8KESh+FCIQvGNeuIeJwAAADyi566vm7g7ftfz/uFNcTxNkixtC+Fae15r68t2HM3b5txVp3rOvP+mNJfcXV9ICjuawV32gaqwW3AJ8j3SFap2yh23R1ioqqYIW4tJC4VIpC1UTe4+8kJ1yh049Bn/XMtd6I2HkaZplkz1qvr5kZXchYOaTPLa8uLoW+KYe1QU8tB0Pgt1Sa9EFgtNPyYuuMdCxk0PB+oXvl5+00zbFfrcwyDVVLIXKstK9kLFlb5QaTXen28NxHWNusjfL/2IlneBMfAstPK1aNq4xcVUHiRri6paZ03BnXZEt3rS/Y0A61/i9aG/4c5TyFfAEf/vKvUan3/eTV6ocl82pS/0me9i0BeqgfSFzPNSXx/OL58Wc+FsGHXHWLZhGG63TRN44zfN6YhQSGgyctPMlLnwIA+mwt34BgDp1DI/yz8vFmkk29liMs9Hs3q1CbvTvnmY5jAXRtrAdm8GKyuBZm3k94DZC5+wtmC+lf+EQub9X/SFDW8gfSH7bXziwirkDqQtrGKXu492b2K84q7bIStMPP7L3XvDn/HLtRmHgtTtBN4wgqBpwnaxsoyze4e1QDcTSRgy76fZ0+Tau3cu4Z55E7N89rUFrbEAK2BKi8NGU+b9NGRGi4+NtPxTUwqr+GN3qWrX3IMZWO56b/7pHIf7de7GMFzXaoNgnCWl83Omy/2o3nB3SH+Zw3N/heRrfP4DKXGhzf8YInFhy91HXGi33HkKbaEmxDqYrrBiP4oeUBU6yYw77Yik0PY9izvs0/CFlZOtvs1jRhbrdpNB4/w4SRZnj6oZjjYNjRHXlui+7/q6Jb/8JMJOfdj8Vfnaeh0d/Pm1G1H8zA/lrwrnxlffR8VdcVU6QKHNHXHVPJO9UFEC/XbDaxcqo632WKTwhZ1ZmPplt1J27qJzD/+a4mQC/p7PasO9B9/4b3P53xxBrLa5H7mgtpvTBFI35mV3LPQDof8nPcjbH+8dP1gaIzl3tbtfSzS9m3TH0zsk3BHXtQ+d7PfEnnnvbgQ/Svg5TfborhbhC5VFKXthd0Rdy16oKFZr+mWpO/f8xr5G4U4+c/cP8V2yOf75+uvk37gHDgAAAAAAAAAAAAAAAAAAAAAA8Cz/AMWuYnol0q76AAAAAElFTkSuQmCC' alt='BEM'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#12</small></h2>
                <h4>BEM</h4>
                <p>Lenguaje estructurado</p>
              </div>
            </div>
            <div className='list'>
              <div className='imgBx'>
                <img src={git} alt='GIT'/>
              </div>
              <div className='m-skills'>
                <h2 className='rank'><small>#13</small></h2>
                <h4> GIT,  Gitub, Gitlab</h4>
                <p>Lenguaje estructurado</p>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
    </>
  )
}

export default Me