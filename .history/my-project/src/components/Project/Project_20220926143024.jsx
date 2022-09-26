import '../Project/Project.css'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../Project/Project.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

function Project() {
  return (
    <div className='container-fluid m-hero-projects p-0 mt-5' id='projects'>
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className='card-projects'>
          <div className="m-hero-card">
            <div className="card-body">
              <h5 className="card-title">Ladings Page</h5>
              <h6 className="card-subtitle mb-2 text-muted">HTML5, CSS3, BootstrapV5</h6>
              <p className="card-text">Create a landing page of an ecommerce website with its complete responsiveness, your skills were with html, css and a css library, a javascript library was incorporated that is swiper</p>
              <button><a href="https://ladign-3c53c.web.app/#" className="card-link">Go look</a></button>
            </div>
          </div>    
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card-projects'>
          <div className="m-hero-card">
            <div className="card-body">
              <h5 className="card-title">Ladings Page</h5>
              <h6 className="card-subtitle mb-2 text-muted">HTML5, CSS3, BootstrapV5</h6>
              <p className="card-text">Create a landing page of an ecommerce website with its complete responsiveness, your skills were with html, css and a css library, a javascript library was incorporated that is swiper</p>
              <button><a href="https://ladign-3c53c.web.app/#" className="card-link">Go look</a></button>
            </div>
          </div>    
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card-projects'>
          <div className="m-hero-card">
            <div className="card-body">
              <h5 className="card-title">Ladings Page</h5>
              <h6 className="card-subtitle mb-2 text-muted">HTML5, CSS3, BootstrapV5</h6>
              <p className="card-text">Create a landing page of an ecommerce website with its complete responsiveness, your skills were with html, css and a css library, a javascript library was incorporated that is swiper</p>
              <button><a href="https://ladign-3c53c.web.app/#" className="card-link">Go look</a></button>
            </div>
          </div>    
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card-projects'>
          <div className="m-hero-card">
            <div className="card-body">
              <h5 className="card-title">Ladings Page</h5>
              <h6 className="card-subtitle mb-2 text-muted">HTML5, CSS3, BootstrapV5</h6>
              <p className="card-text">Create a landing page of an ecommerce website with its complete responsiveness, your skills were with html, css and a css library, a javascript library was incorporated that is swiper</p>
              <button><a href="https://ladign-3c53c.web.app/#" className="card-link">Go look</a></button>
            </div>
          </div>    
        </div>
      </SwiperSlide>
    </Swiper>
    
  </div>
);

}

export default Project