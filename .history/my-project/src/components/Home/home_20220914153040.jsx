import '../Home/Home.css'

// import me from '../../assets/img/me1.jpg'
// import icon  from '../../assets/img/icon.png'

function Projects() {   
  return (
    <div className='container-fluid p-0 m-0'>
        <section>
        <div className='row-name'>
          <div className='col-12'>
            <h1><span>Alan Naranjo</span></h1>
            <h1><span>Gud sønn av Odin</span></h1>
          </div>
        </div>
        {/* <div class="row m-hero justify-content-start">
          <div class="col-3 p-0 m-0">
            <div className='col-12 m-hero-img bg-secundary'>
              <span><img className='img-fluid' src={me} alt='Alan Naranjo'/></span>
            </div>
          </div>
        </div> */}
        <div className='row m-hero-me'>
          <div className='col-12'>
            <div className='card'>

            </div>
          </div>
        </div>
        <div className='row justify-content-end me-3 m-hero-menu'>
          <div className='col-12 text-end'>
            <h2><span>ME</span></h2>
            <h2><span>JOB</span></h2>
            <h2><span>ABOUT</span></h2>
            <h2><span></span></h2>
            <h2><span>PROJECT</span></h2>
          </div>
        </div>
        </section>
    </div>

  )
}

export default Projects