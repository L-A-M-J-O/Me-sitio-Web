import React from 'react'

import '../Me/Me.css'

import me from '../../assets/img/me1.jpg'

import {Link } from 'react-scroll'

function Me() {
  return (
    <div className='section-me' id='about'>
      <div className='container-m-me'>
        <div className='row justify-content-end'>
          <div className='col-12'>
            <div className='content-me'>
              <div className='recuadro-img'>
                <img src={me} alt='Alan Naranjo' width={50}/>
              </div>
            <h2>Alan Naranjo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos fugiat! Quis nihil ullam eius quas adipisci illum cumque, molestias voluptatibus labore nostrum? Cupiditate perferendis eveniet veniam officia nesciunt harum.</p>
            <Link href='#'>Read More</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me