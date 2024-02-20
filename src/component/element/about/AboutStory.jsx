import React from 'react'
import { storyContent } from '../../Data/Api'

const AboutStory = () => {
    return (
        <div className='about_story_section padding-inline xl:mx-[100px] sm:mx-[30px]  padding-block '>
            <div className="story_header mb-[50px]  ">
                <h2
                    className='lg:text-[40px] md:text-[40px] sm:text-[30px] text-[28px]  text-primary font-bold text-black  text-center   leading-none capitalize w-full max-w-[35rem] mx-auto'
                    data-aos='fade-zoom-in' data-aos-duration='1500' data-aos-anchor-placement="center-bottom"
                >
                    The story and values behind our company
                </h2>
            </div>
            <div className='story_card_section grid md:grid-cols-2 grid-cols-1  lg:gap-8 gap-5  '>
                {storyContent.map((element, index) => {
                    return (
                        <div className="story_card flex lg:flex-row flex-col lg:items-center lg:gap-x-4 bg-light-white py-5 md:px-5 px-3 rounded-[25px]" key={index} data-aos='fade-up' data-aos-duration='1800' data-aos-anchor-placement="center-bottom"  >
                            <div className="story_card_img mb-lg-0 mb-4">
                                <img src={element.icon} className='lg:w-[150px] lg:h-auto object-cover sm:w-[70px] w-[60px]  h-[70px]' alt="" />
                            </div>
                            <div className="story_card_content">
                                <h5 className='text-black  font-bold xl:text-[25px] text-[20px] mb-1'>{element.title}</h5>
                                <p className=' text-gray text-justify text-justify-last'>{element.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutStory