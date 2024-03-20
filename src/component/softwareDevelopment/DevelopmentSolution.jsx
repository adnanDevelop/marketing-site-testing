import React from "react";
import { developmentTabContent } from "../../service/Api";

const DevelopmentSolution = () => {
  return (
    <section className="communication_solution padding-inline">
      <h3
        className="text-black font-extrabold font-primary tracking-wide lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px] capitalize sm:mb-[50px] mb-[30px] text-center"
        data-aos="zoom-in-out"
        data-aos-duration="1800"
      >
        Our Software Solutions
      </h3>
      {/* SOLUTIONS TABS */}
      <div className="grid lg:grid-cols-12 gap-x-[10px] lg:mx-[70px]">
        <div className="grid gap-3 solution_tabs lg:col-span-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1">
          {developmentTabContent.map((element, index) => {
            return (
              <div
                key={index}
                className="tab px-[10px] py-[20px] text-center rounded-[15px] border border-[#CBCBCB] bg-light-white w-full lg:max-w-[15rem] mx-auto  "
              >
                <div data-aos="zoom-in" data-aos-duration="1800">
                  <img
                    src={element.icon}
                    className="w-[2rem] mx-auto mb-2"
                    alt=""
                  />
                  <p className="text-black font-extrabold font-primary tracking-[0.5px] text-[17px] mt-4 leading-none">
                    {element.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="solution_content xl:col-span-9 lg:col-span-8 bg-blue text-white rounded-[15px] lg:py-[50px] py-[35px]  md:px-[50px] px-[20px]  lg:mt-0 mt-4  flex items-center justify-center">
          <p
            className="xl:text-[22px] md:text-[20px] text-[16px] xl:leading-[2.5rem] font-primary tracking-[0.5px] text-justify font-light"
            data-aos="zoom-in-out"
            data-aos-duration="1800"
          >
            Say goodbye to traditional PBX hassles. Our hosted PBX, a
            cloud-based system accessible via an IP network, eliminates hefty
            upfront investments and ongoing maintenance. With no IT or
            installation costs, businesses can seamlessly manage their phone
            systems through a user-friendly control panel. Experience the ease,
            cost-effectiveness, and popularity of our hosted PBX solutions for
            modern businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSolution;
