import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import Teckstaks from "./sections/Teckstaks";
import Testamonials from "./sections/Testamonials";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
      <ExperienceSection />
      <Teckstaks />
      <Testamonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
