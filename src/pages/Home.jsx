import React from "react";
import Hero from "../component/HomeSection/Hero";
import ServiceSection from "../component/HomeSection/ServiceSection";
import ProjectSection from "../component/HomeSection/ProjectSection";
import TestmonialSection from "../component/HomeSection/TestmonialSection";
import Expertise from "../component/HomeSection/Expertise";

const Home = () => {
  return (
    <main>
      <Hero />
      <ServiceSection />
      <ProjectSection />
      <Expertise />
      <TestmonialSection />
    </main>
  );
};

export default Home;
