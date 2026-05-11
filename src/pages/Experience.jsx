import React from 'react'
import Navbar from '../components/Navbar'
import ExperienceItem from '../components/ExperienceItem'
import Results from '../components/Results'
import { experience } from '../data/experience'
import { useTranslation } from 'react-i18next'

export default function Experience() {

  const {t} = useTranslation();

  return (
    <>
      <Navbar />
      <div className='ml-60 mt-4 w-150'>
        <Results number={experience.length}/>
        {experience.map((item) => (
          <ExperienceItem company={t(item.companyKey)} position={t(item.positionKey)} description={t(item.descriptionKey)} date={t(item.dateKey)} />
        ))}
      </div>
    </>
  )
}
