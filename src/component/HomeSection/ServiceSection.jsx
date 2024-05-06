import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { serviceData } from "../../service/Api";

const ServiceSection = () => {
  const gradientRef = useRef(null);
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section = sectionRef.current;
      const gradientElements = gradientRef.current;
      const serviceImg = imgRef.current;

      if (section && serviceImg) {
        const sectionTop = section.getBoundingClientRect().top;
        if (scrollPosition >= sectionTop) {
          serviceImg.classList.add("image-animation");
        } else {
          serviceImg.classList.remove("image-animation");
        }
      }
      gradientElements.style.backgroundPositionX = `${scrollPosition}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="flex service_section padding-inline padding-block "
      ref={sectionRef}
    >
      <div className="flex flex-col justify-between service_heading_section lg:items-center lg:flex-row ">
        <div className=" basis-full xl:basis-1/2">
          <p
            className="mb-2 text-sky-500 font-medium sm:text-[20px] text-[18px] capitalize font-secondary"
            data-aos="zoom-in-out"
            data-aos-duration="1500"
          >
            services
          </p>
          <div className="relative z-10">
            <p
              className="gradient_color xl:text-[40px] lg:text-[30px] text-[25px] xl:leading-[3.5rem] lg:leading-[3rem] xl:max-w-[37rem] lg:max-w-[28rem] w-full  font-semibold font-primary xl:pe-0 lg:pe-[20px]"
              ref={gradientRef}
            >
              Experience tailored excellence, designed to elevate your
              connectivity, deliver personalized solutions, and streamline
              operations.
            </p>
            <img
              src="/image/service-img.png"
              className="absolute top-[50%] left-[-100%] translate-y-[-50%] z-[-1] lg:w-[40%] w-[200px] service-img"
              alt=""
              ref={imgRef}
              loading="lazy"
            />
          </div>
        </div>
        <div className="basis-full xl:basis-2/5  lg:mt-0 mt-[30px]">
          {serviceData.map((element, index) => {
            return (
              <div
                key={index}
                className="service_question pb-3 border-b-[1px] border-b-soft-white"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className="2xl:text-[60px] sm:text-[40px] text-[35px] text-outline font-secondary">
                  {element.count}
                </p>
                <h3 className=" sm:ps-[50px] ps-[30px] font-[600] font-primary 2xl:text-[30px] text-[20px] text-black  ">
                  {element.title}
                </h3>
                <p className="sm:ps-[50px] ps-[30px] font-light text-black md:text-[16px] text-[15px] font-secondary ">
                  {element.content}
                </p>
                <Link
                  to="/"
                  className="sm:ps-[50px] ps-[30px] text-sky-500 xl:text-[18px] text-[16px] text-center flex items-center gap-2 font-primary  font-semibold transition duration-500 hover:text-sky-900 focus:text-sky-900 "
                >
                  Learn more{" "}
                  <span className="">
                    <FaArrowRight />
                  </span>{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
