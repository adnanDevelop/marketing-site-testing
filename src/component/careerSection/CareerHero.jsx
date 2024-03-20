import React from "react";

const CareerHero = () => {
  return (
    <section className="career_hero_section pb-[80px] padding-inline relative overflow-x-hidden">
      <div className="shape_img w-[400px] h-auto absolute top-[100px] md:right-[-220px] right-[-250px] md:rotate-[-155deg] rotate-[-155deg] z-[-1] md:block hidden">
        <img src="/image/shape.png" alt="" />
      </div>
      <div
        className="text-center about_work_section md:pt-[120px] pt-[100px] pb-[80px] flex items-center justify-center flex-col "
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
        className="xl:px-[150px] md:mx-[50px]  grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-4  lg:gap-x-[30px] md:gap-x-[20px] gap-x-[15px]"
        data-aos="zoom-in-out"
        data-aos-duration="1800"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="flex items-center justify-center">
          <img
            src="/image/career/career-header/img-1.jpg"
            className="w-full lg:h-[450px] h-[300px] rounded-[30px] object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/image/career/career-header/img-2.jpg"
            className="w-full lg:h-[450px] h-[300px] rounded-[30px] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
