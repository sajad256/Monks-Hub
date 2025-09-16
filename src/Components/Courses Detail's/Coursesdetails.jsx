import React from "react";
import Navbar from "../Navbar/Navbar";
import { coursesdetail } from "./Coursesdetail'sData";
import { RiLineChartLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { IoTimeOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CgArrowTopRight } from "react-icons/cg";
import { info } from "./Coursesdetail'sData";
import { mentorsData } from "./Coursesdetail'sData";
import Dreamcareer from "../DreamCareerHero/DreamCareerHero";
import Footer from "../Footer/Footer";

export default function Coursesdetails() {
  return (
    <>
      <Navbar />
      <div className="main-info md:ms-20">
        <div className="info container mt-16 md:mt-5 ">
          <p>Home / Courses / Courses Details</p>
          <h1 className="font-bold text-5xl leading-snug mt-3 lg:w-7/12 xl:text-6xl">
            Web Development Course
          </h1>
        </div>
      </div>
      {/* Courses Details */}
      <div className="main-for-courses-D mt-10 ">
        {coursesdetail.map((data) => {
          return (
            <>
              <div className="courses container xl:flex">
                <div className="img container md:w-8/12">
                  <img
                    src={data.img}
                    className="rounded-3xl w-full h-full xl:h-4/6 xl:mt-6"
                    alt=""
                  />
                </div>
                <div className="main-for-buttom-info border mt-4 rounded-xl bg-[#FBEDDE] container md:w-8/12 xl:w-3/12 xl:h-full">
                  <div className="courses-info container">
                    <div className="price">
                      <p className="text-[#DE4882] font-bold text-2xl mt-3">
                        {data.price}
                      </p>
                    </div>
                    <div className="courses-info"></div>
                    <p className="font-bold text-2xl mt-2">
                      {data.coursesInfo}
                    </p>

                    <div className="level flex justify-between mt-3">
                      <p className="flex items-center gap-2 text-lg">
                        <span>
                          <RiLineChartLine size={20} />
                        </span>
                        Level
                      </p>
                      <p>{data.level}</p>
                    </div>
                    <div className="lecture flex justify-between mt-3">
                      <p className="flex gap-2 items-center text-lg">
                        <span>
                          <TiDocumentText size={20} />
                        </span>
                        Lecture
                      </p>
                      <p>{data.lecture}</p>
                    </div>
                    <div className="duration flex justify-between mt-3">
                      <p className="flex gap-2 items-center text-lg">
                        <span>
                          <IoTimeOutline size={20} />
                        </span>
                        Duration
                      </p>
                      <p>{data.duration}</p>
                    </div>
                    <div className="totalenrolled flex justify-between mt-3">
                      <p className="flex gap-2 items-center text-base">
                        <span>
                          <IoPersonSharp size={20} />
                        </span>
                        Total Enrolled
                      </p>
                      <p>{data.totalEnrolled}</p>
                    </div>
                    <div className="lastupdate flex justify-between mt-3">
                      <p className="flex gap-2 items-center text-lg">
                        <span>
                          <CiCalendar size={20} />
                        </span>
                        Last Update
                      </p>
                      <p>{data.lastUpdate}</p>
                    </div>
                  </div>
                  <div className="btn mt-8 md:flex">
                    <button className="group hover:bg-[#009D77] xl:mb-4 flex items-center px-2 py-1 justify-between container bg-[#E64B87] rounded-full text-white border w-60 ">
                      Start Learning
                      <span className="bg-black py-2 px-2 rounded-full">
                        <CgArrowTopRight
                          size={20}
                          className="text-white transition-transform duration-300 group-hover:rotate-45"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* Information */}
      <div className="information">
        <div className="about-this-course container mt-5">
          {info.map((data) => {
            return (
              <>
                <h1 className="font-bold text-xl">{data.abouthecourse}</h1>
                <p className="text-sm mt-3 text-[#64676A] leading-6">
                  {data.aboutdetail}
                </p>
              </>
            );
          })}
        </div>
        <div className="what-you-learn">
          {info.map((data) => {
            return (
              <>
                <div className="container mt-4">
                  <h1 className="font-bold text-xl">{data.whatyoulearn}</h1>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black">HTML Fundamentals: </span>
                    {data.Html}
                  </p>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black">CSS Essentials: </span>
                    {data.Css}
                  </p>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black">JavaScript Basics: </span>
                    {data.Js}
                  </p>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black">Responsive Design: </span>
                    {data.Responsive}
                  </p>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black">Project-Based Learning: </span>
                    {data.projectbased}
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <div className="Requirements">
          {info.map((data) => {
            return (
              <>
                <div className="mt-4 container">
                  <h1 className="font-bold text-xl">{data.requirements}</h1>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black font-bold">
                      Computer & Internet Access:{" "}
                    </span>
                    {data.Computer}
                  </p>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black font-bold">Code Editor: </span>
                    {data.CodeEditor}
                  </p>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black font-bold">
                      Basic Computer Skills:{" "}
                    </span>
                    {data.BasicComputer}
                  </p>
                  <p className="mt-3 container text-[#64676A]">
                    <span className="text-black font-bold">
                      No Prior Coding Knowledge Required:{" "}
                    </span>
                    {data.NoPrior}
                  </p>
                </div>
              </>
            );
          })}
        </div>
        {/* Course Curriculum */}
        <div className="Course-Curriculum">
          {info.map((data) => {
            return (
              <>
                <div className="container mt-4">
                  <h1 className="font-bold text-xl">{data.CourseC}</h1>
                  <p className="mt-3 container text-black font-bold">
                    {data.introduction}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.overrview}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.settingsup}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.htmlCssJs}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.Integrating}
                  </p>
                </div>
                <div className="container mt-4">
                  <p className="mt-3 container text-black font-bold">
                    {data.htmlbasic}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.overrview}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.settingsup}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.htmlCssJs}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.Integrating}
                  </p>
                </div>
                <div className="container mt-4">
                  <p className="mt-3 container text-black font-bold">
                    {data.Cssbaic}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.overrview}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.settingsup}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.htmlCssJs}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.Integrating}
                  </p>
                </div>
                <div className="container mt-4">
                  <p className="mt-3 container text-black font-bold">
                    {data.Jsbasic}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.overrview}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.settingsup}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.htmlCssJs}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.Integrating}
                  </p>
                </div>
                <div className="container mt-4">
                  <p className="mt-3 container text-black font-bold">
                    {data.building}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.overrview}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.settingsup}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.htmlCssJs}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.Integrating}
                  </p>
                </div>
                <div className="container mt-4">
                  <p className="mt-3 container text-black font-bold">
                    {data.finalproject}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.overrview}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.settingsup}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.htmlCssJs}
                  </p>
                  <p className="mt-3 container xl:text-lg text-[#64676A] ">
                    {data.Integrating}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="main-for-cards container mt-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Course Mentors</h2>

        {/* Cards */}
        <div className="lg:flex gap-4 flex-wrap">
          {mentorsData.map((data, index) => (
            <div key={index} className="card rounded-xl mt-4 md:w-80">
              <div className="img bg-[#FCEEDF] rounded-xl">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="info mt-3 mb-3 text-center">
                <h1 className="font-bold text-lg">{data.name}</h1>
                <p className="text-sm">{data.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dreamcareer />
      <Footer />
    </>
  );
}
