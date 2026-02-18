import React from 'react'


export default function SearchResultItem({ link, title, image, description, stack }) {
  return (
    <div className='my-6'>
      <div className='text-gray-500'>{link}</div>
      <a href='#me' className='text-purple-700 text-xl'>{title}</a>
      <div className='flex gap-5'>
        { image && <img src={image} alt="" className='w-50' /> }
        <div>
          <p>{description}</p>
          <p className='text-gray-600'>{stack}</p>
        </div>
      </div>
    </div>
  )
}
