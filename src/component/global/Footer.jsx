import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const topBar = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <>
      <div className=" w-full bg-blue padding-inline ">
        <div className="footer_section  pt-[60px] pb-[20px] grid grid-cols-12 relative ">
          {/* FOOTER DETAIL AND LINKS SECTION */}
          <div className="flex justify-between flex-wrap xl:col-span-9  col-span-12 ">
            {/*LINK SECTION */}
            <div className="footer_link xl:basis-2/12 md:basis-1/6 sm:basis-1/2 basis-full sm:mb-0 mb-6">
              <Link
                to="/"
                className=" inline-block text-white font-semibold text-[20px] mb-[16px] "
                onClick={topBar}
              >
                Home
              </Link>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="text-white text-[16px] transition duration-300 mb-[10px] inline-block font-normal "
                    onClick={topBar}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="text-white text-[16px] transition duration-300 mb-[10px] inline-block font-normal "
                    onClick={topBar}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-[16px] transition duration-300 font-normal "
                    onClick={topBar}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* DETAIL SECTION */}
            <div className="footer-detail_section xl:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full sm:mb-0 mb-6">
              <p className=" inline-block text-white font-semibold text-[20px] mb-[16px]">
                Get in touch
              </p>
              <div className="mb-[10px]">
                <p className="text-sky-900 text-[15px] font-semibold ">
                  Phone:{" "}
                </p>
                <a href="tel:+92518895778" className="text-white text-[15px] font-normal no-underline">
                  +92 51 8895778{" "}
                </a>
              </div>
              <div className="mb-[10px]">
                <p className="text-sky-900 text-[15px] font-semibold ">
                  Email:{" "}
                </p>
                <a href="mailto:hr@gomarkho.com" className="text-white text-[15px] font-normal">
                  hr@gomarkho.com
                </a>
              </div>
              <div className="mb-[10px]">
                <p className="text-sky-900 text-[15px] font-semibold ">
                  Business Hours:{" "}
                </p>
                <p className="text-white text-[15px] font-normal">
                  Monday to Friday: 9am to 6pm.
                </p>
              </div>
            </div>

            {/* FOOTER ADDRESS SECTION */}      
            <div className="lg:flex lg:items-center lg:justify-center xl:basis-2/4 md:basis-2/4 basis-full xl:pe-[100px] relative z-10">
              <div className="footer_img absolute right-[-10%] top-0 z-[-1] xl:block hidden">
                <img src="/image/footer-img.png" className="w-full max-w-[15rem]" alt="" />
              </div>
              <div className="address_section  ">
                <p className="text-sky-900 text-[15px] font-semibold ">Address: </p>
                <p className="text-white text-[15px] font-normal">
                  City Centre, Office No. 17, Second Floor, PakLand, I-8 Markaz{" "}
                  <br /> Islamabad, 44000, Pakistan.
                </p>
                <div className="footer_icon flex gap-2 mt-5 ">
                  <a href="https://www.linkedin.com/company/gomarkho/" target="_blank" className="flex items-center justify-center text-base w-[40px] h-[40px] border border-sky-900 text-sky-900 rounded-full">
                    <i className="fa fa-linkedin "></i>
                  </a>
                  <a href="mailto:hr@gomarkho.com" target="_blank" className="flex items-center justify-center text-base w-[40px] h-[40px] border border-sky-900 text-sky-900 rounded-full">
                    <i className="fa fa-envelope "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER QUESTION SECTION */}
          <div className="question_section flex xl:items-center xl:justify-center xl:col-span-3 col-span-12 xl:mt-0 mt-6 z-10">
            <div className="content_section">
              <h3 className="lg:text-[25px] text-[20px] text-white font-semibold mb-4">Have any Questions</h3>
              <Link to='/worktogether' className="btn-primary-outline" onClick={topBar}>Get in touch</Link>
            </div>
          </div>
        </div>

      </div>

      {/* SUBFOOTER SECTION */}
      <div className="bg-blue subfooter py-4 border-t-[1px] border-t-[#333] padding-inline">
        <p className="text-white font-light text-center sm:text-sm text-[12px] ">
          Copyright © 2024 GoMarkho. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
