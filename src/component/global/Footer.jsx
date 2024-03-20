import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const topBar = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="w-full bg-blue padding-inline">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-center w-full bg-[#020332] h-auto pt-[20px] sm:pt-0 lg:h-[calc(40vh)] font-primary">
        <div className="w-full lg:w-[30%] flex items-center h-full lg:mr-4 mt-4 lg:mt-0">
          <div className="flex flex-wrap justify-between w-full">
            <div className="flex flex-col gap-3">
              <Link to="/" onClick={topBar}>
                <p className="text-white font-semibold transition duration-300 text-[18px] tracking">
                  Home
                </p>
              </Link>
              <Link to={"/servicesolution"} onClick={topBar}>
                <p className="text-white font-regular transition duration-300 hover:text-sky-500 focus:text-sky-500 text-[12px]">
                  Services
                </p>
              </Link>
              <Link to="/about" onClick={topBar}>
                <p className="text-white font-regular transition duration-300 hover:text-sky-500 focus:text-sky-500 text-[12px]">
                  About Us
                </p>
              </Link>
              <Link to="/career" onClick={topBar}>
                <p className="text-white font-regular transition duration-300 hover:text-sky-500 focus:text-sky-500 text-[12px]">
                  Careers
                </p>
              </Link>
              <Link to="/contact" onClick={topBar}>
                <p className="text-white font-regular transition duration-300 hover:text-sky-500 focus:text-sky-500 text-[12px]">
                  Contact Us
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white font-semibold text-[18px] tracking">
                Get in touch
              </p>
              <div>
                <p className="text-[#146C94] font-regular text-[12px]">Email</p>
                <a
                  href="tel:+92518895778"
                  without
                  rel="noreferrer"
                  className="text-white text-[12px] font-normal no-underline"
                >
                  +92 51 8895778{" "}
                </a>
              </div>
              <div>
                <p className="text-[#146C94] font-regular text-[12px]">Phone</p>
                <a
                  href="mailto:hr@gomarkho.com"
                  without
                  rel="noreferrer"
                  className="text-white text-[12px] font-normal"
                >
                  hr@gomarkho.com
                </a>
              </div>
              <div>
                <p className="text-[#146C94] font-regular text-[12px]">
                  Business Hours:
                </p>
                <p className="text-white font-regular text-[12px]">
                  Monday to Friday: 9am to 6pm.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex justify-start items-center h-full relative lg:pt-0 pt-[15px]">
          <img
            src="/image/footer-img-1.png"
            alt=""
            height={1000}
            width={1000}
            className="absolute hidden w-auto h-full -right-5 lg:flex lg:justify-start"
          />
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-[#146C94] font-regular text-[12px]">Address</p>
              <p className="text-white font-regular text-[12px] lg:w-[70%]">
                City Centre, Office No. 17, Second Floor, PakLand, I-8 Markaz
                Islamabad, 44000, Pakistan.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/gomarkho/"
                without
                rel="noreferrer"
                target="_blank"
                className="flex items-center justify-center text-base w-[40px] h-[40px] border border-sky-900 text-sky-900 rounded-full"
              >
                <i className="fa fa-linkedin "></i>
              </a>
              <a
                href="mailto:hr@gomarkho.com"
                target="_blank"
                without
                rel="noreferrer"
                className="flex items-center justify-center text-base w-[40px] h-[40px] border border-sky-900 text-sky-900 rounded-full"
              >
                <i className="fa fa-envelope "></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[25%] lg:flex justify-start items-start lg:items-center relative h-full lg:pt-0 pt-[15px]">
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-[18px] tracking font-primary">
              Have any Questions
            </p>
            <Link
              to="/worktogether"
              className="btn-primary-outline"
              onClick={topBar}
            >
              Get in touch
            </Link>
          </div>
          <div className="static bottom-0 w-full py-4 lg:absolute">
            <p className="text-white font-light text-xs lg:text-[10px] xl:text-xs md:text-start text-center">
              Copyright © 2024 GoMarkho. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
