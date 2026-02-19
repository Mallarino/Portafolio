import React from 'react'
import Navbar from '../components/Navbar'
import ImagesItem from '../components/ImagesItem'
import test from '../assets/projects/test.png'

export default function Images() {
  return (
    <>
      <Navbar />

      <div class="grid grid-cols-3 grid-rows-3 gap-4 ml-30">
        <ImagesItem link={"https://supa-note.netlify.app/login"} title={"SupaNote"} image={test} />
         <ImagesItem link={"https://supa-note.netlify.app/login"} title={"SupaNote"} image={test} />
          <ImagesItem link={"https://supa-note.netlify.app/login"} title={"SupaNote"} image={test} />
           <ImagesItem link={"https://supa-note.netlify.app/login"} title={"SupaNote"} image={test} />
            <ImagesItem link={"https://supa-note.netlify.app/login"} title={"SupaNote"} image={test} />
             <ImagesItem link={"https://supa-note.netlify.app/login"} title={"SupaNote"} image={test} />
              <ImagesItem link={"https://supa-note.netlify.app/login"} title={"SupaNote"} image={test} />
      </div>
    </>
  )
}
