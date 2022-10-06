import '../Me/Me.css';

function Me() {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row g-2 justify-content-center mt-5'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6 m-5 text-center m-me-img'>
            <div className='me-img'>
            </div>  
          </div>
          <div className='col-10 col-sm-12 col-md-6 col-lg-6 align-self-center'>
            <div className='box-hero-me row row-cols-1 justify-content-center'>
              <div className='col-10 text-center'><h4 className='m-me-a'>Alan Mateo Naranjo Alvarado</h4></div>
              <div className='col-8 text-center text-muted'><p className='m-me-i'>Front End Engineer</p></div>
              <div className='col text-center text-md-end text-lg-center'>I have led a life of only questions and thanks to that I took myself to this world of technology and programming, I have several skills and knowledge, In Web development I understand and understanding the methodologies that are among them is the sematics and good practices in development, I have creativity I don't like to stay in what has already been done but to give you an idea and improve it and create something completely new</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Me