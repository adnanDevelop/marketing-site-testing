import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testContent } from "../../service/Api";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Pagination } from "swiper/modules";

const TestmonialSection = () => {

  return (
    <section className="testmonial_section padding-inline mb-[40px]">
      {/* HEADER SECTION */}
      <div className="testmonial_header flex items-center justify-between ">
        <h2 className="text-black capitalize  xl:text-[35px] sm:text-[30px] text-[25px] font-primary font-extrabold tracking-wide" data-aos='zoom-in-out' data-aos-duration='1500' >
          client testmonials
        </h2>
        <div className="slider_btn flex items-center gap-2" data-aos='zoom-out' data-aos-duration='1500' >
          <button className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-sky-500 text-white transition duration-300 focus:bg-sky-900 text[20px] ">
            <FaArrowLeft />
          </button>
          <button className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-sky-500 text-white transition duration-300 focus:bg-sky-900 text[20px] ">
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* CARD SECTION */}
      <div className="testmonial_card_section relative ">
        <div className="quote_icon_one absolute z-[10] sm:top-[15px] top-[20px] sm:block hidden ">
          <img src="/image/testmonial/quote-1.png" className="sm:w-[45px] w-[35px]" alt="" />
        </div>
        <div className="quote_icon_two absolute z-[10] right-0 sm:bottom-[15%] lg:bottom-[24%] md:bottom-[18%] bottom-[13%] rotate-[180deg] sm:block hidden">
          <img src="/image/testmonial/quote-1.png" className="sm:w-[45px] w-[35px]" alt="" />
        </div>

        <Swiper
          slidesPerView={3}
          grabCursor={true}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
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
              spaceBetween: 40,
            },
            1160: {
              slidesPerView: 3,
              spaceBetween: 40,
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
              <SwiperSlide className="lg:px-[10px] px-[5px]" key={index}>
                <div
                  className="mb-[50px] mt-[40px] basis testmonial_card shadow-xl rounded-xl bg-white  sm:px-[30px] px-[20px] py-[40px]"
                >
                  <p className="text-justify mb-[20px] text-[18px] tracking-wide">{element.content}</p>
                  <div className="flex items-center gap-4   ">
                    <img
                      src={element.img}
                      className="xl:w-[50px] w-[60px]  xl:h-[50px] h-[60px]  object-cover"
                      alt=""
                    />
                    <div>
                      <h4 className="text-black font-medium text-secondary font-primary ">
                        {element.title}
                      </h4>
                      <p className=" font-light text-black text-secondary text-[12px] font-secondary ">
                        {element.subtitle}
                      </p>
                    </div>
                  </div>
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

