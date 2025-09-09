import React from "react";
import { cardsData } from "./JobMarketSectionDATA";
import { IoTimeOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Cards() {
  return (
    <>
      <div className="cards-wrapper">
        {/* First card */}
        {cardsData[0] && (
          <div className="main-for-cards container md:flex md:justify-center">
            <div className="card-1  border mt-3 rounded-xl md:w-96  lg:flex lg:justify-center items-center lg:w-11/12 xl:w-11/12">
              <div className="img container flex justify-center mt-3 xl:w-6/12">
                <img
                  className="rounded-3xl w-64 lg:w-96 xl:w-9/12 lg:mb-5 xl:me-28"
                  src={cardsData[0].img}
                  alt={cardsData[0].title}
                />
              </div>
              <div className=" xl:w-6/12">
                <div className="development-and-populer container flex justify-between mt-4">
                  {cardsData[0].development && (
                    <button className="btn p-1 bg-[#F0F0F0] font-bold rounded-xl">
                      {cardsData[0].development}
                    </button>
                  )}
                  {cardsData[0].popular && (
                    <button className="btn flex items-center gap-2 border bg-black text-white font-bold rounded-full">
                      {cardsData[0].fire && (
                        <img
                          className="w-5"
                          src={cardsData[0].fire}
                          alt="fire"
                        />
                      )}
                      {cardsData[0].popular}
                    </button>
                  )}
                </div>
                <div className="info container">
                  <h1 className="font-bold text-2xl mt-3">
                    {cardsData[0].title}
                  </h1>
                  {cardsData[0].detail && (
                    <p className="mt-3">{cardsData[0].detail}</p>
                  )}
                </div>
                <div className="houre-and-lecture container flex justify-between mt-3">
                  <p className="flex items-center gap-1">
                    <IoTimeOutline />
                    {cardsData[0].houre}
                  </p>
                  <p className="flex items-center gap-1">
                    <TiDocumentText />
                    {cardsData[0].lecture}
                  </p>
                </div>
                <div className="container border w-64 mt-3"></div>
                <div className="price-and-btn container flex justify-between items-center mt-3">
                  <h1 className="text-3xl font-bold text-[#009D77] mb-2">
                    {cardsData[0].price}
                  </h1>
                  <div className="border-1 border-black px-2 py-2 mb-2 rounded-full">
                    <button className="flex items-center gap-2">
                      View Details
                      <FaArrowRight className="mt-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other cards in grid */}
        <div className="md:justify-items-center lg:grid lg:grid-cols-2 lg:justify-items-center xl:grid-cols-3">
          {cardsData.slice(1).map((data, index, arr) => (
            <div
              key={index}
              className={`card-1 border mt-3 rounded-xl md:w-96 ${
                index === arr.length - 1 ? "xl:hidden" : ""
              }`}
            >
              <div className="img container flex justify-center mt-3">
                <img
                  className="rounded-3xl w-64 lg:w-96 lg:mb-5"
                  src={data.img}
                  alt={data.title}
                />
              </div>
              <div>
                <div className="development-and-populer container flex justify-between mt-4">
                  <button className="btn p-2 bg-[#F0F0F0] font-bold rounded-xl">
                    {data.category || data.marketing || data.Ui || data.develo}
                  </button>
                  <div className="text-2xl font-bold text-[#009D77] mt-1">
                    {data.price}
                  </div>
                </div>
                <div className="info container">
                  <h1 className="font-bold text-2xl mt-3">{data.title}</h1>
                  {data.detail && <p className="mt-3">{data.detail}</p>}
                </div>
                <div className="houre-and-lecture container flex justify-between mt-3">
                  <p className="flex items-center gap-1">
                    <IoTimeOutline />
                    {data.houre}
                  </p>
                  <p className="flex items-center gap-1">
                    <TiDocumentText />
                    {data.lecture}
                  </p>
                </div>
                <div className="container border w-64 mt-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="last-btn mt-4 flex justify-center ">
        <button
          type="button"
          className="group flex items-center gap-3 border border-black px-4 py-2 rounded-full bg-black text-white hover:bg-green-500 transition-colors"
        >
          View All Courses
          <span className="flex items-center justify-center border border-white w-8 h-8 rounded-full bg-white text-black ">
           <TfiArrowTopRight />
          </span>
        </button>
      </div>
    </>
  );
}
