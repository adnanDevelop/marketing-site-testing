import React from "react";

const CareerHero = () => {
  return (
    <section className="career_hero_section pb-[80px] padding-inline relative overflow-x-hidden">
      <div className="shape_img w-[400px] h-auto absolute top-[100px] md:right-[-220px] right-[-250px] md:rotate-[-155deg] rotate-[-155deg] z-[-1] md:block hidden">
        <img src="/image/shape.png" alt="" />
      </div>
      <div
        className="text-center about_work_section md:pt-[120px] pt-[100px] md:pb-[80px] pb-[50px] flex items-center justify-center flex-col "
        data-aos="zoom-in-out"
        data-aos-duration="1800"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="text-black xl:text-[50px] md:text-[40px] text-[30px]  leading-none font-primary font-bold">
          Career
        </h2>
        <p className="text-gray font-normal text-secondary xl:text-[20px] md:text-[18px] text-[16px]  my-4 ">
          Take your career to the next level
        </p>
        <a href="#job" className="capitalize btn-primary-md">
          Browse Open positions
        </a>
      </div>

      {/* CAREER GALLERY SECTION */}
      <div
        className="xl:px-[100px] md:mx-[20px]  grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-4  lg:gap-x-[30px] md:gap-x-[20px] gap-x-[15px]"
        data-aos="zoom-in-out"
        data-aos-duration="1800"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="flex items-center justify-center">
          <img
            src="/image/career/career-header/img-1.png"
            className="w-full lg:h-[400px] h-[250px] rounded-[30px] object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/image/career/career-header/img-2.png"
            className="w-full lg:h-[400px] h-[250px] rounded-[30px] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
