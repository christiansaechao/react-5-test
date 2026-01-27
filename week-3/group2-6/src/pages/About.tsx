import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import Team from "../components/Team";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default About;
