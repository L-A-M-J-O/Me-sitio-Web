
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png';
import git from '../../assets/img/git.png';
import react from '../../assets/img/logo192.png';

function Skills() {
  return (
    <div className='container-fluid mt-5'>
        <div className='row box-main justify-content-center'>
          <div className='col-12 col-sm-12 col-md-7 col-lg-7  '>
           <div className='row gap-3 justify-content-center'>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
                <div className='col-2 m-0 p-2'>
                  <div className='m-img'>
                    <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360' alt='HTML5'/>
                  </div>
                </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#1</span>
                </div>
              </div>
              <div className='row'> 
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Html5</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' alt='CSS3'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#2</span>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Css3</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://github.com/twbs.png' alt='Bootstrap v5'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#3</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Bootstrap v5.0</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Tailwind Css'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#4</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Tailwind Css</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' alt='Sass'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#5</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Sass</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src={git} alt='Git'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#6</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Git</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='JavaScript'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#7</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>JavaScript</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEUxeMb///8bcMM4e8fl7Pa0yObI1uwhcsQqdcWJqtn09/tVi80ObMIWbsP6+/3A0erX4vKtw+SRsdxmlNDt8vlKhcsAaMAAZcCfueDe5/RumtN9o9dgkdCkveFDgcnP2+8P/sueAAADaElEQVRoge2b26KqIBCGESxGFE+pqWm+/1tu3K3lCsNUFL3hv+gm4msQhhlhkPMSizyfoCNEfC9iP1T0YqeAKRwCRwgohpT90WOCDyL/CpP4l37lR5n9J+DXFz3mh7N78binM3K85b2AMEFPj37mv8Kpg9g5lvcChqKzTBfGR8ijp9Gph/wTR95Hx7hXtc5kW1lZWVlZWVlZWVlZWVlZWVlZWVlZHSIQOgNLOQfyzIWeBOEAr/0TtBde9DHqmmLIvUsXuxkTytyqi9qawIp/AHl3XapOOuOg93o47XxXlfiLj0LAV3QwpeTvVA+CNJxsd1tq/Tr6cLrE6+xLO8N03H5tZ5YeRN/bGaUXl5l2Jun0MdfOqO2qdXYUnX/MuFA4mqpys2EJGqST0VqLPR/xIggwaR6XbB0dPVNPUvfWcTb6rhG9Qi2xWV0MDhiAF02yiv7y84OC9/nsjr7sO+XShGdo5FWB30un1t3wsERXHKIG8Tv9oThb536uCZ+nY/edHqj60N/qZ+lImnR3bZAeXZ7yO98mmaVTaeQj5dCbo3OJ7qS7XuSZn/NXie60e97dmp/zqUx34nx1KKlPh9wZ60KKnfjzKw53H3inE/72GLp6X3I9tMOVonk6ourQJiufm/kL6CiolHiHlXjj+C+hA5oKp7O6ME4X+AnrxfwjW8xfRBf4ybCWNRue/jJ6n8xMxpaNvvVL6SKmaScSuVAfv5guzCfJxOBr3ytbQReNeamc/VfdfXcVXYw/PGIFfkVQu4Xeh8TNJz/S3PVX0/sXCbU7orPj6P0LnPHy1xx6Lbpw/aO8VvMWqyYdFfLqK4+lIyr5vlbP3WrTCynkSQzRSa7uWM4uW0Mjz6NUGUPKtqeG6CKe7/LPQgQg0p6jmUMvyibCJOeycYAlhxdqsRfnMmFXA6U/r8WB4kYOdirNAGt5JhVey5oE93tB6nYcaGk+9vV5nEraG/wu9EQ3sd2DnpmLbRbQb+biunm6Pnw73Z3wxPvQvx8MsHbT0dj8Hkf9djKNU6axK+YgTpxwUKX8IXB6Szs2yiVCN6lVh2FkXb0MedNUG8DB/XnzyvYSCV3a9NHwQlkDB76hWiEQnp7/1+DxP0W9k+ukzq0R2/mN4gr19XEn1waeWxd5ck3oyfWwJ9cCO2fVQf8DUbMt95puUUUAAAAASUVORK5CYII=' alt='TypeScript'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#8</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>TypeScript</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src={react} alt='React Js'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#9</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>React Js</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='Java'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#10</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Java</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png' alt='C'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#11</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>C</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row'>
              <div className='col-2 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png' alt='Docker'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#12</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Docker</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et expedita nemo illum minus quidem vero!</p>
                </div>
              </div>
              </div>
            </div>
           </div>
          </div>
          <div className='col-10 col-sm-10 col-md-4 col-md-4 align-self-center'>
            <div className='row justify-content-center'>
              <div className='col-2 p-0 text-end'>
                <img src={skills} alt='imagene de habilidades' width={50}/>
              </div>
              <div className='col-10 p-0'>
                <h5 className='tittle-skills'>skills and knowledge</h5>
              </div>
              <div className='col-9 tittle-skills-p'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ipsa, saepe repudiandae sapiente placeat possimus harum mollitia eos magni error, qui earum sit at eligendi rem! Consequuntur quo voluptatum facere delectus sapiente non ratione laboriosam et aperiam nihil quis officia, quam, laborum quos consequatur? Recusandae corporis quibusdam repellendus culpa ratione.</p>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Skills