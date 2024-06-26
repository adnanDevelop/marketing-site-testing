import React from "react";

const BlogHero = ({ title, content }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="shape_img w-[400px] h-auto absolute top-[100px] md:right-[-220px] right-[-250px] md:rotate-[-155deg] rotate-[-155deg] z-[-1] md:block hidden ">
        <img src="/image/shape.png" alt="" />
      </div>
      <div
        className="about_work_section text-center padding-inline md:pt-[150px] pt-[100px] flex items-center justify-center flex-col"
        data-aos="zoom-up"
        data-aos-duration="1800"
      >
        <h2 className="text-black font-extrabold capitalize font-primary leading-none tracking-wide lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px]">
          {title}
        </h2>
        <p className="text-gray font-normal font-secondary md:text-[18px] text-[16px]  my-3 max-w-[550px]">
          {content}
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
