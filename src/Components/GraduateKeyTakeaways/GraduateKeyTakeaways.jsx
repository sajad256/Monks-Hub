import React, { useRef } from "react";
import { cardsData } from "./GraduateKeyTakeawaysDATA";
import { IoMdPlay } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GraduateKeyTakeaways() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null); // <-- custom pagination container

  return (
    <div className="mt-20">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold mb-6">
        Key Takeaways from Successful Graduate Experiences
      </h1>

      {/* Swiper Slider */}
      <div className="px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{
            clickable: true,
            el: paginationRef.current, // <-- point to custom element
          }}
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
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardsData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-sm h-96 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end relative mx-auto mt-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold">{data.title}</h2>
                    <p className="text-sm">{data.job}</p>
                  </div>
                  <div className="text-2xl border py-3 px-3 rounded-full bg-white text-black">
                    <IoMdPlay />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="flex container gap-3 lg:justify-center mt-5">
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

        {/* Custom pagination container outside the Swiper */}
        <div ref={paginationRef} className="mt-6 flex justify-center"></div>
      </div>
    </div>
  );
}
