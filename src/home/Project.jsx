import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import SwiperItem from "../components/SwiperItem";
const Project = () => {
  const ItemDetails = [
    {
      title: "Roof Instructions",
      description: "Roof/IDEAS",
    },
    {
      title: "Roof Instructions",
      description: "Roof/IDEAS",
    },
    {
      title: "Roof Instructions",
      description: "Roof/IDEAS",
    },
    {
      title: "Roof Instructions",
      description: "Roof/IDEAS",
    },
  ];
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
          {ItemDetails.map((val, i) => {
            return (
              <div className="col" key={i}>
                <SwiperSlide>
                  <SwiperItem {...val} />
                </SwiperSlide>
              </div>
            );
          })}
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
