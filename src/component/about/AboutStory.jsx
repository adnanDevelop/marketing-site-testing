import React from "react";
import { storyContent } from "../../service/Api";

const AboutStory = () => {
  return (
    <section className="about_story_section padding-inline xl:mx-[100px] sm:mx-[30px] md:mt-0 mt-[40px] ">
      <div className="story_header mb-[50px]  ">
        <h2
          className="lg:text-[40px] md:text-[40px] sm:text-[30px] text-[28px] font-primary font-extrabold tracking-wide text-black text-center  leading-snug    capitalize w-full max-w-[40rem] mx-auto"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
        >
          The story and values behind our company
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 story_card_section md:grid-cols-2 lg:gap-8">
        {storyContent.map((element, index) => {
          return (
            <div
              className="story_card flex lg:flex-row flex-col lg:items-center lg:gap-x-6 bg-light-white py-5 md:ps-5 ps-3 lg:pe-10 md:pe-8 pe-5 rounded-[25px]"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="mb-4 story_card_icon mb-lg-0">
                <p className="w-[60px] h-[70px] rounded-lg bg-sky-900 text-white text-[30px] flex items-center justify-center">
                  {element.icon}
                </p>
              </div>
              <div className="story_card_content">
                <h5 className="text-black  font-bold xl:text-[25px] text-[20px] mb-1 font-primary  tracking-wide">
                  {element.title}
                </h5>
                <p className="text-justify  text-gray text-justify-last font-secondary">
                  {element.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutStory;
