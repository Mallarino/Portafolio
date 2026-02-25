import React from 'react'


export default function SearchResultItem({ section, link, title, image, description, stack }) {
  return (
    <div className='my-8'>
      <div className='text-gray-500 text-sm'>{section}</div>
      <div className='text-gray-500'>{link}</div>
      <a href={link} target='blank' className='text-purple-700 text-xl hover:underline'>{title}</a>
      <div className='flex gap-5 my-2'>
        { image && <img src={image} alt="" className='max-w-50 max-h-30 rounded-lg border' /> }
        <div>
          <p>{description}</p>
          <p className='text-gray-600'>{stack}</p>
        </div>
      </div>
    </div>
  )
}
