import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testContent } from "../../service/Api";

// LIGHT GALLERY
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Pagination } from "swiper/modules";

const TestmonialSection = () => {
  const swiperRef = useRef(null);
  const swiper = useSwiper();
  const [isvideo, showVideo] = useState(false);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="testmonial_section padding-inline mb-[40px]">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between testmonial_header ">
        <h2
          className="text-black capitalize  xl:text-[35px] sm:text-[30px] text-[25px] font-primary font-extrabold tracking-wide"
          data-aos="zoom-in-out"
          data-aos-duration="1500"
        >
          client testmonials
        </h2>
        <div
          className="flex items-center gap-2 slider_btn"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <button
            onClick={handlePrevClick}
            className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-sky-500 text-white transition duration-300 focus:bg-sky-900 text[20px] "
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-sky-500 text-white transition duration-300 focus:bg-sky-900 text[20px] "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* CARD SECTION */}
      <div className="relative testmonial_card_section ">
        <div className="quote_icon_one absolute z-[10] sm:top-[15px] top-[20px] sm:block hidden ">
          <img
            src="/image/testmonial/quote-1.png"
            className="sm:w-[45px] w-[35px]"
            alt=""
          />
        </div>
        <div className="quote_icon_two absolute z-[10] right-0 sm:bottom-[10%] lg:bottom-[14%] rotate-[180deg] sm:block hidden">
          <img
            src="/image/testmonial/quote-1.png"
            className="sm:w-[45px] w-[35px]"
            alt=""
          />
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          loop={true}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1160: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          {testContent.map((element, index) => {
            return (
              <SwiperSlide className="lg:px-[10px] px-[5px] " key={index}>
                <div className="mb-[50px] mt-[40px] basis testmonial_card shadow-xl rounded-xl bg-white  sm:px-[20px] px-[20px] pt-[40px] pb-[30px]">
                  <p className="mb-[20px] xl:text-[16px] tracking-wide text-justify">
                    {element.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={element.img}
                      className="xl:w-[50px] w-[60px] xl:h-[50px] h-[60px] rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <h4 className="font-medium text-black text-secondary font-primary ">
                        {element.title}
                      </h4>
                      <p className=" font-light text-black text-secondary text-[12px] font-secondary ">
                        {element.subtitle}
                      </p>
                    </div>
                  </div>
                  {element.videoLink && (
                    <div className="flex justify-end mt-3">
                      <button
                        type="button"
                        className="flex items-center justify-end font-semibold text-sky-500"
                        onClick={() => showVideo(true)}
                      >
                        Learn more
                        <span className="ps-3">
                          <FaArrowRight />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestmonialSection;
