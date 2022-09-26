
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png'


function Skills() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-1 text-end'>
                <img src={skills} alt='imagene de habilidades' width={20}/>
            </div>
            <div className='col-8'>
                <h5 className='tittle-skills'>skills and knowledge</h5>
            </div>
        </div>
    </div>

  )
}

export default Skills