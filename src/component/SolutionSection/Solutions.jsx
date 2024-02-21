import React from 'react'
import { solutionTabContent } from '../../service/Api'


const Solutions = () => {
    return (
        <div className='communication_solution padding-block padding-inline'>
            <h3 className='text-black font-extrabold lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px] capitalize sm:mb-[50px] mb-[30px] text-center' data-aos='zoom-in' data-aos-duration='1800' >Our VoIP Solutions</h3>
            {/* SOLUTIONS TABS */}
            <div className='grid lg:grid-cols-12 gap-x-[10px] lg:mx-[70px]'>
                <div className='solution_tabs lg:col-span-3 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1 gap-3'>
                    {solutionTabContent.map((element, index) => {
                        return (
                            <div key={index} className="tab px-[10px] py-[20px] text-center rounded-[15px] border border-[#CBCBCB] bg-light-white w-full lg:max-w-[15rem] mx-auto">
                                <div>
                                    <img src={element.icon} className='w-[2rem] mx-auto mb-2' alt="" />
                                    <p className='text-black font-bold text-[17px] mt-4 leading-none'>{element.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='solution_content xl:col-span-9 lg:col-span-8 bg-blue text-white rounded-[15px] lg:py-[50px] py-[35px]  md:px-[50px] px-[20px]  lg:mt-0 mt-4  flex items-center justify-center' data-aos='fade-zoom-in' data-aos-duration='1800'>
                    <p className='xl:text-[22px] md:text-[20px] text-[16px] xl:leading-[2.5rem] text-justify font-light'>
                        Say goodbye to traditional PBX hassles. Our hosted PBX, a cloud-based system accessible via an IP network, eliminates hefty upfront investments and ongoing maintenance. With no IT or installation costs, businesses can seamlessly manage their phone systems through a user-friendly control panel. Experience the ease, cost-effectiveness, and popularity of our hosted PBX solutions for modern businesses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Solutions