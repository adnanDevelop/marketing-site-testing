import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" w-full bg-blue padding-inline ">
       
        <div className="footer_section  pt-[60px] pb-[20px] grid grid-cols-12 relative ">

          {/* FOOTER DETAIL AND LINKS SECTION */}
          <div className="flex justify-between flex-wrap xl:col-span-9 md:col-span-8 col-span-12 ">
            {/*LINK SECTION */}
            <div className="footer_link xl:basis-2/12 sm:basis-2/4 basis-full ">
              <Link
                to="/"
                className=" inline-block text-white font-semibold text-[20px] mb-[16px] "
              >
                Home
              </Link>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="text-white sm:text-[18px] text-[16px] transition duration-300 mb-[10px] inline-block font-normal "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="text-white sm:text-[18px] text-[16px] transition duration-300 mb-[10px] inline-block font-normal "
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white sm:text-[18px] text-[16px] transition duration-300 fonr-normal "
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* DETAIL SECTION */}
            <div className="footer-detail_section  xl:basis-1/4 sm:basis-2/4 basis-full sm:mt-0 mt-[40px]  ">
              <p className=" inline-block text-white font-semibold text-[20px] mb-[16px]">
                Get in touch
              </p>
              <div className="mb-[10px]">
                <p className="text-sky-900 text-[15px] font-semibold ">
                  Phone:{" "}
                </p>
                <p className="text-white text-[15px] font-normal">
                  +92 51 8895778{" "}
                </p>
              </div>
              <div className="mb-[10px]">
                <p className="text-sky-900 text-[15px] font-semibold ">
                  Email:{" "}
                </p>
                <p className="text-white text-[15px] font-normal">
                  hr@gomarkho.com
                </p>
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
            <div className="lg:flex lg:items-center mt-[20px] xl:mt-0 xl:basis-2/4 basis-full " >
              <div className="address_section  ">
                <p className="text-sky-900 text-[15px] font-semibold ">Address: </p>
                <p className="text-white text-[15px] font-normal">
                  City Centre, Office No. 17, Second Floor, PakLand, I-8 Markaz{" "}
                  <br /> Islamabad, 44000, Pakistan.
                </p>
                <div className="footer_icon flex gap-2 mt-5 ">
                  <button className="text-base w-[30px] h-[30px] border border-sky-900 text-sky-900 rounded-full">
                    <i className="fa fa-linkedin "></i>
                  </button>
                  <button className="text-base w-[30px] h-[30px] border border-sky-900 text-sky-900 rounded-full">
                    <i className="fa fa-envelope "></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
          
          
          {/* FOOTER QUESTION SECTION */}
          <div className="question_section flex xl:items-center md:justify-center xl:col-span-3 md:col-span-4 col-span-12 md:mt-0 mt-[40px] md:mb-0 mb-4 "> 
            <div className="content_section">
              <h3 className="lg:text-[25px] text-[20px] text-white font-semibold mb-4">Have any Questions</h3>
              <Link to='/' className="btn-primary-outline" >Get in touch</Link>
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