import React from "react";
import { blogContent } from "../../service/Api";

const BlogCard = () => {
  return (
    <section className=" blog_card_section grid md:grid-cols-2 grid-cols-1  md:gap-[25px] gap-[20px] padding-inline lg:mx-[100px] md:mb-[80px] mb-[40px] mt-[50px]">
      {blogContent.map((element, index) => {
        return (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-anchor-placement="center-bottom"
          >
            <div
              className={`career_card border border-[#CBCBCB] rounded-[30px] xl:px-[40px] px-[25px]  pt-[30px] pb-[30px] bg-light-white transition duration-500 group hover:bg-blue lg:max-h-[300px] h-full`}
            >
              <span className="block mb-5 text-black transition duration-300 group-hover:text-white ">
                {element.date}
              </span>
              <h3 className="text-black xl:text-[25px] text-[20px] leading-none font-extrabold tracking-wide font-primary mb-2 transition duration-500 group-hover:text-white group-focus:text-white">
                {element.title}
              </h3>
              <div className="my-4 content_section lg:my-5">
                <p className="text-gray font-secondary md:text-[16px] text-[15px] font-normal text-justify text-justify-left transition duration-500 group-hover:text-white group-focus:text-white ">
                  {element.content}
                </p>
              </div>
              <a
                href={element.link}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-sky-900 group-hover:text-sky-900 underline font-semibold md:text-[18px] text-[15px] transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BlogCard;
