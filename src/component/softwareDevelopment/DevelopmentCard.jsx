import React from 'react'
import { developmentCard } from '../../service/Api'


const DevelopmentCard = () => {
    return (
        <div className='benefit_card padding-block padding-inline xl:mx-[100px] lg:mx-[100px]   '>
            <h3 className='text-black font-extrabold lg:text-[45px] sm:text-[30px] text-[28px] capitalize sm:mb-[50px] mb-[30px] text-center leading-none' data-aos='fade-zoom-in' data-aos-duration='1800' >Benefits of Custom Software Solutions</h3>

            {/* DEVELOPMENT CARD SECTION  */}
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-[30px]'>
                {developmentCard.map((element, index) => {
                    return (
                        <div key={index} className='benefit_card lg:h-[350px] h-auto lg:py-0 py-[50px]  px-[30px] border border-[#CBCBCB] bg-[#F9F9F9] rounded-[15px]  flex items-center justify-center flex-col' style={{ boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.07)' }}  data-aos='fade-zoom-in' data-aos-duration='1800'>
                            <img src={element.icon} alt="" />
                            <h5 className=' my-4 font-semibold text-[20px] capitalize '>{element.title}</h5>
                            <p className='text-center text-gray '>{element.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DevelopmentCard