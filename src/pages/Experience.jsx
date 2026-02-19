import React from 'react'
import Navbar from '../components/Navbar'
import ExperienceItem from '../components/ExperienceItem'
import Results from '../components/Results'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <>
      <Navbar />
      <div className='ml-60 mt-4 w-150'>
        <Results number={experience.length}/>
        {experience.map((item) => (
          <ExperienceItem company={item.company} position={item.position} description={item.description} date={item.date} />
        ))}
      </div>
    </>
  )
}
