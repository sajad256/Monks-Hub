import React from "react";
import Navbar from "../Navbar/Navbar";
import { cardsData, sajadInfo } from "./MentorDetailsDATA";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import DreamCareer from "../DreamCareerHero/DreamCareerHero";
import Footer from "../Footer/Footer";

export default function MentorDetails() {
  return (
    <>
      <Navbar />

      <div className="head-info mt-10 md:flex md:justify-center md:items-center md:ms-36 lg:ms-24">
        <p className="container font-bold">Home / Mentor / Mentor Details</p>
      </div>

      {/* Main for info and img and icon */}
      <div className="main-for-info-img-icon xl:flex ">
        {/* Left side: image + icons (unchanged) */}
        <div className="img-icon xl:w-1/3">
          {sajadInfo.map((data) => (
            <React.Fragment key={data.name}>
              <div className="img container flex justify-center lg:justify-start lg:w-11/12 mt-4 xl:mx-20 ">
                <img
                  src={data.img}
                  className="h-96 rounded-lg md:w-8/12 md:h-full lg:w-5/12 xl:w-full"
                  alt=""
                />
              </div>
              <div className="icon flex gap-2 mt-3 container md:justify-start md:w-8/12 lg:w-9/12 xl:w-2/12">
                <div className="twitter">
                  <FaTwitter className="border border-black rounded-full px-2 py-2 text-4xl" />
                </div>
                <div className="facebook">
                  <RiFacebookFill className="border border-black rounded-full px-2 py-2 text-4xl" />
                </div>
                <div className="LinkedinIn">
                  <FaLinkedinIn className="border border-black rounded-full px-2 py-2 text-4xl" />
                </div>
                <div className="instagram">
                  <FaInstagram className="border border-black rounded-full px-2 py-2 text-4xl" />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Right side: info section (name, job, courses, biography, etc.) */}
        <div className="xl:w-2/3">
          {/* Leave your existing introduction, biography, mentoring, etc. unchanged */}
          <div className="introduction md:ms-32 lg:ms-16">
            {sajadInfo.map((data) => (
              <React.Fragment key={data.name}>
                <div className="main-for-xl-flex xl:grid xl:grid-cols-2 xl:gap-80 ">
                  <div className="info container mt-3">
                    <h1 className="text-3xl font-bold xl:text-4xl xl:w-96">
                      {data.name}
                    </h1>
                    <p className="mt-1 text-[#64676A]">{data.job}</p>
                  </div>
                  <div className="courses-students">
                    <div className="coureses flex items-center gap-2 container mt-3">
                      <span>
                        <FaGraduationCap />
                      </span>
                      <p className="font-bold">{data.courses}</p>
                    </div>
                    <div className="students flex items-center gap-2 container mt-3">
                      <span>
                        <FaUserAlt />
                      </span>
                      <p className="font-bold">{data.students}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="main-for-Biography container mt-4">
            {sajadInfo.map((data) => (
              <React.Fragment key={data.name}>
                <div className="biography md:ms-32 lg:ms-16">
                  <h1 className="font-bold text-2xl">{data.Bhead}</h1>
                  <p className="mt-3 text-sm text-[#64676A]">{data.Bdetail}</p>
                </div>
                <div className="Mentoring&expreience mt-3 md:ms-32 lg:ms-16">
                  <h1 className="font-bold text-2xl">{data.Mhead}</h1>
                  <p className="mt-3 text-sm text-[#64676A]">{data.Mdetail}</p>
                </div>
                <div className="Experience mt-3 container">
                  <p className="text-[#64676A] md:ms-32 lg:ms-16">
                    <span className="text-black">Experience: </span>
                    {data.expreience}
                  </p>
                </div>
                <div className="Credentials mt-3 container">
                  <p className="text-[#64676A] md:ms-32 lg:ms-16">
                    <span className="text-black">Credentials: </span>
                    {data.Credentials}
                  </p>
                </div>
                <div className="Specialty mt-3 container">
                  <p className="text-[#64676A] md:ms-32 lg:ms-16">
                    <span className="text-black">Specialty: </span>
                    {data.Specialty}
                  </p>
                </div>
                <div className="Mentorship-Approach mt-3 container">
                  <p className="text-[#64676A] md:ms-32 lg:ms-16">
                    <span className="text-black">Mentorship Approach: </span>
                    {data.Mentorship}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Available Courses Cards */}
      <div className="head-info mt-5 md:ms-44 lg:ms-20  xl:text-center xl:me-48 ">
        <h1 className=" container  font-bold text-2xl lg:text-4xl">
          Available Courses
        </h1>
      </div>
      <div className="main-for-cards container mt-10 md:flex md:flex-col md:items-center lg:flex-row lg:justify-center xl:justify-end lg:gap-4">
        {cardsData.map((data) => {
          return (
            <>
              <div className="card mt-0 rounded-xl md:w-6/12 lg:w-5/12 xl:w-4/12">
                <div className="img">
                  <img className="rounded-xl" src={data.img} alt="" />
                </div>
                <div className="title mt-3 container ">
                  <h1 className="font-bold text-xl">{data.title}</h1>
                </div>
                <div className="duration-and-lecture flex items-center justify-between container mt-2">
                  <div className="duration flex items-center gap-2">
                    <span>
                      <IoTimeOutline />
                    </span>
                    <p>{data.duration}</p>
                  </div>
                  <div className="lecture flex items-center gap-2">
                    <span>
                      <TiDocumentText />
                    </span>
                    <p>{data.lecture}</p>
                  </div>
                </div>
                <div className="name-and-price mt-3 mb-2 flex justify-between items-center container">
                  <div className="name-and-img flex items-center font-bold">
                    <div className="img">
                      <img
                        className="w-10 rounded-full"
                        src={data.img1}
                        alt=""
                      />
                    </div>
                    <div className="name">
                      <h1>{data.name}</h1>
                    </div>
                  </div>
                  <div className="price">
                    <p className="font-bold text-xl text-[#E94D89]">
                      {data.price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <DreamCareer />
      <Footer />
    </>
  );
}
