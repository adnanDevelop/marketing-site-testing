import React from "react";

const Expertise = () => {
  return (
    <main className="padding-inline lg:mt-[50px] mt-[85px] mb-[70px]">
      <section className="text-center expertise_header ">
        <h2
          className="text-[#333] capitalize text-center  xl:text-[40px] sm:text-[30px] text-[25px] font-primary font-extrabold tracking-wide"
          // data-aos="zoom-in-out"
          // data-aos-duration="1500"
        >
          Our Expertise
        </h2>
        <p className="font-light text-black md:text-[16px] text-[15px] font-secondary">
          Latest in technology to keep you at pace with the times.
        </p>
      </section>
      <section className="expertise_img sm:mt-[40px] mt-[25px]">
        <img
          src="/image/expertise/expertise-img.png"
          className="mx-auto"
          alt=""
        />
      </section>
    </main>
  );
};

export default Expertise;
