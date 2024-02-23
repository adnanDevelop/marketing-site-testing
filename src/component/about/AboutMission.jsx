import React from 'react'

const AboutMission = () => {
    return (
        <section className="relative z-10 about_mission_section xl:py-[60px] lg:py-[30px] pt-[20px]  padding-inline md:my-[100px]  " >
            <div className='flex lg:justify-between lg:items-center lg:flex-row flex-col  '>
            <div className="mission_content lg:basis-2/3 md:basis-2/4 basis-full lg:ps-[70px]" data-aos='fade-up' data-aos-duration='1500' data-aos-anchor-placement="center-bottom">
                    <h2 className='xl:text-[45px] lg:text-[40px] text-[30px]  text-white font-primary font-extrabold tracking-wide lg:mb-5 mb-4 ' >Our Mission</h2>
                    <p className='text-white font-secondary font-normal tracking-wide xl:text-[20px] md:text-[18px] text-[16px]  xl:pe-[100px] lg:pe-[100px] text-justify lg:leading-[2.2rem] sm:leading-[2rem] leading-[1.8rem] '>
                        Enabling seamless, innovative communication solutions and transformative technologies, our mission is to empower businesses with tailored VoIP systems, cutting-edge software solutions, and intelligent automation. We strive to be the catalyst for enhanced connectivity, operational efficiency, and growth, ensuring our clients thrive in an ever-evolving business landscape.
                    </p>
                </div>
                <div className="mission_img lg:basis-1/3 md:basis-2/4 basis-full lg:mt-0 mt-[40px]" data-aos='zoom-in' data-aos-duration='1500' data-aos-anchor-placement="center-bottom" >
                    <img src="/image/about/about-project.jpg" className='xl:w-[350px] lg:w-[280px] w-[250px] xl:h-[450px] sm:h-[350px] h-[300px] rounded-[20px]  ' alt="project" />
                </div>
            </div>

        </section>
    )
}

export default AboutMission