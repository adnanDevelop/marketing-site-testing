import React from 'react'
import { Link } from 'react-router-dom'

const AboutWork = () => {
  return (
    <section className=' text-center about_work_section padding-inline padding-block flex items-center justify-center flex-col' data-aos='fade-zoom-in' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >
      <h2 className='text-black font-bold text-primary xl:text-[50px] md:text-[40px] text-[30px]' data-aos='fade-up' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >How can we help you</h2>
      <p className='text-black font-normal text-secondary xl:text-[20px] md:text-[18px] text-[16px] mb-8' data-aos='fade-up' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >Are you ready to push boundaries and explore new frontiers of innovation?</p>
      <Link to='/worktogether' className='btn-primary-md' data-aos='fade-up' data-aos-duration='1800' data-aos-anchor-placement="center-bottom" >LET'S WORK TOGETHER</Link>
    </section>
  )
}

export default AboutWork