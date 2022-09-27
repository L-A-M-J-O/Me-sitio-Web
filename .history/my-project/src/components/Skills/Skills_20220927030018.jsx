
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png'


function Skills() {
  return (
    <div className='container-fluid mt-5'>
        <div className='row box-main '>
          <div className='col-8'>
            <div className='row'>
              <div className='col'>
                <div className='box-img'>
                  <img src='' alt='HTML'/>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4 align-self-center'>
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