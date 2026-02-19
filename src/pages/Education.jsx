import React from 'react'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import { education } from '../data/education'
import EducationItem from '../components/EducationItem'

export default function Education() {
  return (
    <>
      <Navbar />
      <div className='ml-60 mt-4 w-150'>
        <Results number={education.length} />
        {education.map((item) => (
          <EducationItem academy={item.academy} description={item.description} date={item.date} />
        ))}
      </div >
    </>
  )
}
