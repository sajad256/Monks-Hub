import React from "react";
import Navbar from "../Navbar/Navbar";
import MentorsCards from "./MentorsCards";
import JobMarketSection from "../JobMarketSection/JobMarketSection";
import GradutionKeyTakeaways from "../GraduateKeyTakeaways/GraduateKeyTakeaways";
import DreamCareerHero from "../DreamCareerHero/DreamCareerHero";
import Footer from "../Footer/Footer";

export default function Mentors() {
  return (
    <>
      <Navbar />
      <section>
        {/* Information */}
        <div className="info text-center mt-10 container">
          <div className=" lg:flex lg:justify-start">
            <p className="lg:ms-32 lg:font-bold">Home / Mentors</p>
          </div>
          <div className="md:flex md:justify-center lg:justify-start">
            <h1 className="mt-3 text-4xl  font-bold leading-snug md:w-7/12 lg:text-5xl lg:ms-12 xl:text-6xl">
              Meet Our Industry’s Leading Expert Mentors
            </h1>
          </div>
        </div>
      </section>
      <MentorsCards />
      <div className="mt-10">
        {" "}
        <JobMarketSection />
      </div>
      <div className="mt-10">
        <GradutionKeyTakeaways />
      </div>
      <div className="mt-10">
        <DreamCareerHero />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
