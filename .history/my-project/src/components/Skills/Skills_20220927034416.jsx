
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png'


function Skills() {
  return (
    <div className='container-fluid mt-5'>
        <div className='row box-main justify-content-center'>
          <div className='col-12 col-sm-12 col-md-7 col-lg-7  '>
           <div className='row'>
            <div className='col-8'>
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
            <div className='col-4'>
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
            <div className='col-4'>
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
           </div>
          </div>
          <div className='col-8 col-sm-8 col-md-4 col-md-4 align-self-center'>
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