import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";
import MentorsCards from "./Components/MentorsCards/MentorsCards";
import JobMarketSection from "./Components/JobMarketSection/JobMarketSection";
import TakeYourExpertiseToTheNextLevel from "./Components/TakeYourExpertiseToTheNextLevel/TakeYourExpertiseToTheNextLevel";
import GraduateKeyTakeaways from "./Components/GraduateKeyTakeaways/GraduateKeyTakeaways";
import FAQSection from "./Components/FAQSection/FAQSection";
import CareerHero from "./Components/CareerHero/CareerHero";
import DreamCareerHero from "./Components/DreamCareerHero/DreamCareerHero";
import Footer from "./Components/Footer/Footer";
import Courses from "./Components/Courses/Courses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MentorsCards />
              <JobMarketSection />
              <TakeYourExpertiseToTheNextLevel />
              <GraduateKeyTakeaways />
              <FAQSection />
              <CareerHero />
              <DreamCareerHero />
              <Footer />
            </>
          }
        />

        {/* Courses Page */}
        <Route path="/" />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}
