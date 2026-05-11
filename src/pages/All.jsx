import React, { useState } from 'react'
import SearchInput from '../components/SearchInput'
import Letters from '../components/Letters'
import Navbar from '../components/Navbar'
import SearchResultItem from '../components/SearchResultItem'
import Results from '../components/Results'
import { all } from '../data/all'
import PeopleAsk from '../components/PeopleAsk/PeopleAsk'
import { useTranslation } from 'react-i18next'


export default function All() {

  const {t} = useTranslation();

  return (
    <>
      <Navbar />

      <div className='ml-60 mt-4 w-150'>
        <Results number={all.length} />

        <SearchResultItem section={t(all[0].sectionKey)} title={t(all[0].titleKey)} description={t(all[0].descriptionKey)} />

        <PeopleAsk />

        {all.slice(1).map((result) => (
          <>
            <SearchResultItem key={result.id} section={t(result.sectionKey)} link={result.link} title={t(result.titleKey)} description={t(result.descriptionKey)} />
          </>
        ))}


      </div>



    </>

  )
}
