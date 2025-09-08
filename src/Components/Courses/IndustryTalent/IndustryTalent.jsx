import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { cardsData } from "./IndustryTalentDATA";
export default function IndustryTalent() {
  return (
    <>
      <section className="bg-[#011813] mt-20 xl:min-h-[180vh]">
        {/* Information */}
        <div className="Info text-center container  lg:flex lg:items-center  lg:justify-between xl:pt-12 lg:pt-12">
          <h1 className="text-white font-bold text-4xl pt-14 xl:text-5xl lg:w-6/12 xl:w-6/12">
            Learn from the Best Talent in the Industry
          </h1>
          <div className="btn mt-3 ">
            <button className="bg-white flex items-center justify-between gap-3 text-center py-2 px-3 rounded-full">
              View All Mentors
              <span className="mt-1 border bg-black text-white py-2 px-2 rounded-full">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        {/* Main div For Cards */}
        <div className="Main-for-Cards container lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:mt-20 xl:mt-20 ">
          {cardsData.map((data, index) => {
            return (
              <div>
                <div
                  className={`card-1 border border-white container rounded-t-full rounded-b-full h-screen w-11/12 bg-[#F6CCDA] flex flex-col justify-between items-center md:w-72 lg:h-full ${
                    index === 1
                      ? "xl:mt-20 bg-[#F5E6BB]"
                      : index === 3
                      ? "xl:mt-20 bg-[#6D799F]"
                      : index === 2
                      ? "bg-[#8B8DD6]"
                      : ""
                  }`}
                >
                  {/* Top info */}
                  <div className="card-top-info flex flex-col justify-center items-center mt-10 text-black">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-sm">{data.job}</p>
                  </div>

                  {/* Image at bottom center */}
                  <div className="card-img">
                    <img
                      className="rounded-full w-96 h-96 object-cover mx-auto relative -top-3"
                      src={data.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
