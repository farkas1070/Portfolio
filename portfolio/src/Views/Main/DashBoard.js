import React from "react";
import TechnologiesSection from "../TechnologiesSection/TechnologiesSection";
import TopSection from "../TopSection/TopSection";
import AboutMeSection from "../AboutMeSection/AboutMeSection2";
import { ProjectsSection } from "../ProjectsSection/ProjectsSection";
import { HistorySection } from "../HistorySection/HistorySection";
import Navbar from "../Navbar/Navbar";
import { Contact } from "../Contact/Contact";
import Footer from "../Footer/Footer"
const DashBoard = () => {
  return (
    <>
      <div className=" fixed top-0 w-full z-20">
        <Navbar />
      </div>
      <TopSection />
      <AboutMeSection />
      <HistorySection />
      <TechnologiesSection />
      <ProjectsSection />
      <Contact></Contact>
      <Footer/>
    </>
  );
};
export default DashBoard;
