import React from 'react'

const BlogHero = ({ title, content }) => {
    return (
        <div>
            <div className=' text-center about_work_section  md:pt-[150px] pt-[100px]  pb-[50px] flex items-center justify-center flex-col' data-aos='zoom-up' data-aos-duration='1800' >
                <h2 className='text-black font-bold text-primary xl:text-[50px] md:text-[40px] text-[30px] font-secondary leading-none' >{title}</h2>
                <p className='text-gray font-normal text-secondary xl:text-[20px] md:text-[18px] text-[16px]  my-3 max-w-[550px]  '>{content}</p>
            </div>
        </div>
    )
}

export default BlogHero