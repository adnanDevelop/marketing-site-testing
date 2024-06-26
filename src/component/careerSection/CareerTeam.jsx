import React from "react";

const CareerTeam = () => {
  return (
    <section
      className=" career_team_section w-full  md:h-[65vh] h-[50vh] relative padding-inline flex lg:items-start items-center justify-center flex-col bg-sky-500 "
      style={{ background: "url(/image/career/team-bg.jpg) no-repeat right" }}
    >
      <div
        className="career_team_content md:ps-[100px] lg:text-start text-center mx-auto lg:py-0 lg:px-0 py-8 px-4 lg:rounded-0 rounded-md lg:shadow-none shadow-lg"
        data-aos="fade-zoom-in"
        data-aos-duration="1800"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="md:text-[40px] sm:text-[25px] text-[22px] text-black leading-none capitalize font-primary font-bold tracking-wide mb-4">
          We are from the people
        </h2>
        <p className="text-gray font-secondary font-normal sm:text-[16px] text-[15px] w-full lg:max-w-[32%] sm:max-w-[70%] lg:mx-0 mx-auto  lg:text-justify text-justify-left">
          We are a team of 50+ people – with a purpose to thrive in our
          value-driven culture and make a real and lasting difference to the
          organization and their careers.
        </p>
      </div>
    </section>
  );
};

export default CareerTeam;
