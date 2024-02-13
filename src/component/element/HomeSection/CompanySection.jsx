import React from 'react'

const CompanySection = () => {
  return (
    <div className='discover_secion padding-block padding-inline sm:my-[0px] my-[20px] relative overflow-x-hidden '>
      <p className='text-center lg:text-[30px] text-[20px] text-black font-normal mb-[50px]' data-aos='zoom-out' data-aos-duration='1500' data-aos-anchor-placement="bottom-bottom" >
        Discover the difference as you join a community of businesses that have experienced the transformative power of our services.
      </p>
      <div className='shape_img absolute top-[50%] translate-y-[-50%] lg:left-[-15%] md:left-[-22%] sm:left-[-30%] left-[-32%] z-[-1] rotate-[-15deg]'>
        <img src="/image/shape.png" className='lg:max-w-[500px] sm:h-[300px] h-[200px]  ' alt="" />
      </div>
      <div className='shape_img absolute top-[50%] translate-y-[-50%] lg:right-[-10%] md:right-[-22%] sm:right-[-32%] right-[-32%] z-[-1] rotate-[170deg]'>
        <img src="/image/shape.png" className='lg:max-w-[500px] sm:h-[300px] h-[200px]  ' alt="" />
      </div>
      <div className='flex items-center xl:justify-between justify-center flex-wrap  '>
        <img src="/image/company/img-1.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
        <img src="/image/company/img-2.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
        <img src="/image/company/img-3.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
        <img src="/image/company/img-4.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
        <img src="/image/company/img-5.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
        <img src="/image/company/img-6.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
        <img src="/image/company/img-7.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
        <img src="/image/company/img-8.png" className='w-[140px] h-auto object-cover' alt="company logo" data-aos='zoom-out' data-aos-duration='1500'  />
      </div>

    </div>
  )
}

export default CompanySection