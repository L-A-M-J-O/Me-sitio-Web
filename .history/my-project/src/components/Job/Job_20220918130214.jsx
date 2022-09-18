import React from 'react'
import '../Job/Job.css'

function Job() {
  return (
    <section>
        <div className='container-fluid m-hero-job p-0 m-0' id='job'>
            <div className='row d-flex justify-content-evenly mt-5'>
                <div className='col-12 pt-2'>
                    <div className='row c-hero-job align-items-center justify-content-around mt-5'>
                        <div className='col-12 col-sm-10 col-md-3 col-lg-4'>
                    <div className="card-job-n">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHVWeqmIAjzAw/company-logo_200_200/0/1522233689880?e=1671667200&v=beta&t=I82zr4uDmNkLJ45REj-4Bn5DQMo_R7Sx_7q2qQm7z0Y" className="img-fluid card-img-top img-job " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">BackBone</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                        </div>
                        </div>
                        </div>
                        <div className='col-3'>
                    <div className="card-job-n">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAYFBMVEX///8M/Kc7/LAA/KHW/uv1//oA/KIA/J8A/KT7//3a/u2n/dYo/Kvd/u+8/t/M/uey/tuh/dTJ/uVe/bpx/cF7/cTi/vHB/uJG/LOE/cjr//WS/c1Z/LmL/cpo/b0e/KneUfe5AAABw0lEQVR4nO3cXVPTQBiAUdbobkpLKVREKdL//y9BsVphNyLTdJudc67fizyzzfc0Z2cAAAAAAAAAAAAAAAAAAAAATM/54kPJ9uL1+HJg/NPxt/4NPqZQ0H/Nzfd9aT6daGBX2uC4ys1/ayew+5KbX8ZmAlN2/qI830bgXeuBDa1gd5ebv25nH4zL3PymnaNov87Nb0vj0wsMKfMbvR0Yn1xgf/96vLyAEwwM3fzl9E1xD5xkYEgvjjPfB4cnGBjSZn/2oXiKmGxgiNvdIs6uyjcSEw58SuzWm/l8c58Gl2/CgU9H0z7Gf6zetAPfSGAdAgUKrEugwN+Bs7PZ5epqdVk76W+HC4zX6xR/SA/ntav2HC4wxN3lXJ8+187644CB+62LWe2wnXECQ7+oHbYzUmCIN7XLfhkrMKTsu5vjGy2wP5ElHC0wdLXTno0YmHkDXsF4gfG2dttPIwZmX94cnRV8t/b3wdppz5wH36v1K5nWr0Vbv5to836w9Tv65p/JNP9Urf3nogKrEChQYF0CBQqsS6BAgXUJFCiwLoECBdbVfmDxf/SNBA58CeE/neiXEAAAAAAAAAAAAAAAAAAAAAAY9ghueiHDC+PlsAAAAABJRU5ErkJggg==" className=" img-fluid card-img-top img img-job" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">No Country</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
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