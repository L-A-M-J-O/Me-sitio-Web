
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png'


function Skills() {
  return (
    <div className='row'>
        <div className='col'>
            <img src={skills} alt='imagene de habilidades' width={25}/>
        </div>
        <div className='col'></div>
    </div>
  )
}

export default Skills