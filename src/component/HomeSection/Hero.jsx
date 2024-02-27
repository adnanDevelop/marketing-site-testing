import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Hero = () => {
  const goTop = () => {
    window.scrollTo({
      top : 0,
    })
  }

  return (
    <section>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 15000,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero_video w-full lg:h-[90vh] overflow-hidden h-screen relative flex sm:items-start items-center sm:justify-start justify-center z-100  ">
            <img
              src="/image/hero-bg-1.gif"
              alt="Background Video"
              className="absolute inset-0 w-full h-full object-cover"
              width={3000}
              height={4000}
            />
            {/* CONTENT SECTION */}
            <div className="md:pt-3 hero_content absolute  top-[50%] translate-y-[-50%] z-10 padding-inline lg:flex-none flex sm:items-start items-center flex-col sm:text-start text-center">
              <h1 className="xl:text-[65px] font-primary md:text-[60px] text-[50px]  text-white font-[800] leading-none">Elevate </h1>
              <h1 className="xl:text-[55px] font-primary md:text-[40px] text-[40px] text-white font-[500]">Your Voice.</h1>
              <h5 className="font-thin text-white xl:text-[25px] sm:text-[20px] text-[16px] font-primary">One-stop provider for all communcation</h5>
              <Link to="/contact" className="btn-primary-md  md:mt-[50px] mt-[30px]" onClick={goTop} >Get in touch </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_video w-full lg:h-[90vh] h-screen relative flex sm:items-start items-center sm:justify-start justify-center z-100">
            <img
              src="/image/hero-bg-2.gif"
              alt="Background Video"
              className="absolute inset-0 w-full h-full object-cover"
              width={3000}
              height={4000}
            />
            {/* CONTENT SECTION */}
            <div className="md:pt-3 hero_content absolute top-[50%] translate-y-[-50%] z-10 padding-inline lg:flex-none flex sm:items-start items-center flex-col sm:text-start text-center mx-auto">
              <h1 className="xl:text-[60px] font-primary md:text-[50px] text-[40px] text-white font-[800]  leading-none">Transformming </h1>
              <h1 className="xl:text-[45px] font-primary md:text-[40px] text-[25px] my-4 text-white font-[500] leading-none">Communication Excellence.</h1>
              <h5 className="font-thin text-white font-primary xl:text-[25px] sm:text-[20px] text-[16px]">Revolutionize the way you connect and collaborate</h5>
              <Link to="/contact" className="btn-primary-md md:mt-[50px] mt-[30px]" onClick={goTop} >Get in touch </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
