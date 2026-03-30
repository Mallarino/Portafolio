import React, { useState } from 'react'
import linkedin from '../assets/social/linkedin.png'
import github from '../assets/social/github.png'
import email from '../assets/social/email.png'

export default function AppSelection() {

  return (
    <>
      <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 z-50">

        <div className="grid grid-cols-3 gap-4">

          <div className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
            <a href="https://www.linkedin.com/in/santiago-mallarino-perez-118931263/" target='blank'>
              <img
                src={linkedin}
                className="w-10 h-10 mb-2"
                alt="Linkedin"
              />
              <span className="text-sm text-gray-700">LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
            <a href="https://github.com/Mallarino" target='blank'>
              <img
                src={github}
                className="w-10 h-10 mb-2"
                alt="GitHub"
              />
              <span className="text-sm text-gray-700">GitHub</span>
            </a>         </div>

          <div className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
            <a
              href="https://mail.google.com/mail/?view=cm&to=smallarino54@gmail.com"
              target="_blank"
            >
              <img
                src={email}
                className="w-10 h-10 mb-2"
                alt="Email"
              />
              <span className="text-sm text-gray-700">Email</span>
            </a>        </div>

        </div>

      </div>
    </>
  )
}
