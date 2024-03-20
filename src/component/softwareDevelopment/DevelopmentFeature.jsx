import React from "react";

const DevelopmentFeature = () => {
  return (
    <section className="development_feature_section lg:mt-[90px] mt-[50px]  padding-inline ">
      <h3 className="text-black font-extrabold font-primary tracking-wide lg:text-[40px] md:text-[40px] sm:text-[30px] text-[28px] sm:mb-[50px] mb-[30px] text-center">
        Key Features
      </h3>
      {/* FEATURE CARD ONE */}
      <div className="development_card_section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-[20px] xl:mx-[100px]  ">
        <div
          className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}
          data-aos="fade-zoom-in"
          data-aos-duration="1800"
        >
          <img
            src="/image/software-development/feature/img-1.png"
            className="mx-auto max-w-[16rem] object-cover h-auto"
            alt=""
          />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] mt-[40px]">
            <h4 className="my-3 2xl:text-[25px] font-primary tracking-[0.5px] lg:text-[25px]  text-[22px]  text-black font-bold leading-none ">
              Task Management
            </h4>
            <p className="font-normal text-gray font-secondary">
              Effortlessly organize and track tasks with our intuitive task
              management feature, streamlining project workflows.
            </p>
          </div>
        </div>

        {/* FEATURE CARD ONE */}
        <div
          className={`development_feature_card bg-light-white rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300`}
          data-aos="fade-zoom-in"
          data-aos-duration="1800"
        >
          <img
            src="/image/software-development/feature/img-2.png"
            className="mx-auto max-w-[16rem] object-cover h-auto"
            alt=""
          />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className="my-3 2xl:text-[25px] font-primary tracking-[0.5px] lg:text-[25px]  text-[22px]  text-black font-bold leading-none ">
              Financial Management
            </h4>
            <p className="font-normal text-gray font-secondary">
              Empower financial control and transparency with our comprehensive
              financial management tools, ensuring precision in financial
              operations.
            </p>
          </div>
        </div>

        {/* FEATURE CARD ONE */}
        <div
          className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}
          data-aos="fade-zoom-in"
          data-aos-duration="1800"
        >
          <img
            src="/image/software-development/feature/img-3.png"
            className="mx-auto max-w-[18rem] object-cover h-auto"
            alt=""
          />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className="my-3 2xl:text-[25px] font-primary tracking-[0.5px] lg:text-[25px]  text-[22px]  text-black font-bold leading-none ">
              ERP Systems{" "}
            </h4>
            <p className="font-normal text-gray font-secondary">
              Experience seamless integration and optimization of your business
              processes through our robust ERP systems, enhancing overall
              efficiency and coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentFeature;
