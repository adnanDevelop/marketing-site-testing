import React from 'react'
import { useParams } from 'react-router-dom'
import { jobContent } from '../service/Api';
import JobDetail from '../component/CareerSingle/JobDetail';
import CareerForm from '../component/CareerSingle/CareerForm';
import Help from '../component/global/Help';


const CareerSingle = () => {
  const { userId } = useParams();
  document.title = 'GoMarkho-Career Single Page'
  const helpContent = {
    helpTitle: 'How can we help you?',
    helpContent: 'Are you ready to push boundaries and explore new frontiers of innovation?',
  }

  const singleJob = jobContent.filter((element, index) => {
    return element.id === +userId
  })

  return (
    <main>
      <JobDetail data={singleJob} />
      <CareerForm />
      <Help title={helpContent.helpTitle} content={helpContent.helpContent} />
    </main>
  )
}

export default CareerSingle