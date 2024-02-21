import React from 'react'
import Hero from '../component/HomeSection/Hero';
import ServiceSection from '../component/HomeSection/ServiceSection';
import ProjectSection from '../component/HomeSection/ProjectSection';
import CompanySection from '../component/HomeSection/CompanySection';
import TestmonialSection from '../component/HomeSection/TestmonialSection';

const Home = () => {


  return (
    <main>
      <Hero />
      <ServiceSection />
      <ProjectSection />
      <CompanySection />
      <TestmonialSection />
    </main>
  )
}

export default Home      