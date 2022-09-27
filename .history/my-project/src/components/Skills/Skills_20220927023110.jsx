
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png'


function Skills() {
  return (
    <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-8'>
            
          </div>
          <div className='col-4'>
            <div className='row'>
            <div className='col-1 p-0 text-end'>
                <img src={skills} alt='imagene de habilidades' width={20}/>
            </div>
            <div className='col-8 p-0'>
                <h5 className='tittle-skills'>skills and knowledge</h5>
            </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Skills