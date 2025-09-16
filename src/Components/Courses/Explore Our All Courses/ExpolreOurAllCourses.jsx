import React from "react";
import { cardsData } from "./ExpolreOurAllCoursesDATA";
import { buttonData } from "./ExpolreOurAllCoursesDATA";
import { IoTimeOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

export default function ExpolreOurAllCourses() {
  return (
    <>
      <div className="container lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {cardsData.map((data, index) => {
          return (
            <Link to="/coursesdetails">
              <div className="card container mt-10 rounded-xl md:w-7/12 lg:w-10/12 cursor-pointer">
                <div className="img">
                  <img
                    className="rounded-xl mt-2 transition-transform duration-300 ease-in hover:scale-105 cursor-pointer"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="CourseC-price  mt-3 flex justify-between items-center">
                  <p className="border p-1 rounded-lg bg-[#F0F0F0]">
                    {data.CourseC}
                  </p>
                  <p className="text-[#009D77] text-2xl font-bold">
                    {data.price}
                  </p>
                </div>
                <div
                  key={index}
                  className={`title mt-4 ${index === 6 ? "w-52" : ""}`}
                >
                  <p className="font-bold text-2xl">{data.CourseT}</p>
                </div>
                <div className="main-time-lectures mt-3 flex justify-between ">
                  <div className="time flex items-center gap-2 text-gray-500">
                    <span className="#">
                      <IoTimeOutline size={20} />
                    </span>
                    <p>{data.time}</p>
                  </div>
                  <div className="lectires flex items-center gap-2 text-gray-500">
                    <span className="mt-1">
                      <TiDocumentText size={20} />
                    </span>
                    <p>{data.lectures}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="btn flex justify-center mt-6">
        <button className="border-black border px-4 py-3 rounded-full font-bold">
          View More Course
        </button>
      </div>
    </>
  );
}
