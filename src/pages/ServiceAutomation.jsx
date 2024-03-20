import React from "react";
import BlogHero from "../component/BlogSection/BlogHero";
import AutomationCard from "../component/serviceAutomation/AutomationCard";
import AutomationSolution from "../component/serviceAutomation/AutomationSolution";
import AutomationFeature from "../component/serviceAutomation/AutomationFeature";
import Help from "../component/global/Help";

const ServiceAutomation = () => {
  document.title = "GoMarkho-Service Automation";

  const automationTitle = {
    title: "Process Automation",
    content:
      "You need to free your teams from the drudgery of routine tasks to enhance your customers’ experience.",
  };

  const helpContent = {
    title: " How can we help you?",
    content:
      "Tell us your challenges and our experts will help you find the best approach.",
  };

  return (
    <main>
      <BlogHero
        title={automationTitle.title}
        content={automationTitle.content}
      />
      <AutomationCard />
      <AutomationSolution />
      <AutomationFeature />
      <Help title={helpContent.title} content={helpContent.content} />
    </main>
  );
};

export default ServiceAutomation;
