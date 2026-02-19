import React from 'react'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import { projects } from '../data/projects'
import SearchResultItem from '../components/SearchResultItem'

export default function Projects() {
  
  return (
    <>
      <Navbar />
      <div className='ml-60 mt-4 w-150'>
        <Results number={projects.length} />

        {projects.map((item) => (
          <SearchResultItem key={item.id} title={item.title} link={item.link} image={item.image} description={item.description} stack={item.stack} />
        ))}

      </div>

    </>
  )
}
