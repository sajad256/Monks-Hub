import React from "react";
import Navbar from "../Navbar/Navbar";
import Careerhero from "../CareerHero/CareerHero";
import Explore from "./Explore All Insights/ExploreAllInsights";
import DreamCareerhero from "../DreamCareerHero/DreamCareerHero";
import Footer from "../Footer/Footer"

export default function Blog() {
  return (
    <>
      <Navbar />
      <Careerhero />
      <Explore />
      <DreamCareerhero />
      <Footer />
    </>
  );
}
