import React from 'react'
import { useParams } from 'react-router-dom'
import { jobContent } from '../Data/Api';
import JobDetail from '../element/CareerSingle/JobDetail';
import CareerForm from '../element/CareerSingle/CareerForm';
import Help from '../utils/Help';

const CareerSingle = () => {
  document.title = 'GoMarkho-Career Single Page'
  const helpContent = {
    helpTitle: 'How can we help you?',
    helpContent: 'Are you ready to push boundaries and explore new frontiers of innovation?',
  }

  const { userId } = useParams();

  const singleJob = jobContent.filter((element, index) => {
    return element.id === +userId
  })

  return (
    <div>
      <JobDetail data={singleJob} />
      <CareerForm />
      <Help title={helpContent.helpTitle} content={helpContent.helpContent} />
    </div>
  )
}

export default CareerSingle