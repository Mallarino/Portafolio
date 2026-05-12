import React from 'react'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import { projects } from '../data/projects'
import SearchResultItem from '../components/SearchResultItem'
import { useTranslation } from 'react-i18next'

export default function Projects() {
  
  const {t} = useTranslation();

  return (
    <>
      <Navbar />
      <div className='mt-4 px-5 md:w-150 md:ml-60'>
        <Results number={projects.length} />

        {projects.map((item) => (
          <SearchResultItem key={item.id} title={t(item.titleKey)} link={item.link} image={item.image} description={t(item.descriptionKey)} stack={item.stack} />
        ))}

      </div>

    </>
  )
}
