import '../Skills/Skills.css'

import git from '../../assets/img/git.png';
import react from '../../assets/img/logo192.png';

function Skills() {
  return (
    <div className='container-fluid mt-5'>
        <div className='row box-main justify-content-center'>
          <div className='col-12 col-sm-12 col-md-7 col-lg-7  '>
           <div className='row gap-3 justify-content-center'>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
                <div className='col-4 m-0 p-2'>
                  <div className='m-img'>
                    <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360' alt='HTML5'/>
                  </div>
                </div>
              </div>
              <div className='row'> 
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>HTML5</h4>
                </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' alt='CSS3'/>
                </div>
              </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>CSS3</h4>
                </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://github.com/twbs.png' alt='Bootstrap v5'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>Bootstrap v5.0</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='Tailwind Css'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>Tailwind Css</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' alt='Sass'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>Sass</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src={git} alt='Git'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>Git</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='JavaScript'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>JavaScript</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center '>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEUxeMb///8bcMM4e8fl7Pa0yObI1uwhcsQqdcWJqtn09/tVi80ObMIWbsP6+/3A0erX4vKtw+SRsdxmlNDt8vlKhcsAaMAAZcCfueDe5/RumtN9o9dgkdCkveFDgcnP2+8P/sueAAADaElEQVRoge2b26KqIBCGESxGFE+pqWm+/1tu3K3lCsNUFL3hv+gm4msQhhlhkPMSizyfoCNEfC9iP1T0YqeAKRwCRwgohpT90WOCDyL/CpP4l37lR5n9J+DXFz3mh7N78binM3K85b2AMEFPj37mv8Kpg9g5lvcChqKzTBfGR8ijp9Gph/wTR95Hx7hXtc5kW1lZWVlZWVlZWVlZWVlZWVlZWVlZHSIQOgNLOQfyzIWeBOEAr/0TtBde9DHqmmLIvUsXuxkTytyqi9qawIp/AHl3XapOOuOg93o47XxXlfiLj0LAV3QwpeTvVA+CNJxsd1tq/Tr6cLrE6+xLO8N03H5tZ5YeRN/bGaUXl5l2Jun0MdfOqO2qdXYUnX/MuFA4mqpys2EJGqST0VqLPR/xIggwaR6XbB0dPVNPUvfWcTb6rhG9Qi2xWV0MDhiAF02yiv7y84OC9/nsjr7sO+XShGdo5FWB30un1t3wsERXHKIG8Tv9oThb536uCZ+nY/edHqj60N/qZ+lImnR3bZAeXZ7yO98mmaVTaeQj5dCbo3OJ7qS7XuSZn/NXie60e97dmp/zqUx34nx1KKlPh9wZ60KKnfjzKw53H3inE/72GLp6X3I9tMOVonk6ourQJiufm/kL6CiolHiHlXjj+C+hA5oKp7O6ME4X+AnrxfwjW8xfRBf4ybCWNRue/jJ6n8xMxpaNvvVL6SKmaScSuVAfv5guzCfJxOBr3ytbQReNeamc/VfdfXcVXYw/PGIFfkVQu4Xeh8TNJz/S3PVX0/sXCbU7orPj6P0LnPHy1xx6Lbpw/aO8VvMWqyYdFfLqK4+lIyr5vlbP3WrTCynkSQzRSa7uWM4uW0Mjz6NUGUPKtqeG6CKe7/LPQgQg0p6jmUMvyibCJOeycYAlhxdqsRfnMmFXA6U/r8WB4kYOdirNAGt5JhVey5oE93tB6nYcaGk+9vV5nEraG/wu9EQ3sd2DnpmLbRbQb+biunm6Pnw73Z3wxPvQvx8MsHbT0dj8Hkf9djKNU6axK+YgTpxwUKX8IXB6Szs2yiVCN6lVh2FkXb0MedNUG8DB/XnzyvYSCV3a9NHwQlkDB76hWiEQnp7/1+DxP0W9k+ukzq0R2/mN4gr19XEn1waeWxd5ck3oyfWwJ9cCO2fVQf8DUbMt95puUUUAAAAASUVORK5CYII=' alt='TypeScript'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>TypeScript</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src={react} alt='React Js'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>React Js</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='Java'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>Java</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png' alt='C'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>C</h4>
                </div>
              </div>
              </div>
            </div>
            <div className='card-skills col-8 col-sm-8 col-md-4 col-lg-4'>
              <div className='row justify-content-center'>
              <div className='col-4 m-0 p-2'>
                <div className='m-img'>
                  <img src='https://juanmanuellopezduran.files.wordpress.com/2020/08/452-4529814_docker-and-kubernetes-logos-docker-logo-white-png.png' alt='Docker'/>
                </div>
              </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description text-center'>Docker</h4>
                </div>
              </div>
              </div>
            </div>
           </div>
          </div>
          <div className='col-10 col-sm-10 col-md-4 col-md-4 align-self-start mt-5 mt-md-0 mt-lg-0 box-sticky'>
            <div className='row justify-content-center'>
              <div className='col-10 p-0'>
                <h5 className='tittle-skills'>skills and knowledge</h5>
              </div>
              <div className='col-10 tittle-skills-p'>
                <p>Dominant skills that I have are the ones you see, in each of them I have their methodology, libraries and frameworks, I have the ability to adapt to the situation quickly and thus understand and learn to program, I learned this knowledge in academies and in google for myself bill</p>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Skills