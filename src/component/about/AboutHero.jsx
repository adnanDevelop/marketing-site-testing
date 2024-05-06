import React, { useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutHero = () => {
  const aboutSection = useRef(null);
  const aboutHeading = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = aboutSection.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Adjust this value as needed to control when the animation starts
      const triggerOffset = 100;

      if (sectionTop < windowHeight - triggerOffset) {
        const gradientElements = aboutHeading.current;
        gradientElements.style.backgroundPositionX = `${scrollPosition}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative about_section pt-[60px] overflow-hidden">
        <div className="shape_img w-[400px] h-auto absolute top-[100px] md:right-[-220px] right-[-250px] md:rotate-[-155deg] rotate-[-155deg] z-[-1] md:block hidden">
          <img src="/image/shape.png" alt="" />
        </div>

        <div className="padding-block padding-inline md:mt-0">
          <div
            className="header_section text-center sm:mb-[50px] mb-[30px] "
            data-aos="zoom-in"
            data-aos-duration="1800"
          >
            <h2 className="text-black lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px] capitalize font-primary tracking-wide font-extrabold">
              About our company
            </h2>
            <p className="sm:text-[20px] text-[16px] text-secondary font-normal text-[#797979] ">
              Enabling a digital tomorrow
            </p>
          </div>

          {/* Image section */}
          <div className="flex items-center lg:gap-6 gap-4 md:px-[50px]">
            <div
              className="lg:basis-2/3 sm:basis-2/4 basis-full"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-anchor-placement="center-bottom"
            >
              <LazyLoadImage
                src="/image/about/about-header/img-1.jpg"
                className="w-full md:h-[400px] h-[300px]  object-cover rounded-3xl"
                alt=""
              />
            </div>
            <div
              className="lg:basis-1/3 sm:basis-2/4 basis-full"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-anchor-placement="center-bottom"
            >
              <LazyLoadImage
                src="/image/about/about-header/img-2.jpg"
                className="w-full md:h-[400px] h-[300px]  object-cover rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* About content section */}
        <div
          className="flex flex-col items-start md:flex-row padding-inline"
          data-aos="zoom-in-out"
          data-aos-duration="1800"
          data-aos-anchor-placement="center-bottom"
          ref={aboutSection}
        >
          <div className="md:ps-[50px] lg:basis-1/3 md:basis-2/5">
            <h2
              className="text-black font-primary font-extrabold tracking-wide lg:text-[40px] sm:text-[30px] text-[25px] md:mb-0 mb-2 capitalize gradient_color"
              ref={aboutHeading}
            >
              What do we do
            </h2>
          </div>
          <div
            className="md:pe-[50px] lg:basis-2/3  md:basis-3/5"
            data-aos="zoom-in-out"
            data-aos-duration="1800"
            data-aos-anchor-placement="center-bottom"
          >
            <p className="font-normal text-gray text-justify md:text-[18px] text-[15px] ">
              At GoMarkho, we specialize in offering a comprehensive suite of
              solutions designed to meet the diverse communication needs of
              businesses. With a profound focus on Voice over Internet Protocol
              (VoIP), our expertise extends to encompass software development
              and intelligent automation. As a dynamic provider, we take pride
              in being the singular destination for businesses seeking to
              optimize their communication infrastructure. Whether it's
              establishing robust VoIP systems for seamless and cost-effective
              voice communication, developing cutting-edge software solutions
              tailored to specific business objectives, or integrating
              intelligent automation to streamline workflows, our team of
              experts is committed to delivering high-quality, innovative, and
              customized services. We strive to empower businesses with the
              tools and technologies necessary to thrive in today's dynamic
              market landscape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
