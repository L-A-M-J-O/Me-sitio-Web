
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png'


function Skills() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <img src={skills} alt='imagene de habilidades' width={20}/>
            </div>
            <div className='col'></div>
        </div>
    </div>

  )
}

export default Skills