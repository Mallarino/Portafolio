import React from 'react'


export default function ExperienceItem({ academy, description, date }) {

    return (
        <div className='w-150 border border-gray-200 mt-4 p-5 rounded-lg'>
            <a href='https://www.cesde.edu.co/' target='blank' className='text-xl font-normal mt-4 hover:text-blue-600'>{academy}</a>
            <p className='text-gray-500 mt-2'>{description}</p>
            <p className='text-gray-500 text-sm mt-2'>{date}</p>
        </div>
    )
}
