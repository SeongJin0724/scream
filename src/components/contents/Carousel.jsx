import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import { mainSlideImg } from "../data/mainSlideImg";

import slide1 from "../../assets/image/mainSlideImg1.webp";
import slide2 from "../../assets/image/mainSlideImg2.webp";

export default function Carousel() {
  return (
    <Swiper
      className="mySwiper carousel_wrap"
      autoplay={{
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide className="swiperSlide_item">
        <div className="item_inner">
          <img src={slide1} alt={slide1} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
