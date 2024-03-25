import React from "react";

const JobDetail = ({ data }) => {
  const { requirement, role } = data[0];

  return (
    <>
      <section className="career_job_section pt-[80px] md:mt-[80px] mt-[60px]  relative overflow-hidden">
        <div className="shape_img w-[400px] h-auto absolute top-[100px] md:right-[-220px] right-[-250px] md:rotate-[-155deg] rotate-[-155deg] z-[-1] md:block hidden ">
          <img src="/image/shape.png" alt="" />
        </div>
        {/* JOB HEADER SECTION */}
        <div
          className="flex flex-col items-center justify-center mb-6 text-center career_job_header"
          data-aos="zoom-in-out"
          data-aos-duration="1800"
        >
          <h2 className="text-black font-bold font-primary tracking-wide xl:text-[50px] lg:text-[40px] text-[30px] capitalize  leading-none pb-3 ">
            {data[0].title}
          </h2>
          <p className="text-black pb-3 text-[14px]">
            {data[0].location} <span className="mx-2">|</span>{" "}
            <span className="text-sky-500">{data[0].jobType}</span>
          </p>
          <a href="#form" className="mt-3 capitalize btn-primary-md md:mt-5 ">
            Apply Now
          </a>
        </div>

        {/* JOB DETAIL SECTION */}
        <div className="detail_section md:py-[100px] py-[40px] lg:px-[70px] px-[40px] rounded-[20px] bg-light-white lg:mx-[150px] md:mx-[100px] mx-[30px] my-[60px]">
          <div
            className="detail_header"
            data-aos="zoom-in-out"
            data-aos-duration="1800"
          >
            <h3 className="lg:text-[35px] md:text-[30px] text-[25px] font-primary tracking-wide text-[#242331] font-extrabold capitalize ">
              About the role
            </h3>
          </div>

          {/* ROLE POINTS */}
          <div className="mt-4 detail_points">
            <ul className="list-disc ">
              {role.map((element, index) => {
                return (
                  <li
                    className=" text-[#242331] "
                    key={index}
                    data-aos="zoom-in-out"
                    data-aos-duration="1800"
                  >
                    <p className="mb-3 font-normal text-gray text-secondary sm:text-[16px] text-[14px]  ">
                      {element}
                    </p>
                  </li>
                );
              })}
            </ul>

            {/* RESPONSIBILITIES SECTION */}
            <h3
              className="lg:text-[35px] md:text-[30px] text-[25px]  text-[#242331] font-primary tracking-wide font-extrabold my-5"
              data-aos="zoom-in-out"
              data-aos-duration="1800"
            >
              Requirement
            </h3>
            <ul className="list-disc  lg:mb-[50px] mb-[30px] ">
              {requirement.map((element, index) => {
                return (
                  <li
                    className=" text-[#242331] "
                    key={index}
                    data-aos="zoom-in-out"
                    data-aos-duration="1800"
                  >
                    <p className="mb-3 font-normal text-gray text-secondary sm:text-[16px] text-[14px]">
                      {element}
                    </p>
                  </li>
                );
              })}
            </ul>

            {/* COMPANY CONTACT DETAILS  */}
            <div
              className="company_detail"
              data-aos="fade-zoom-in"
              data-aos-duration="1800"
            >
              <h3 className="lg:text-[35px] md:text-[30px] text-[25px] text-[#242331] font-primary tracking-wide font-extrabold  my-4">
                Contact us!
              </h3>
              <p className="text-normal text-gray text-secondary sm:mb-8  mb-4 sm:text-[16px] text-[14px]">
                Reach out to discuss the opportunity & send your answers to:
              </p>
              <p className="text-normal text-[#242331] text-secondary sm:text-[16px] text-[14px]">
                hr@gomarkho.com
              </p>
              <p className="text-normal text-gray text-secondary sm:text-[16px] text-[14px]">
                +342 343 34676
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetail;
