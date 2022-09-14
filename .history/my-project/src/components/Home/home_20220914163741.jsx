import '../Home/Home.css'

import me from '../../assets/img/me1.jpg'
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
              <div className='m-img'>
                <img src={me} alt='Alan Naranjo'/>
              </div>
              <div className='content-me'>
                <div className='details mt-5'>
                  <h3 className='h2-tittle'>Alan Naranjo<br/><span className='m-hero-title'>Developer Front-end</span></h3>
                  <div className='m-skills'>
                    <div className='row m-skills-r'>
                      <div className='col'>
                        <h4>HTML5<br/><span>80%</span></h4>
                      </div>
                      <div className='col'>
                        <h4>JavaScript<br/><span>60%</span></h4>
                      </div>
                      <div className='col'>
                        <h4>CSS3<br/><span>95%</span></h4>
                      </div>
                      <div className='col-12'>
                        <h4>React JS<br/><span>70%</span></h4>
                      </div>
                      <div className='col'>
                        <h4>Java<br/><span>50%</span></h4>
                      </div>
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-end me-3 m-hero-menu'>
          <div className='col-12 text-end'>
            <h2><span>ME</span></h2>
            <h2><span>JOB</span></h2>
            <h2><span>ABOUT</span></h2>
            <h2><span>STUDIES</span></h2>
            <h2><span>PROJECT</span></h2>
          </div>
        </div>
        </section>
    </div>

  )
}

export default Projects