import React from 'react'

const AutomationFeature = () => {
  return (
    <section className='development_feature_section  padding-inline lg:mt-[100px] mt-[50px]'>
      <h3 className='text-black font-bold font-primary tracking-wide lg:text-[40px] md:text-[40px] sm:text-[30px] text-[28px] sm:mb-[50px] mb-[30px] text-center' data-aos='fade-zoom-in' data-aos-duration='1800'>Key Features</h3>

      {/* FEATURE CARD ONE */}
      <div className="development_card_section grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] xl:mx-[80px]" data-aos='fade-zoom-in' data-aos-duration='1800'>
        <div className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}>
          <img src='/image/service-automation/feature/img-1.png' className='mx-auto max-w-[15rem] object-cover' alt="" />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className='my-3 font-primary tracking-[0.5px] 2xl:text-[30px] lg:text-[20px] text-black font-bold leading-none'>Consultation</h4>
            <p className='text-gray font-secondary font-normal'>
              Expert consultations tailor process automation solutions to your unique business needs, ensuring optimal efficiency.
            </p>
          </div>
        </div>

        {/* FEATURE CARD ONE */}
        <div className={`development_feature_card bg-light-white rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300`} >
          <img src='/image/service-automation/feature/img-2.png' className='mx-auto max-w-[15rem] object-cover' alt="" />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className='my-3 font-primary tracking-[0.5px] 2xl:text-[30px] lg:text-[20px] text-black font-bold leading-none '>Plan, Pilot, Scale</h4>
            <p className='text-gray font-secondary font-normal'>
              Strategically plan and pilot-scale your automation initiatives for seamless integration and maximum impact.
            </p>
          </div>
        </div>

        {/* FEATURE CARD ONE */}
        <div className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `} >
          <img src='/image/service-automation/feature/img-3.png' className='mx-auto max-w-[18rem] object-cover' alt="" />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className='my-3 font-primary tracking-[0.5px] 2xl:text-[30px] lg:text-[20px] text-black font-bold leading-none '>Data Capture</h4>
            <p className='text-gray font-secondary font-normal'>
              Efficiently capture and utilize crucial data with our advanced automation processes, driving informed decision-making.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AutomationFeature