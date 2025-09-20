import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import MentorsCards from "./Components/MentorsCards/MentorsCards";
import JobMarketSection from "./Components/JobMarketSection/JobMarketSection";
import TakeYourExpertiseToTheNextLevel from "./Components/TakeYourExpertiseToTheNextLevel/TakeYourExpertiseToTheNextLevel";
import GraduateKeyTakeaways from "./Components/GraduateKeyTakeaways/GraduateKeyTakeaways";
import FAQSection from "./Components/FAQSection/FAQSection";
import CareerHero from "./Components/CareerHero/CareerHero";
import DreamCareerHero from "./Components/DreamCareerHero/DreamCareerHero";
import Footer from "./Components/Footer/Footer";
import Courses from "./Components/Courses/Courses";
import Mentors from "./Components/Mentors Components/Mentors";
import Blog from "./Components/Blog Components/Blog";
import Coursesdetails from "./Components/Courses Detail's/Coursesdetails";
import MentorDetails from "./Components/Mentor Details/MentorDetails";
import Tahseen from "./Components/Mentor Details/Tahseenullah Safi/Tahseen.jsx";

import ScrollToTop from "./ScrollToTop";
import Raheb from "./Components/Mentor Details/Raheb Khan/Raheb.jsx";
import Saidshah from "./Components/Mentor Details/Said Shah Ahmadi/Saidshah.jsx";
import Abdullah from "./Components/Mentor Details/Abdullah Safi/Abdullah.jsx";
import Khitab from "./Components/Mentor Details/Khitabullah Omarzai/Khitab.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentor" element={<Mentors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coursesdetails" element={<Coursesdetails />} />
        <Route path="/MentorDetails" element={<MentorDetails />} />
        <Route path="/Tahseen" element={<Tahseen />} />
        <Route path="/Raheb" element={<Raheb />} />
        <Route path="/Saidshah" element={<Saidshah />} />
        <Route path="/Abdullah" element={<Abdullah />} />
        <Route path="/Khitab" element={<Khitab />} />
      </Routes>
    </BrowserRouter>
  );
}
