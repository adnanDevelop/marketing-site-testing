import React from "react";
import { automationTabContent } from "../../service/Api";

const AutomationSolution = () => {
  return (
    <section className="communication_solution padding-inline">
      <h3
        className="text-black font-extrabold font-primary tracking-wide lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px] capitalize sm:mb-[50px] mb-[30px] text-center"
        data-aos="zoom-in"
        data-aos-duration="1800"
      >
        Our VoIP Solutions
      </h3>

      {/* SOLUTIONS TABS */}
      <div className="grid lg:grid-cols-12 gap-x-[10px] lg:mx-[70px]">
        <div className="grid gap-3 solution_tabs lg:col-span-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1">
          {automationTabContent.map((element, index) => {
            return (
              <div
                key={index}
                className="tab mb-1 px-[10px] py-[20px] text-center flex items-center justify-center flex-col rounded-[15px] border border-[#CBCBCB] bg-light-white w-full lg:max-w-[15rem] mx-auto"
              >
                <div data-aos="zoom-in" data-aos-duration="1800">
                  <img
                    src={element.icon}
                    className="w-[2rem] mx-auto mb-2"
                    alt=""
                  />
                  <p className="text-black font-primary tracking-[0.5px] font-extrabold text-[17px] mt-4 leading-none">
                    {element.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="solution_content xl:col-span-9 lg:col-span-8 bg-blue text-white rounded-[15px] lg:py-[50px] py-[35px]  md:px-[50px] px-[20px]  lg:mt-0 mt-4  flex items-center justify-center">
          <p className="xl:text-[22px] md:text-[20px] text-[16px] font-primary tracking-[0.5px] xl:leading-[2.5rem] text-justify font-light">
            Unlock the potential of automation with GoMarkho, empowering your
            organization to leverage digital labor for enhanced business
            continuity. Our technologists collaborate with clients globally,
            seamlessly transforming industry-specific functions into efficient
            automated workflows aligned with operational goals. Utilizing
            real-world data, GoMarkho optimizes your workflow through
            automation, ensuring higher-quality results, reduced costs, and
            minimized risks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolution;
