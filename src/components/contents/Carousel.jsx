import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import slide1 from "../../assets/image/mainSlideImg1.webp";
import slide2 from "../../assets/image/mainSlideImg2.webp";
import slide3 from "../../assets/image/mainSlideImg3.webp";
import slide4 from "../../assets/image/mainSlideImg4.webp";
import slide5 from "../../assets/image/mainSlideImg5.webp";
import slide6 from "../../assets/image/mainSlideImg6.webp";
import slide7 from "../../assets/image/mainSlideImg7.webp";
import slide8 from "../../assets/image/mainSlideImg8.webp";

export default function Carousel() {
  function getBrightness(color) {
    let r, g, b;

    // HEX 색상 처리
    if (color.startsWith("#")) {
      r = parseInt(color.substr(1, 2), 16);
      g = parseInt(color.substr(3, 2), 16);
      b = parseInt(color.substr(5, 2), 16);
    }
    // RGB 색상 처리
    else if (color.startsWith("rgb")) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      r = parseInt(match[1]);
      g = parseInt(match[2]);
      b = parseInt(match[3]);
    }

    // 밝기 계산
    return (r * 299 + g * 587 + b * 114) / 1000;
  }
  return (
    <Swiper
      className="mySwiper carousel_wrap"
      autoplay={{
        disableOnInteraction: false,
      }}
      navigation={true}
      loop={true}
      pagination={true}
      modules={[Autoplay, Navigation, Pagination]}
      onSlideChange={(swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const backgroundColor =
          activeSlide.querySelector(".item_wrap").style.backgroundColor;

        const brightness = getBrightness(backgroundColor);
        const arrowColor = brightness > 200 ? "#000000" : "#FFFFFF";

        document.querySelector(".swiper-button-next").style.color = arrowColor;
        document.querySelector(".swiper-button-prev").style.color = arrowColor;
      }}
    >
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#112ab3" }}>
          <img src={slide1} alt={slide1} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#C8AD9D" }}>
          <img src={slide2} alt={slide2} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#F5F2EA" }}>
          <img src={slide3} alt={slide3} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#EA6488" }}>
          <img src={slide4} alt={slide4} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#E4AA97" }}>
          <img src={slide5} alt={slide5} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#000" }}>
          <img src={slide6} alt={slide6} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#DBDBD0" }}>
          <img src={slide7} alt={slide7} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide_item">
        <div className="item_wrap" style={{ backgroundColor: "#74A5AC" }}>
          <img src={slide8} alt={slide8} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
