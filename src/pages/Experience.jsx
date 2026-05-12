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
      <div className='pb-5 md:w-150 md:ml-60'>
        <Results number={experience.length}/>
        {experience.map((item) => (
          <ExperienceItem company={t(item.companyKey)} position={t(item.positionKey)} description={t(item.descriptionKey)} date={t(item.dateKey)} />
        ))}
      </div>
    </>
  )
}
