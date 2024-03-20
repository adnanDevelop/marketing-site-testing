import React, { useState } from "react";
import { accordinContent } from "../../service/Api";

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FUNCTION TO COLLAPSE ACCORDIN
  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="md:py-[60px] py-[40px] xl:px-[70px] px-[20px] rounded-[30px] bg-blue drop-shadow-1xl lg:mx-[150px] md:mx-[100px] mx-[30px] md:mb-[100px] mb-[50px]">
      <h2
        className="text-white font-bold font-primary tracking-wide md:text-[35px] sm:text-[30px] text-[22px] md:leading-none leading-tight lg:mb-10 mb-6 text-center capitalize"
        data-aos="fade-zoom-in"
        data-aos-duration="1800"
      >
        Frequently Asked Questions
      </h2>
      <div className="mt-8 accordin_section">
        {accordinContent.map((element, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={index}
              className={`accordin md:py-[20px] py-[15px] sm:ps-[25px] ps-[15px] md:pe-[0px] pe-[10px] select-none bg-white rounded-3xl mb-[30px] transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen
                  ? "xl:mx-[120px] md:mx-[40px]"
                  : "xl:mx-[140px] md:mx-[60px] overflow-hidden"
              }`}
              onMouseEnter={() => handleItemClick(index)}
            >
              <h4 className="text-black font-bold font-primary tracking-[0.6px] text-left xl:text-[18px] text-[13px]">
                {index + 1}. {element.title}
              </h4>
              <div
                className={`flex items-start justify-center accordin_body transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? " max-h-[300px] visible opacity-100"
                    : "invisible opacity-0 max-h-0"
                }`}
              >
                <p className="text-justify text-last-left text-gray md:text-[16px] text-[13px] sm:pt-[20px] pt-[10px] md:ps-[30px] md:pe-[25px] pe-[10px]">
                  {element.content}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ContactFaq;
