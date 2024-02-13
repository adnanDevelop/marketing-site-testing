import React from 'react'
import { Link } from 'react-router-dom'


const Help = ({title , content}) => {
  return (
    <div className='help_section padding-block md:mb-0 mb-[40px] padding-inline flex items-center justify-center flex-col text-center' data-aos='fade-zoom-in' data-aos-duration='1800' data-aos-anchor-placement="center-bottom"  >
         <h2 className='text-black font-bold xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px]  leading-none mb-3' data-aos='fade-up' data-aos-duration='1800' data-aos-anchor-placement="center-bottom"  >{title}</h2>
         <p className='text-black font-normal font-secondary mb-6 sm:text-[20px] text-[15px]' data-aos='fade-up' data-aos-duration='1800' data-aos-anchor-placement="center-bottom"  >{content}</p>
         <Link to='/worktogether ' className='btn-primary-md uppercase' data-aos='fade-up' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >let's work together</Link>
    </div>
  )
}

export default Help