import React from "react";
import { hiringContent } from "../../service/Api";

const CareerHiring = () => {
  return (
    <section className="hiring_section padding-block padding-inline mb-[50px]">
      {/* HIRING HEADER SECTION */}
      <div
        className="hiring_header text-left lg:ms-[100px] lg:mb-[40px] mb-[30px]"
        data-aos="zoom-in-out"
        data-aos-duration="1800"
      >
        <span className="uppercase text-[12px] text-black font-light">
          our hiring process
        </span>
        <h2 className="text-black font-bold font-primary tracking-wide xl:text-[45px] lg:text-[40px] sm:text-[30px] text-[22px] mt-2 capitalize leading-none">
          As simple as it could be
        </h2>
      </div>

      {/* HIRING CARD SECTION */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] xl:mx-[80px] lg:mx-[50px]">
        {hiringContent.map((element, index) => {
          return (
            <div
              className="flex items-center justify-center"
              key={index}
              data-aos="fade-zoom-in"
              data-aos-duration="1800"
            >
              <div className="hiring_card w-full md:max-w-[18rem] max-w-[16rem] lg:h-[25rem] h-[22rem] flex flex-col items-center justify-center lg:px-[30px] px-[20px] rounded-t-full rounded-b-full text-center border border-[#DFDFDF]">
                <img
                  src={element.img}
                  className="mx-auto block mb-2 lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]"
                  alt=""
                />
                <h4 className="text-black font-medium font-primary tracking-wide lg:text-[50px] text-[40px] leading-none mb-2">
                  {element.title}
                </h4>
                <p className="lg:text-[15px] text-[14px] text-black uppercase font-medium mb-2 font-secondary text-justify">
                  {element.subtitle}
                </p>
                <p className="text-black font-normal font-secondary text-[14px]">
                  {element.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CareerHiring;
