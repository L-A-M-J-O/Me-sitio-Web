import React from 'react'

import '../Job/Job.css'

import { Link } from 'react-router-dom'

function Job() {
  return (
    <section>
        <div className='container-fluid m-hero-job p-0 m-0' id='job'>
            <div className='row d-flex justify-content-evenly mt-5'>
                <div className='col-12 pt-2'>
                    <div className='row c-hero-job align-items-center justify-content-center justify-content-md-around mt-5'>
                        <div className='col-7 col-sm-10 col-md-3 col-lg-3' >
                    <div className="card-job-n">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHVWeqmIAjzAw/company-logo_200_200/0/1522233689880?e=1671667200&v=beta&t=I82zr4uDmNkLJ45REj-4Bn5DQMo_R7Sx_7q2qQm7z0Y" className="img-fluid card-img-top img-job " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">BackBone</h5>
                            <a href='https://es.backbone.digital/' className="card-text">BackBone Technology</a>
                            <p className="card-text">QA, Las hababilidades que requeria el trabajo era verificacion de SEO FRONT-END, Creacion de Ladings page con desing Responsive, documentacion de estados de SEO, haciamos Daily todos los dias para empezar jornada laboral, Y manejamiento de versionamiento de las aplicactivos web</p> 
                        </div>
                        </div>
                        </div>
                        <div className='col-7 col-sm-10 col-md-3 col-lg-3'>
                    <div className="card-job-n">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAYFBMVEX///8M/Kc7/LAA/KHW/uv1//oA/KIA/J8A/KT7//3a/u2n/dYo/Kvd/u+8/t/M/uey/tuh/dTJ/uVe/bpx/cF7/cTi/vHB/uJG/LOE/cjr//WS/c1Z/LmL/cpo/b0e/KneUfe5AAABw0lEQVR4nO3cXVPTQBiAUdbobkpLKVREKdL//y9BsVphNyLTdJudc67fizyzzfc0Z2cAAAAAAAAAAAAAAAAAAAAATM/54kPJ9uL1+HJg/NPxt/4NPqZQ0H/Nzfd9aT6daGBX2uC4ys1/ayew+5KbX8ZmAlN2/qI830bgXeuBDa1gd5ebv25nH4zL3PymnaNov87Nb0vj0wsMKfMbvR0Yn1xgf/96vLyAEwwM3fzl9E1xD5xkYEgvjjPfB4cnGBjSZn/2oXiKmGxgiNvdIs6uyjcSEw58SuzWm/l8c58Gl2/CgU9H0z7Gf6zetAPfSGAdAgUKrEugwN+Bs7PZ5epqdVk76W+HC4zX6xR/SA/ntav2HC4wxN3lXJ8+187644CB+62LWe2wnXECQ7+oHbYzUmCIN7XLfhkrMKTsu5vjGy2wP5ElHC0wdLXTno0YmHkDXsF4gfG2dttPIwZmX94cnRV8t/b3wdppz5wH36v1K5nWr0Vbv5to836w9Tv65p/JNP9Urf3nogKrEChQYF0CBQqsS6BAgXUJFCiwLoECBdbVfmDxf/SNBA58CeE/neiXEAAAAAAAAAAAAAAAAAAAAAAY9ghueiHDC+PlsAAAAABJRU5ErkJggg==" className=" img-fluid card-img-top img img-job" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">No Country</h5>
                            <a href='https://www.nocountry.tech/' className="card-text">No Country.Tech</a>
                            <p className="card-text">Front-End, Estuve realizando un proyecto de un icomerce en un grupo de 4 personas 2 front-end 1 back-end y UX-UI, Las habilidadades trabajo en equipo y comunicacion continua e  realizacion de versionamietos y programacion de eventos, Maquetacion de todo el desing mobile</p> 
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Job