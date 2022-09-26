import React from 'react'

import '../Job/Job.css'
import company from '../../assets/img/company.png'

function Job() {
  return (
    <div id='job'>
      <div className='row me-0 justify-content-center justify-content-md-end justify-content-lg-end mt-5'>
        <div className='col-1 text-end p-0 pb-4'>
          <img src={company} alt='frase de compañia' width={18}/>
        </div>
        <div className='col-9 col-sm-9 col-md-7 col-lg-7 m-0 text-start'>
          <p className='text-job'>I managed to have the opportunity to work in a company and be able to join a work group and develop large projects</p>
        </div>
      </div>
    </div>
  )
}

export default Job