import React from 'react'

const AboutMission = () => {
    return (
        <div className="relative z-10 about_mission_section xl:py-[60px] lg:py-[30px] py-[20px] pb-[40px] padding-inline md:my-[100px]  " >
            <div className='flex lg:justify-between lg:items-center lg:flex-row flex-col  '>
                <div className="mission_content  lg:basis-2/3 md:basis-2/4 basis-full lg:ps-[70px]" data-aos='fade-up' data-aos-duration='1500' data-aos-anchor-placement="center-bottom" >
                    <h2 className='xl:text-[55px] lg:text-[40px] text-[30px]  text-white font-extrabold md:mb-5 mb-4 ' >Our Mission</h2>
                    <p className='text-white font-secondary font-normal lg:text-[22px] md:text-[20px] text-[16px]  xl:pe-[150px] lg:pe-[100px] text-justify  '>
                        Enabling seamless, innovative communication solutions and transformative technologies, our mission is to empower businesses with tailored VoIP systems, cutting-edge software solutions, and intelligent automation. We strive to be the catalyst for enhanced connectivity, operational efficiency, and growth, ensuring our clients thrive in an ever-evolving business landscape.
                    </p>
                </div>
                <div className="mission_img lg:basis-1/3 md:basis-2/4 basis-full lg:mt-0 mt-[40px]" data-aos='zoom-in' data-aos-duration='1500' data-aos-anchor-placement="center-bottom" >
                    <img src="/image/about/about-project.jpg" className='xl:w-[450px] lg:w-[350px] sm:w-[400px] w-full xl:h-[500px] sm:h-[400px] h-[350px] rounded-[20px]  ' alt="project" />
                </div>
            </div>

        </div>
    )
}

export default AboutMission