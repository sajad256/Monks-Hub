import React, { useRef } from "react";
import { Cardsdata } from "./CardsDATA";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Cards() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null); // <-- custom pagination container

  return (
    <div className="p-4 flex flex-col items-center w-full">
      {/* Navigation buttons */}
      <div className="flex h-10 container items-center mt-3 gap-3 justify-start xl:justify-center">
        <button
          ref={prevRef}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={20}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ clickable: true, el: paginationRef.current }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.destroy();
            swiper.pagination.init();
            swiper.pagination.update();
          });
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {Cardsdata.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="w-40 h-56 sm:w-60 sm:h-80 md:w-44 md:h-64 lg:w-52 lg:h-72 bg-[#FCEED4] rounded-[200px] flex items-center justify-center overflow-hidden shadow-md mx-auto mt-3 relative">
              <img
                src={c.img}
                alt=""
                className="w-full h-full object-cover rounded-[200px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination outside the Swiper */}
      <div ref={paginationRef} className="mt-6 flex justify-center gap-1"></div>
    </div>
  );
}
