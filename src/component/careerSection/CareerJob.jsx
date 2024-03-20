import React from "react";
import { jobContent } from "../../service/Api";
import { Link } from "react-router-dom";

const CareerJob = () => {
  const goTopFunc = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section
      className="relative z-10 overflow-hidden career_job_section padding-inline"
      id="job"
    >
      <div className="shape_img w-[400px] h-auto absolute bottom-[-15%] md:right-[-200px] right-[-200px] md:rotate-[-155deg] rotate-[-155deg] z-[-1] md:block hidden">
        <img src="/image/shape.png" alt="" />
      </div>
      {/* JOB HEADER SECTION */}
      <div
        className="mb-10 text-center career_job_header"
        data-aos="zoom-out"
        data-aos-duration="1800"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="text-black font-bold font-primary tracking-wide xl:text-[45px] lg:text-[40px]  sm:text-[30px] text-[22px] capitalize leading-none ">
          Current job open positions
        </h2>
      </div>

      {/* JOB CARD SECTION */}
      <div className="career_job_card grid md:grid-cols-2  grid-cols-1 md:gap-[20px] gap-[15px]  xl:mx-[100px]   ">
        {jobContent.map((element, index) => {
          return (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-duration="1800"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="career_card border border-[#CBCBCB] rounded-[20px] xl:px-[30px] px-[25px]  pt-[30px] pb-[30px]   transition duration-500 group hover:bg-blue">
                <h3 className="text-black xl:text-[25px] text-[20px] font-bold font-primary leading-none mb-2  transition duration-500  group-hover:text-white group-focus:text-white">
                  {element.title}
                </h3>
                <p className="text-black mb-4 text-[14px] transition duration-500 group-hover:text-white group-focus:text-white ">
                  {element.location} <span className="mx-2">|</span>{" "}
                  <span className="text-sky-500 group-hover:text-white group-focus:text-white">
                    {element.jobType}
                  </span>
                </p>
                <div className="content_section">
                  <p className="font-normal text-justify transition duration-500 text-gray font-secondary group-hover:text-white group-focus:text-white ">
                    {element.content}
                  </p>
                </div>
                <Link
                  to={`/career/${element.id}`}
                  className=" inline-block mt-9 capitalize font-[600] text-[14px] text-white bg-sky-500 rounded-full sm:px-[30px] px-[20px] sm:py-[15px] py-[10px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black "
                  onClick={goTopFunc}
                >
                  apply now
                </Link>
              </div>
            </div>
          );
        })}

        {/* CAN'T FIND CARD */}
        <div className="md:col-span-2 career_card border md:py-[100px] py-[50px] sm-px-1 px-[20px] bg-white border-[#CBCBCB] rounded-[20px] flex items-center justify-center flex-col transition duration-500 group hover:bg-blue">
          <h3 className="text-black sm:text-[25px] text-[20px] font-extrabold font-primary tracking-wide leading-none mb-3 text-center transition duration-500 group-hover:text-white group-focus:text-white ">
            Can't find position you are looking for?
          </h3>
          <p className="text-black font-secondary sm:text-[16px] text-[14px] font-normal text-justify text-last-justify transition duration-500 group-hover:text-white group-focus:text-white ">
            Don't worry, get in touch with us anyways, we are always{" "}
            <br className="hidden md:block" /> looking for great team members to
            join us.
          </p>
          <Link
            to="/worktogether"
            className=" inline-block mt-4 capitalize font-[600] text-[14px] text-white bg-sky-500 rounded-full sm:px-[30px] px-[20px] sm:py-[15px] py-[10px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black"
            onClick={goTopFunc}
          >
            apply now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerJob;
