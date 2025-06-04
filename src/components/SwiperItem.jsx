import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const SwiperItem = (props) => {
  const { title, description } = props;
  return (
    <div>
      {" "}
      <div className="slider-content">
        <div class="swiper-slide slider-item">
          <div class="slider-content">
            <div class="flex">
              <div class="slide-headings">
                <h2 class="slide-title">{title}</h2>
                <h3 class="slide-subtitle">{description}</h3>
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
    </div>
  );
};

export default SwiperItem;
