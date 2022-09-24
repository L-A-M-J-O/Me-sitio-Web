import '../Project/Project.css'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

function Project() {
  return (
    <div className='container-fluid p-0' id='project'>
      <div className='row'>
        <div className='col border p-2'>
          123
        </div>
        <div className='col border p-2'>
          123
        </div>
        <div className='col border p-2'>
          123
        </div>
      </div>
    </div>
  )
}

export default Project