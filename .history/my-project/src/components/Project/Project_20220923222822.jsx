import '../Project/Project.css'

import landing1 from '../../assets/img/1.png';

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
    <div className='container-fluid p-0' id='projects'>
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
          <div class="m-hero-card">
            <div class="card-body">
              <img width={10} src={landing1} alt='lading page'/>
              <h5 class="card-title">Ladings Page</h5>
              <h6 class="card-subtitle mb-2 text-muted">HTML5, CSS3, BootstrapV5</h6>
              <p class="card-text">Create a landing page of an ecommerce website with its complete responsiveness, your skills were with html, css and a css library, a javascript library was incorporated that is swiper</p>
              <a href="https://ladign-3c53c.web.app/#" class="card-link">Link</a>
            </div>
          </div>    
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
    </Swiper>
    
  </div>
);

}

export default Project