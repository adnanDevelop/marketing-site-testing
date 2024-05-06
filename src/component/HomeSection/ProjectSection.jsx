import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ProjectSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  const goTopFunc = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section className="project_section xl:before:h-[80vh] lg:before:h-[80vh] lg:before:w-[75%] xl:before:top-[5%] lg:before:top-[4%] before:right-0  relative lg:mb-0 mb-[50px]">
      <div className="flex flex-col justify-center lg:items-center lg:flex-row padding-inline">
        <div
          className="project_img_section lg:basis-1/3 md:basis-2/4 basis-full"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
        >
          <img
            src="/image/about-img.png"
            className="xl:w-[350px] lg:w-[300px] md:w-[320px] w-[300px] xl:h-[450px] lg:h-[400px] md:h-[400px] h-[350px] object-cover rounded-[15px]"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="project_content w-full lg:h-[90vh] flex flex-col justify-center lg:basis-2/3 md:basis-2/4 basis-full lg:mt-0 mt-[40px]">
          <p
            className="text-white font-[300] font-heading xl:text-[22px] md:text-[20px] text-[18px] text-justify xl:ps-[80px] lg:ps-[50px]"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
          >
            Specializing in VoIP, software development, and intelligent
            automation, we offer tailored solutions that resonate with your
            unique needs. Elevate your communication experience with us – your
            trusted one-stop provider for all your business needs.
          </p>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="flex items-center lg:justify-end justify-start lg:gap-[70px] sm:gap-[40px] gap-[20px] md:mt-6 mt-8">
              <div
                className="text-center project_counter"
                data-aos="fade-zoom-in"
                data-aos-duration="1500"
              >
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-secondary font-semibold">
                  {" "}
                  {counterOn && (
                    <CountUp start={0} end={150} duration={3} delay={0} />
                  )}
                  +
                </p>
                <p className="text-[12px] text-white font-light capitalize ">
                  project completed
                </p>
              </div>
              <div
                className="text-center project_counter"
                data-aos="fade-zoom-in"
                data-aos-duration="1500"
              >
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-secondary font-semibold">
                  {" "}
                  {counterOn && (
                    <CountUp start={0} end={50} duration={3} delay={0} />
                  )}
                  +
                </p>
                <p className="text-[12px] text-white font-light capitalize ">
                  client satisfied
                </p>
              </div>
              <div
                className="text-center project_counter"
                data-aos="fade-zoom-in"
                data-aos-duration="1500"
              >
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-secondary font-semibold">
                  {" "}
                  {counterOn && (
                    <CountUp start={0} end={10} duration={3} delay={0} />
                  )}
                  +
                </p>
                <p className="text-[12px] text-white font-light capitalize ">
                  years of experience
                </p>
              </div>
            </div>
          </ScrollTrigger>
          <div
            className="flex lg:justify-end justify-start mt-[40px]"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
          >
            <Link
              to="/about"
              className="flex items-center capitalize font-bold text-white bg-sky-500 rounded-full md:px-[30px] px-[25px] md:py-[15px] py-[10px] font-heading md:text-[15px] text-[14px] transition duration-300  hover:text-white focus:text-white hover:scale-105"
              onClick={goTopFunc}
            >
              About Us{" "}
              <span className="ps-3">
                {" "}
                <FaArrowRight />{" "}
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
