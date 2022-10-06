import '../Project/Project.css';

import imgRE from '../../assets/img/React-ecommerce.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className='box-pro m-5' id='projects'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src={imgRE} alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Reat Ecommerce Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href='https://react-ecommerce-eosin-ten.vercel.app/' className='media-icon-arrow'>
                    <button className='btn-project'><p>Go to see</p></button>        
                  </a>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src='https://img.freepik.com/free-psd/e-learning-landing-page-template-design_23-2149118530.jpg?w=2000' alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Reat Ecommerce Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href='https://es.backbone.digital/' className='media-icon-arrow'>
                    <button className='btn-project'><p>Go to see</p></button>        
                  </a>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src='https://img.freepik.com/free-psd/e-learning-landing-page-template-design_23-2149118530.jpg?w=2000' alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Reat Ecommerce Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href='https://es.backbone.digital/' className='media-icon-arrow'>
                    <button className='btn-project'><p>Go to see</p></button>        
                  </a>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src='https://img.freepik.com/free-psd/e-learning-landing-page-template-design_23-2149118530.jpg?w=2000' alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Reat Ecommerce Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href='https://es.backbone.digital/' className='media-icon-arrow'>
                    <button className='btn-project'><p>Go to see</p></button>        
                  </a>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src='https://img.freepik.com/free-psd/e-learning-landing-page-template-design_23-2149118530.jpg?w=2000' alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Reat Ecommerce Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href='https://es.backbone.digital/' className='media-icon-arrow'>
                    <button className='btn-project'><p>Go to see</p></button>        
                  </a>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}