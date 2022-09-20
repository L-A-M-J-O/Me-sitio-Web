import React from 'react'

import '../Me/Me.css'

import {Link } from 'react-scroll'

function Me() {
  return (
    <div className='section-me' id='me'>
      <div className='container-m-me'>
        <div className='row justify-content-center'>
          <div className='col-9'>
            <div className='content-me'>
            <h2 className='me-h2'>Alan Naranjo</h2>
            <p className='me-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos fugiat! Quis nihil ullam eius quas adipisci illum cumque, molestias voluptatibus labore nostrum? Cupiditate perferendis eveniet veniam officia nesciunt harum.</p>
            <Link href='#'>Read More</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me