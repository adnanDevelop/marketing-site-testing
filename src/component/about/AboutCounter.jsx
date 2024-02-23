import React, { useState } from "react";
import CountUp from 'react-countup'
import ScrollTrigger from "react-scroll-trigger";

const AboutCounter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
      <section className="about_counter_section relative margin-inline sm:py-[50px] py-[30px]   margin-block  rounded-[30px] bg-light-white  flex sm:flex-row flex-col flex-wrap items-center  ">
        <div className="w-[350px] h-auto absolute  lg:bottom-[75%] bottom-[65%] xl:left-[-18%] lg:left-[-28%]  left-[-25%] rotate-[-20deg] z-[-1] lg:block hidden">
          <img src="/image/shape.png" alt="" />
        </div>
        {/* CLIENT */}
        <div className="lg:basis-1/4 sm:basis-2/4 basis-full  lg:mb-0 mb-8   text-center" data-aos='fade-zoom-in' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >
          <h2 className="text-black font-extrabold text-primary xl:text-[60px]  lg:text-[40px] sm:text-[35px] text-[30px]   leading-tight ">
            {counterOn && <CountUp start={0} end={100} duration={3} delay={0} />} <span className="text-sky-900">M</span>
          </h2>
          <p className="text-black text-secondary font-semibold capitalize xl:text-[18px] text-[14px]   ">
            client satisfaction
          </p>
        </div>
        {/* SUPPORT */}
        <div className="lg:basis-1/4 sm:basis-2/4 basis-full  lg:mb-0 mb-8   text-center" data-aos='fade-zoom-in' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >
          <h2 className="text-black  font-extrabold  text-primary xl:text-[60px]  lg:text-[40px] sm:text-[35px] text-[30px]   leading-tight ">
            {counterOn && <CountUp start={0} end={24} duration={3} delay={0} />} <span className="text-sky-900">h</span>
          </h2>
          <p className="text-black text-secondary font-semibold capitalize xl:text-[18px] text-[14px]   ">
            Expert support team
          </p>
        </div>
        {/* SALES */}
        <div className="lg:basis-1/4 sm:basis-2/4 basis-full lg:mb-0 mb-8   text-center" data-aos='fade-zoom-in' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >
          <h2 className="text-black font-extrabold text-primary xl:text-[60px]  lg:text-[40px] sm:text-[35px] text-[30px]  leading-tight ">
            {counterOn && <CountUp start={0} end={98} duration={3} delay={0} />} <span className="text-sky-900">k+</span>
          </h2>
          <p className="text-black text-secondary font-semibold capitalize xl:text-[18px] text-[14px]  ">
            sales count
          </p>
        </div>
        {/*  CLIENT */}
        <div className="lg:basis-1/4 sm:basis-2/4 basis-full text-center" data-aos='fade-zoom-in' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >
          <h2 className="text-black font-extrabold text-primary xl:text-[60px]  lg:text-[40px] sm:text-[35px] text-[30px]  leading-tight ">
            {counterOn && <CountUp start={0} end={208} duration={3} delay={0} />} <span className="text-sky-900">+</span>
          </h2>
          <p className="text-black text-secondary font-semibold capitalize xl:text-[18px] text-[14px]  ">
            client worldwide
          </p>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default AboutCounter;
