import React from 'react'

import '../Footer/Footer.css';

import ubicacion from '../../assets/img/ubicacion.png';
import telefono from '../../assets/img/telefono.png';
import email from '../../assets/img/email.png';

function Footer() {
  return (
    <div>
        <footer className='mt-5'>
            <div className='row justify-content-end mt-2'>
                <div className='col-11 col-sm-12 col-md-4 col-lg-4 m-0 d-flex'>
                 <div className='col-1 p-0 m-0 text-end'>
                    <img className='footer-img' src={email} alt='Spain' width={37}/>
                 </div>
                    <h6><a href=".">lamjo30@gmail.com</a></h6>
                <div className='col-1 p-0 m-0 text-end'>
                    <img className='footer-img' src={telefono} alt='Spain' width={37}/>
                 </div>
                    <h6><a href=".">+34 665 19 21 25</a></h6>
                </div>
            </div>
            <div className='row mt-5 m-1 justify-content-center'>
                <div className='col-12 mb-3 col-sm-12 col-md-5 col-lg-5 mb-md-0 m-0 d-flex'>
                    <h2 className='text-footer'>thanks for seeing it</h2>
                </div>
            </div>
            <div className='row justify-content-center justify-content-md-start justify-content-lg-start'>
                <div className='col-1 p-0 m-0 text-end'>
                 <img src={ubicacion} alt='Spain' width={30}/>
                </div>
                <div className='col-6 col-md-4 col-lg-4 d-flex text-center'>
                    <h6>Spain Madrid, Community of Madrid</h6>
                </div>
            </div>
            <div className='row justify-content-center box-copy'>
                <div className='col-12 text-center box-copy-text align-self-end'>
                    <p className='copy'>Todos los derechos reservados @2022 Alan Mateo Naranjo Alvarado</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer