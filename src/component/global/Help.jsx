import React from "react";
import { Link } from "react-router-dom";

const Help = ({ title, content }) => {
  const goTopFunc = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section
      className="help_section mt-[70px] md:pb-[70px] pb-[40px] md:mb-0 mb-[40px] padding-inline flex items-center justify-center flex-col text-center"
      data-aos="fade-zoom-in"
      data-aos-duration="1800"
      data-aos-anchor-placement="center-bottom"
    >
      <h2 className="text-black font-bold font-primary tracking-wide lg:text-[40px] md:text-[40px] sm:text-[30px] text-[25px] leading-none capitalize mb-3">
        {title}
      </h2>
      <p className="text-black font-normal font-secondary mb-6 sm:text-[18px] text-[14px]">
        {content}
      </p>
      <Link
        to="/worktogether"
        onClick={goTopFunc}
        className="uppercase btn-primary-md"
      >
        let's work together
      </Link>
    </section>
  );
};

export default Help;
