import '../Project/Project.css';

import React, { useRef, useState } from "react";

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
          delay: 2500,
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
                <div className="card-body">
                  <h5 className="card-title">Lading Page</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Html5, Css3, Bootstrap V5, JavaScript</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href='https://es.backbone.digital/' className='media-icon-arrow'>
                    <button className='btn-project'><p>See company</p></button>        
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="card-link">Card link</a>
                  <a href="." className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="card-link">Card link</a>
                  <a href="." className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="card-link">Card link</a>
                  <a href="." className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <div className='col-12'>
              <div className="card-project">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="card-link">Card link</a>
                  <a href="." className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}