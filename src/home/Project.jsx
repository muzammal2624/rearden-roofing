import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FaLongArrowAltRight } from "react-icons/fa";
const Project = () => {
  return (
    <div className="slider-wrapper">
      <div className="project-content">
        <div class="project-content">
          <h5>Latest Projects</h5>
          <h2>
            Explore our latest projects <br />
            for your inspiration
          </h2>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Scrollbar]}
          direction="horizontal"
          loop={true}
          pagination={{ clickable: true }}
          navigation
          scrollbar={{ draggable: true }}
          spaceBetween={30}
          slidesPerView={2}
        >
          <SwiperSlide>
            <div className="slider-content">
              <div class="swiper-slide slider-item">
                <div class="slider-content">
                  <div class="flex">
                    <div class="slide-headings">
                      <h2 class="slide-title">Roof Instructions</h2>
                      <h3 class="slide-subtitle">Roof/IDEAS</h3>
                    </div>
                    <div class="slide-button">
                      <span>
                        <FaLongArrowAltRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-content">
              <div class="swiper-slide slider-item">
                <div class="slider-content">
                  <div class="flex">
                    <div class="slide-headings">
                      <h2 class="slide-title">Roof Instructions</h2>
                      <h3 class="slide-subtitle">Roof/IDEAS</h3>
                    </div>
                    <div class="slide-button">
                      <span>
                        <FaLongArrowAltRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-content">
              <div class="swiper-slide slider-item">
                <div class="slider-content">
                  <div class="flex">
                    <div class="slide-headings">
                      <h2 class="slide-title">Roof Instructions</h2>
                      <h3 class="slide-subtitle">Roof/IDEAS</h3>
                    </div>
                    <div class="slide-button">
                      <span>
                        <FaLongArrowAltRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
