import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { cardsDATA } from "./CareerHeroDATA";

export default function CareerHero() {
  return (
    <>
      {/* Information */}
      <div className="info mt-20 lg:flex lg:justify-between lg:w-11/12">
        <h1 className="text-4xl font-bold container md:text-center md:w-3/4">
          Empower Your Journey with Expert Career Insights
        </h1>
        <div className="btn mt-4 md:ms-32">
          <button className="flex items-center gap-3  border px-3 py-2 rounded-full lg:w-52 bg-[#009D77] text-white font-bold">
            View All Blogs
            <span className="mt-1 border px-2 py-2 rounded-full text-black bg-white">
              <TfiArrowTopRight size={17} />
            </span>
          </button>
        </div>
      </div>

      {/* Cards Layout */}
      <div className="container mt-10 md:grid md:justify-items-center">
        {/* Mobile & iPad view → 4 stacked cards */}
        <div className="block lg:hidden space-y-6 md:w-96">
          {cardsDATA.slice(0, 4).map((data, index) => (
            <div key={index} className="card p-4 rounded-xl shadow-md">
              <div className="img">
                <img
                  className="rounded-xl w-full h-48 object-cover"
                  src={data.img}
                  alt=""
                />
              </div>
              <div className="mt-3">
                <p className="text-sm">{data.name}</p>
                <h1 className="font-bold text-lg mt-1">{data.title}</h1>
                <p className="text-sm mt-1">{data.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* LG layout (unchanged) */}
        <div className="hidden lg:grid xl:hidden">
          {/* First Row - 2 Big Cards */}
          <div className="grid grid-cols-2 gap-6">
            {cardsDATA.slice(0, 2).map((data, index) => (
              <div key={index} className="card p-4 rounded-xl shadow-lg">
                <div className="img">
                  <img
                    className="rounded-xl w-full h-48 object-cover"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm">{data.name}</p>
                  <h1 className="font-bold text-xl mt-1">{data.title}</h1>
                  <p className="text-sm mt-1 lg:hidden">{data.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Smaller Cards */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            {cardsDATA.slice(2, 5).map((data, index) => (
              <div key={index} className="card p-4 rounded-xl shadow-md">
                <div className="img">
                  <img
                    className="rounded-xl w-full h-40 object-cover"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm">{data.name}</p>
                  <h1 className="font-bold text-lg mt-1">{data.title}</h1>
                  <p className="text-sm mt-1 lg:hidden">{data.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* XL Layout */}
        <div className="hidden xl:flex gap-6">
          {/* Left: First big card (half width) */}
          <div className="w-1/2 card p-4 border-none">
            <div className="img">
              <img
                className="rounded-xl w-full h-[400px] object-cover"
                src={cardsDATA[0].img}
                alt=""
              />
            </div>
            <div className="mt-3">
              <p className="text-sm">{cardsDATA[0].name}</p>
              <h1 className="font-bold text-2xl mt-1">{cardsDATA[0].title}</h1>
              <p className="text-sm mt-1">{cardsDATA[0].detail}</p>
            </div>
          </div>

          {/* Right: 4 cards in 2x2 grid */}
          <div className="w-1/2 grid grid-cols-2 gap-6">
            {cardsDATA.slice(1, 5).map((data, index) => (
              <div key={index} className="card p-4 border-none">
                <div className="img">
                  <img
                    className="rounded-xl w-full h-40 object-cover"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm">{data.name}</p>
                  <h1 className="font-bold text-lg mt-1">{data.title}</h1>
                  <p className="text-sm mt-1 xl:hidden">{data.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
