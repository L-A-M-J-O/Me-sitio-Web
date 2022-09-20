import React from 'react'

import '../Me/Me.css'

import me from '../../assets/img/me1.jpg'

import {Link } from 'react-scroll'

function Me() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-5'>
        <div className='recuadro-img'>
                <img src={me} alt='Alan Naranjo' width={50}/>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Me