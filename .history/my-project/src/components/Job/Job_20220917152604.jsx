import React from 'react'
import '../Job/Job.css'

function Job() {
  return (
    <section>
        <div className='container-fluid m-hero-job p-0 m-0' id='job'>
            <div className='row d-flex justify-content-evenly mt-5'>
                <div className='col-10 pt-2'>
                    <div className='row c-hero-job align-items-center justify-content-center mt-5'>
                        <div className='col-4'>
                    <div className="card-job">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">BackBone</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                        </div>
                        </div>
                    </div>
                    <div className='col-4   '>
                    <div className="card-job">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
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