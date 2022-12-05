import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className=" mySwiper lg:max-h-fit"
      >
        <SwiperSlide><img  src="https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-1110x570-3.jpg?v=1614343075"></img></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Slider-2_140e5150-07b5-4ac5-9b37-0cc280a558b1.png?v=1614343074"></img></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Slider-3.jpg?v=1614343076"></img></SwiperSlide>
      </Swiper>
    </>
  );
}
