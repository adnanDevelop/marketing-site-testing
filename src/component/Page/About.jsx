import React from 'react'
import AboutHero from '../element/about/AboutHero'
import AboutCounter from '../element/about/AboutCounter'
import AboutMission from '../element/about/AboutMission'
import AboutStory from '../element/about/AboutStory'
import Help from '../utils/Help';

const About = () => {
  document.title = 'GoMarkho-About Page'
  const helpContent = {
    helpTitle: 'How can we help you?',
    helpContent: 'Are you ready to push boundaries and explore new frontiers of innovation?',
  }


  return (
    <>
      <AboutHero />
      <AboutCounter />
      <AboutMission />
      <AboutStory />
      <Help title={helpContent.helpTitle} content={helpContent.helpContent} />
    </>
  )
}

export default About