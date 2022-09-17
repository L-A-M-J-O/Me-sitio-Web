import React from 'react'
import '../Job/Job.css'

function Job() {
  return (
    <section>
        <div className='container-fluid' id='job'>
            <div className='row d-flex justify-content-evenly align-items-center'>
                <div className='col-4align-self-center'>
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
    </section>
  )
}

export default Job