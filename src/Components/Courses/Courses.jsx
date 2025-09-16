import React from "react";
import Navbar from "../Navbar/Navbar";
import { cardsData } from "./CoursesDATA";
import { buttonData } from "./CoursesDATA";
import { IoTimeOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import ExpolreOurAllCourses from "./Explore Our All Courses/ExpolreOurAllCourses";
import IndustryTalent from "./IndustryTalent/IndustryTalent";
import GraduateKeyTakeaways from "../GraduateKeyTakeaways/GraduateKeyTakeaways";
import DreamCareerHero from "../DreamCareerHero/DreamCareerHero";
import Footer from "../Footer/Footer";
import { Link } from "react-router";

export default function Courses() {
  // MD layout rows
  const mdFirstRow = [buttonData[0], buttonData[1], buttonData[2]]; // All Categories, Development, UI/UX
  const mdSecondRow = [buttonData[3], buttonData[4], buttonData[6]]; // Popular, Project Management, Marketing
  const mdThirdRow = [buttonData[5]]; // Accounting

  // Icon for Project Management
  const PMIcon = buttonData[4].icon;

  return (
    <>
      <Navbar />

      <div className="main mt-16">
        <div className="home-courses text-center container">
          <p className="lg:text-left lg:ms-32">Home / Courses</p>
          <div className=" lg:w-10/12 mt-2">
            <h1 className="font-bold text-4xl leading-snug lg:text-left lg:ms-32 lg:text-5xl">
              We Offer an Outstanding Learning Experience
            </h1>
          </div>
        </div>
      </div>
      {/* Main for First Cards */}
      {cardsData[0] && (
        <Link to="/coursesdetails">
          <div className="main-for-cards container md:flex md:justify-center xl:mt-14">
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
                  <div className="border-1 border-black px-3 py-2 mb-2 rounded-full hover: hover:bg-[#009D77]  duration-500 hover:text-white">
                    <button className="group flex items-center h-8 gap-2">
                      <span className="text-sm">View Details</span>

                      {/* Circle Button */}
                      <span className="z-10 inline-block items-center justify-center p-2 rounded-full border bg-black text-white transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer">
                        <CgArrowTopRight
                          size={20}
                          className="transform transition-transform duration-300 group-hover:rotate-45"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
      <div className="text-center mt-7 xl:mt-10">
        <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl">
          Explore Our All Courses
        </h1>
      </div>
      <div
        className="p-4 mt-8
            "
      >
        {/* Mobile layout */}
        <div className="grid grid-cols-2 justify-items-start gap-2 md:hidden">
          {/* All buttons except Project Management, Marketing, Accounting */}
          {buttonData
            .filter((_, index) => index !== 4 && index !== 5 && index !== 6)
            .map((data, idx) => {
              const Icon = data.icon;
              return (
                <div key={idx} className="main-for-btn #">
                  <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                    <span className="# ms-2">
                      <Icon size={15} />
                    </span>
                    <p className="text-sm">{data.title}</p>
                  </div>
                </div>
              );
            })}

          {/* Project Management alone in third row */}
          <div className="col-span-2 flex justify-center mt-2">
            <div className="main-for-btn #">
              <div className="border flex items-center gap-2 py-2 rounded-full w-44 #">
                <span className="# ms-2">
                  <PMIcon size={15} />
                </span>
                <p className="text-sm">{buttonData[4].title}</p>
              </div>
            </div>
          </div>

          {/* Marketing + Accounting side by side in fourth row */}
          <div className="col-span-2 flex justify-center gap-3 mt-2">
            {[buttonData[6], buttonData[5]].map((data, idx) => {
              const Icon = data.icon;
              return (
                <div key={idx} className="main-for-btn #">
                  <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                    <span className="# ms-2">
                      <Icon size={15} />
                    </span>
                    <p className="text-sm">{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* MD / iPad layout — fixed, visible */}
        <div className="hidden md:block lg:hidden">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {mdFirstRow.map((data, idx) => {
              const Icon = data.icon;
              return (
                <div key={idx} className="main-for-btn #">
                  <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                    <span className="# ms-2">
                      <Icon size={15} />
                    </span>
                    <p className="text-sm">{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {mdSecondRow.map((data, idx) => {
              const Icon = data.icon;

              // Custom widths for specific buttons
              let widthClass = "w-32"; // default
              if (idx === 0) widthClass = "w-24"; // Popular
              if (idx === 1) widthClass = "w-44"; // Project Management
              if (idx === 2) widthClass = "w-28"; // Marketing

              return (
                <div key={idx} className="main-for-btn #">
                  <div
                    className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                  >
                    <span className="# ms-2">
                      <Icon size={15} />
                    </span>
                    <p className="text-sm">{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap justify-center w-3/5 gap-3 mt-3">
            {mdThirdRow.map((data, idx) => {
              const Icon = data.icon;
              return (
                <div key={idx} className="main-for-btn #">
                  <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                    <span className="# ms-2">
                      <Icon size={15} />
                    </span>
                    <p className="text-sm">{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* LG / Desktop layout */}
        <div className="hidden lg:block xl:hidden">
          {/* First Row: 5 buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {buttonData.slice(0, 5).map((data, idx) => {
              const Icon = data.icon;

              // Optional: give custom widths per button
              let widthClass = "w-32";
              if (idx === 0) widthClass = "w-32"; // All Categories
              if (idx === 1) widthClass = "w-32"; // Development
              if (idx === 2) widthClass = "w-32"; // UI/UX
              if (idx === 3) widthClass = "w-24"; // Popular
              if (idx === 4) widthClass = "w-44"; // Project Management

              return (
                <div key={idx} className="main-for-btn #">
                  <div
                    className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                  >
                    <span className="# ms-2">
                      <Icon size={15} />
                    </span>
                    <p className="text-sm">{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row: remaining 2 buttons (Marketing + Accounting) */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {buttonData.slice(5).map((data, idx) => {
              const Icon = data.icon;

              // Optional: custom widths
              const widthClass = idx === 0 ? "w-28" : "w-28"; // Marketing, Accounting

              return (
                <div key={idx} className="main-for-btn #">
                  <div
                    className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                  >
                    <span className="# ms-2">
                      <Icon size={15} />
                    </span>
                    <p className="text-sm">{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* XL / Extra Large layout */}
        <div className="hidden xl:flex  gap-3 justify-center flex-wrap">
          {buttonData.map((data, idx) => {
            const Icon = data.icon;

            // Default width for smaller screens + custom XL width
            let widthClass = "w-32"; // default width
            if (idx === 0) widthClass = "w-32 xl:w-40"; // All Categories
            if (idx === 1) widthClass = "w-32 xl:w-40"; // Development
            if (idx === 2) widthClass = "w-32 xl:w-40"; // UI/UX
            if (idx === 3) widthClass = "w-24 xl:w-28"; // Popular
            if (idx === 4) widthClass = "w-44 xl:w-60"; // Project Management
            if (idx === 5) widthClass = "w-28 xl:w-36"; // Accounting
            if (idx === 6) widthClass = "w-28 xl:w-36"; // Marketing

            return (
              <div key={idx} className="main-for-btn #">
                <div
                  className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                >
                  <span className="# ms-2">
                    <Icon size={20} /> {/* increase icon size for XL */}
                  </span>
                  <p className="text-lg xl:text-base">{data.title}</p>{" "}
                  {/* increase font */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ExpolreOurAllCourses />
      <IndustryTalent />
      <GraduateKeyTakeaways />
      <DreamCareerHero />
      <Footer />
    </>
  );
}
