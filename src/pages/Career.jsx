import React from "react";
import CareerHero from "../component/careerSection/CareerHero";
import CareerTeam from "../component/careerSection/CareerTeam";
import CareerTracker from "../component/careerSection/CareerTracker";
import CareerJob from "../component/careerSection/CareerJob";
import CareerHiring from "../component/careerSection/CareerHiring";

const Career = () => {
  document.title = "GoMarkho-Career Page";

  return (
    <main>
      <CareerHero />
      <CareerTeam />
      <CareerTracker />
      <CareerJob />
      <CareerHiring />
    </main>
  );
};

export default Career;
