import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 10000,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero_video w-full lg:h-[90vh] h-screen relative flex sm:items-start items-center sm:justify-start justify-center  z-[1]  ">
            <video autoPlay loop muted className="w-screen h-[100vh] absolute left-0 top-0 object-cover  " >
              <source src="/image/bg-video.mp4" type="video/mp4" />
            </video>
            {/* CONTENT SECTION */}
            <div className="md:pt-3 hero_content absolute  top-[50%] translate-y-[-50%] z-10 padding-inline flex lg:flex-none sm:items-start items-center flex-col sm:text-start text-center">
              <h1 className="xl:text-[75px] text-[60px]  text-white font-bold  leading-none">Elevate </h1>
              <h1 className="xl:text-[70px] text-[40px] text-white font-medium">Your Voice.</h1>
              <h5 className="font-thin text-white xl:text-[30px] sm:text-[20px] text-[18px] ">One-stop provider for all communcation</h5>
              <button className="btn-primary-md  mt-[50px]">Get in touch </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_video w-full lg:h-[95vh] h-screen relative ">
            <video autoPlay loop muted className="bg-video w-screen h-[100vh] absolute left-0 top-0 object-cover">
              <source src="/image/bg-video-2.mp4" />
            </video>
            {/* CONTENT SECTION */}
            <div className="md:pt-3 hero_content absolute  top-[50%] translate-y-[-50%] z-10 padding-inline flex lg:flex-none sm:items-start items-center flex-col sm:text-start text-center">
              <h1 className="xl:text-[75px] text-[40px]  text-white font-bold  leading-none">Transformming </h1>
              <h1 className="xl:text-[50px] text-[25px] my-4 text-white font-medium leading-none">Communication Excellence.</h1>
              <h5 className="font-thin text-white xl:text-[25px] sm:text-[20px] text-[16px] ">Revolutionize the way you connect and collaborate</h5>
              <button className="btn-primary-md  mt-[50px]">Get in touch </button>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="hero_section w-screen lg:h-[90vh] h-screen" style={{background : `url(${'/image/hero-bg-2.gif'}) no-repeat ` }} ></div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;
