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
              <div className='col-8 text-center text-muted'><p className='m-me-i'>Front End Engineer && Athlete</p></div>
              <div className='col text-center text-md-end text-lg-end'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus est debitis hic. Ab maiores quo voluptates fuga illo modi distinctio dignissimos cupiditate consequatur quas! Repellendus labore repudiandae laborum fuga mollitia beatae voluptate atque at aliquid reprehenderit! Quo quisquam perferendis consequuntur.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Me