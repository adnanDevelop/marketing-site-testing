import React from "react";
import BlogHero from "../component/BlogSection/BlogHero";
import BenefitCard from "../component/SolutionSection/BenefitCard";
import Solutions from "../component/SolutionSection/Solutions";
import FeatureCard from "../component/SolutionSection/FeatureCard";
import Help from "../component/global/Help";

const ServiceSolution = () => {
  document.title = "GoMarkho-Service Solution";

  const solutionTitle = {
    title: "Communication Solution",
    content:
      "Effective communication is the secret that lies at the heart of every successful business.",
  };

  const helpContent = {
    title: "How can we help you?",
    content:
      "Are you ready to push boundaries and explore new frontiers of innovation?",
  };

  return (
    <main>
      <BlogHero title={solutionTitle.title} content={solutionTitle.content} />
      <BenefitCard />
      <Solutions />
      <FeatureCard />
      <Help title={helpContent.title} content={helpContent.content} />
    </main>
  );
};

export default ServiceSolution;
