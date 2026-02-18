import React, { useState } from 'react'
import SearchInput from '../components/SearchInput'
import Letters from '../components/Letters'
import Navbar from '../components/Navbar'
import SearchResultItem from '../components/SearchResultItem'
import Results from '../components/Results'
import { all } from '../data/all'
import PeopleAsk from '../components/PeopleAsk/PeopleAsk'

export default function All() {

  console.log(all);
  

  return (
    <>
      <Navbar />

      <div className='ml-60 mt-4 w-150'>
        <Results number={all.length} />

        <SearchResultItem title={all[0].title} description={all[0].description} />

        <PeopleAsk />

        {all.slice(1).map((result) => (
          <>
            <SearchResultItem key={result.id} {...result} />
          </>
        ))}


      </div>



    </>

  )
}
