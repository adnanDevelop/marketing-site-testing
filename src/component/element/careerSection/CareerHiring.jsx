import React from 'react'
import { hiringContent } from '../../Data/Api'

const CareerHiring = () => {
    return (
        <div className=' hiring_section padding-block padding-inline mb-[50px] ' >
            {/* HIRING HEADER SECTION */}
            <div className="hiring_header text-left lg:ms-[100px] lg:mb-[40px] mb-[30px]" data-aos='zoom-in-out' data-aos-duration='1800'>
                <span className='uppercase text-[12px] text-black font-light'>our hiring process</span>
                <h2 className='text-black font-bold xl:text-[45px] lg:text-[40px] sm:text-[30px] text-[22px] mt-2 capitalize leading-none'>As simple as it could be</h2>
            </div>

            {/* HIRING CARD SECTION */}
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-[20px]  lg:mx-[100px] ">
                {hiringContent.map((element, index) => {
                    return (
                        <div className='hiring_card py-[150px] sm:px-[20px] px-[20px] sm:rounded-t-full sm:rounded-b-full rounded-[100px]   text-center border border-[#DFDFDF]' key={index} data-aos='fade-up' data-aos-duration='1800'>
                            <img src={element.img} className='mx-auto block mb-2 w-[60px] h-[60px]' alt="" />
                            <h4 className='text-black font-medium text-[50px] leading-none mb-2 '>{element.title}</h4>
                            <p className='text-[15px] text-black uppercase font-medium mb-2 font-secondary'>{element.subtitle}</p>
                            <p className='text-black font-normal font-secondary text-[14px] '>{element.content}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default CareerHiring