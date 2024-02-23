import React from 'react'
import { automationCardContent } from '../../service/Api';

const AutomationCard = () => {
  return (
    <section className='benefit_card padding-block padding-inline'>
      <h3 className='text-black font-bold font-primary tracking-wide  lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px] capitaliz sm:mb-[50px] mb-[30px] text-center leading-[2rem]' data-aos='fade-zoom-in' data-aos-duration='1800'>Benefits of Custom Software Solutions</h3>

      {/* BENEFIT CARD SECTION  */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-[20px] xl:mx-[150px] lg:mx-[60px] '>
        {automationCardContent.map((element, index) => {
          return (
            <div key={index} className='benefit_card lg:h-[350px] h-auto lg:py-0 py-[50px]  px-[20px] border border-[#CBCBCB] bg-[#F9F9F9] rounded-[15px]  flex items-center justify-center flex-col' style={{ boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.07)' }} data-aos='fade-up' data-aos-duration='1800'>
              <img src={element.icon} alt="" />
              <h5 className=' my-4 font-extrabold font-primary tracking-wide text-[18px] capitalize'>{element.title}</h5>
              <p className='text-center text-gray '>{element.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AutomationCard