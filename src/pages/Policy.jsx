import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
SwiperCore.use([Navigation, Pagination]);

const SwiperSections = () => {
  const sections = [
    // 배열에 각 섹션의 데이터를 추가
    { id: 1, title: "Section 1", content: "Content for Section 1" },
    { id: 2, title: "Section 2", content: "Content for Section 2" },
    // 더 많은 섹션을 이 배열에 추가할 수 있습니다.
  ];

  return (
    <div className="sections-container">
      {sections.map((section) => (
        <div key={section.id} className="section">
          <h2>{section.title}</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="slide-content">{section.content} - Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">{section.content} - Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">{section.content} - Slide 3</div>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default SwiperSections;
