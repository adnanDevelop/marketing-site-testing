import React from "react";

const CompanySection = () => {
  return (
    <section className="discover_secion sm:pt-[40px] pt-[20px] pb-[20px] padding-inline my-[40px] relative overflow-hidden bg-[#F3F3F3]">
      <h2
        className="text-[#333] capitalize text-center  xl:text-[40px] sm:text-[30px] text-[25px] font-primary font-extrabold tracking-wide"
        // data-aos="zoom-in-out"
        // data-aos-duration="1500"
      >
        Our Clients
      </h2>
      {/* ABSOLUTE IMAGES */}
      <div className="shape_img absolute top-[50%] translate-y-[-50%] lg:left-[-15%] md:left-[-22%] sm:left-[-30%] left-[-32%] z-[-1] rotate-[-15deg]">
        <img
          src="/image/shape.png"
          className="lg:max-w-[500px] sm:h-[300px] h-[200px]  "
          alt=""
        />
      </div>
      <div className="shape_img absolute top-[50%] translate-y-[-50%] lg:right-[-10%] md:right-[-22%] sm:right-[-32%] right-[-32%] z-[-1] rotate-[170deg]">
        <img
          src="/image/shape.png"
          className="lg:max-w-[500px] sm:h-[300px] h-[200px]  "
          alt=""
        />
      </div>
      <div className="">
        <img
          src="/image/company/company-img.gif"
          className="mx-auto"
          alt=""
          width="1100px"
        />
      </div>
    </section>
  );
};

export default CompanySection;
