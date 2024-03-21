import React from "react";
import AboutHero from "../component/about/AboutHero";
import AboutMission from "../component/about/AboutMission";
import AboutStory from "../component/about/AboutStory";
import Help from "../component/global/Help";

const About = () => {
  document.title = "GoMarkho-About Page";
  const helpContent = {
    helpTitle: "How can we help you?",
    helpContent:
      "Are you ready to push boundaries and explore new frontiers of innovation?",
  };

  return (
    <main>
      <AboutHero />
      {/* <AboutCounter /> */}
      <AboutMission />
      <AboutStory />
      <Help title={helpContent.helpTitle} content={helpContent.helpContent} />
    </main>
  );
};

export default About;
