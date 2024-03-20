import React from "react";

const ContactHeader = () => {
  return (
    <section className="contact_header padding-inline padding-block sm:mt-2 mt-[50px] sm:mb-0 mb-[15px] relative overflow-hidden">
      <div className="shape_img w-[400px] h-auto absolute top-[100px] md:right-[-220px] right-[-250px] md:rotate-[-155deg] rotate-[-155deg] z-[-1] md:block hidden ">
        <img src="/image/shape.png" alt="" />
      </div>
      <div
        className=" text-center about_work_section  sm:pb-[30px] flex items-center justify-center flex-col"
        data-aos="fade-zoom-in"
        data-aos-duration="1800"
      >
        <h2 className="text-black font-bold font-primary tracking-wide lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px] capitalize leading-none">
          Get in touch today!
        </h2>
      </div>
      {/* DETAIL SECTION */}
      <div
        className="grid lg:grid-cols-2 grid-cols-1  lg:gap-[25px] gap-[20px] mt-[30px] xl:mx-[100px] md:mx-[50px]"
        data-aos="fade-zoom-in"
        data-aos-duration="1800"
      >
        <div className="contact_header_card sm:py-4 py-3 xl:px-8 px-3 rounded-3xl shadow-xl border border-[#E8E8E8] bg-white flex items-center justify-between">
          <div className="flex items-center icon_section">
            <img
              src="/image/contact/img-1.svg"
              className="sm:w-[60px] w-[50px]  sm:h-[60px] h-[50px]  object-cover"
              alt=""
            />
            <p className="text-[#1B2534] sm:text-[18px] text-[15px]  font-bold font-secondary capitalize ps-3">
              mail us
            </p>
          </div>
          <a
            href="mailto:hr@gomarkho.com"
            rel="noreferrer"
            className="no-underline text-gray sm:text-[18px] text-[15px]  font-secondarys"
          >
            hr@gomarkho.com
          </a>
        </div>
        {/* 2ND CARD */}
        <div className="contact_header_card sm:py-4 py-3 xl:px-8 px-3 rounded-3xl shadow-xl border border-[#E8E8E8] bg-white flex items-center justify-between">
          <div className="flex items-center icon_section">
            <img
              src="/image/contact/img-2.svg"
              className="sm:w-[60px] w-[50px]  sm:h-[60px] h-[50px]  object-cover"
              alt=""
            />
            <p className="text-[#1B2534] sm:text-[18px] text-[15px]  font-bold font-secondary capitalize ps-3 ">
              call us
            </p>
          </div>
          <a
            href="tel:0518895778"
            rel="noreferrer"
            className="no-underline text-gray sm:text-[18px] text-[15px]  font-secondarys"
          >
            051 8895778
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
