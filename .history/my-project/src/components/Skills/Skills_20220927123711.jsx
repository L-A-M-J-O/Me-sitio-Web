
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
                  <img src={react} alt='React Js'/>
                </div>
              </div>
                <div className='col-1 m-0 p-0 align-self-center'>
                  <span>#8</span>
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
                  <span>#9</span>
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
                  <span>#9</span>
                </div>
                <div className='row'>
                <div className='col-12'>
                  <h4 className='text-muted span-description'>Java</h4>
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