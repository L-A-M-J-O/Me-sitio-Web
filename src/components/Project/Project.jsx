import '../Project/Project.css';

import imgRE from '../../assets/img/React-ecommerce.png';
import imgHJ from '../../assets/img/habilidadesjavascript.png';
import imgLA from '../../assets/img/lading.png';

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
          <div className='row justify-content-center'>
            <div className='col-10'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src={imgRE} alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Reat Ecommerce Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript "React"</h6>
                  <p className="card-text">This project was created with the concept of creating a website in which you indicate the purchase of beers or drinks of all kinds, country and culture</p>
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
          <div className='row justify-content-center'>
            <div className='col-10'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src='https://media-exp1.licdn.com/dms/image/C4D22AQEEOqnQK47Lwg/feedshare-shrink_1280/0/1662226217344?e=1668038400&v=beta&t=v24vOlFZnbQdlJ0xV7vq3CRVy17XnYtJBlmnrmnm7eA' alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Garage Store</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, React, Nodejs, MongoDb, MySQL</h6>
                  <p className="card-text">This project was created by a group of juniors in which it was used to create a web application to be able to sell second-hand things, the complete database was created from scratch as the front-end, it also participated in the functionality and HTML layout between others more</p>
                  <a href='https://garagestoreproyect.vercel.app/' className='media-icon-arrow'>
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
          <div className='row justify-content-center'>
            <div className='col-10'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src={ imgHJ } alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">JavaScript skills</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Tailwind Css, JavaScript</h6>
                  <p className="card-text">Here I created this lading with the purpose of putting all the knowledge in javascript, api calls, incorporation of libraries such as Swiper and alerts</p>
                  <a href='https://github.com/L-A-M-J-O/Javascript' className='media-icon-arrow'>
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
          <div className='row justify-content-center'>
            <div className='col-10 justify-content-center'>
              <div className="card-project">
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                  <img className='img-projects' src= { imgLA } alt='projects'/>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className="card-body">
                  <h5 className="card-title">Lading Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript Swiper</h6>
                  <p className="card-text">This load was created by practice totally with boostrap and pure css, javascript libraries were also acquired such as swiper and with the purpose of showing I control the css and html with semantics and organization</p>
                  <a href='https://ladign-3c53c.web.app/#' className='media-icon-arrow'>
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
                  {/* <img className='img-projects' src='' alt='projects'/> */}
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-12'>
                <div className="card-body">
                  <h5 className="card-title">Reat Ecommerce Website</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Gym OAM</h6>
                  <p className="card-text">In creation</p>
                  <a href='.' className='media-icon-arrow'>
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