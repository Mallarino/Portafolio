import React from 'react'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import { education } from '../data/education'
import EducationItem from '../components/EducationItem'
import { useTranslation } from 'react-i18next'

export default function Education() {

  const {t} = useTranslation();

  return (
    <>
      <Navbar />
      <div className='ml-60 mt-4 w-150'>
        <Results number={education.length} />
        {education.map((item) => (
          <EducationItem academy={t(item.academyKey)} description={t(item.descriptionKey)} date={t(item.dateKey)} />
        ))}
      </div >
    </>
  )
}
