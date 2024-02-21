import React from 'react'
import BlogHero from '../component/BlogSection/BlogHero'
import Help from '../component/global/Help'
import DevelopmentCard from '../component/softwareDevelopment/DevelopmentCard'
import DevelopmentSolution from '../component/softwareDevelopment/DevelopmentSolution'
import DevelopmentFeature from '../component/softwareDevelopment/DevelopmentFeature'

const ServiceSoftware = () => {
  document.title='GoMarkho-Service Software'

  const solutionTitle = {
    title: 'Software Development',
    content: 'Any business that aims to offer a personalized services needs to cater to its own specific needs first.”',
  }

  const helpContent = {
    title: 'How can we help you?',
    content: 'Tell us your challenges and our experts will help you find the best approach.',
  }



  return (
    <main>
      <BlogHero title={solutionTitle.title} content={solutionTitle.content} />
      <DevelopmentCard />
      <DevelopmentSolution />
      <DevelopmentFeature />
      <Help title={helpContent.title} content={helpContent.content} />
    </main>
  )
}

export default ServiceSoftware