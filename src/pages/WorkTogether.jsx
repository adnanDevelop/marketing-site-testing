import React from "react";
import WorkHeader from "../component/workTogether/WorkHeader";
import WorkForm from "../component/workTogether/WorkForm";

const WorkTogether = () => {
  document.title = "GoMarkho-Work Together";

  return (
    <main>
      <WorkHeader />
      <WorkForm />
    </main>
  );
};

export default WorkTogether;
