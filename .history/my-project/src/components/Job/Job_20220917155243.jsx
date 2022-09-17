import React from 'react'
import '../Job/Job.css'

function Job() {
  return (
    <section>
        <div className='container-fluid m-hero-job p-0 m-0' id='job'>
            <div className='row d-flex justify-content-evenly mt-5'>
                <div className='col-10 pt-2'>
                    <div className='row c-hero-job align-items-center justify-content-around mt-5'>
                        <div className='col-4'>
                    <div className="card-job">
                        <img src="https://media.designrush.com/agencies/6653/conversions/Backbone-Technology-logo-profile.jpg" className="card-img-top img-job" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">BackBone</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                        </div>
                        </div>
                    </div>
                    <div className='col-4'>
                    <div className="card-job">
                        <img src="https://uploads-ssl.webflow.com/62cc216ce23f79c10bc88169/62cf3fdfe34fca60a7d5b9a7_Branding%20NC-11-p-500.png" className="card-img-top" alt="..."/>
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