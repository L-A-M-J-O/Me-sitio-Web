
import '../Skills/Skills.css'

import skills from '../../assets/img/skills.png'


function Skills() {
  return (
    <div className='container mt-5'>
        <div className='row'>
          <div className='col-8'>
          <div className='row gap-3'>
          <div className='col-4 border'>
            <div className='row'>
              <div className='col-2 number align-self-center'>
                <span>80%</span>
              </div> 
              <div className='col-7 align-self-center'>
                <h5 className='text-muted'>HTML5</h5>
                <h6>Podemos definir HTML5 como un estándar que sirve para definir la estructura y el contenido de una página Web.</h6>
              </div>
              <div className='col-3 align-self-center'>
                <div className='box-img-skills'>
                  <img src='https://cdn-icons-png.flaticon.com/512/174/174854.png' alt='HTML5'/>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4 border'>
            <div className='row justify-content-center'>
              <div className='col-2 number align-self-center'>
                <span>#1</span>
              </div>
              <div className='col-4'>
                <h5>HTML5</h5>
                <h6>Description</h6>
              </div>
              <div className='col-3'>
                <div className='box-img-skills'>
                  <img src='https://cdn-icons-png.flaticon.com/512/174/174854.png' alt='HTML5'/>
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='row'>
              <div className='col-10'>
                <h6>Skills and habilidades</h6>
              </div>
            </div>
          </div>
        </div>
          </div>
            <div className='col-1 p-0 text-end'>
                <img src={skills} alt='imagene de habilidades' width={20}/>
            </div>
            <div className='col-8 p-0'>
                <h5 className='tittle-skills'>skills and knowledge</h5>
            </div>
        </div>

    </div>

  )
}

export default Skills