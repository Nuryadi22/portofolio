import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./section/HeroSection";
import AboutSection from "./section/AboutSection";
import ResumeSection from "./section/ResumeSection";
import PortfolioSection from "./section/PortfolioSection";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f9", color: "#333" }}>
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Bagian About yang baru ditambahkan */}
      <AboutSection />

      {/* Bagian Resume yang baru ditambahkan */}
      <ResumeSection />

      {/* Bagian Portofolio yang baru ditambahkan */}
      <PortfolioSection />

      {/* Bagian Portofolio yang baru ditambahkan */}
      <Footer />
    </div>
  );
}

export default App;
