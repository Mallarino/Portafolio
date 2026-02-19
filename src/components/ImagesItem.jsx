import React from 'react'


export default function ImagesItem({ link, title, image }) {
    return (
        <div className='my-6'>
            {image && <img src={image} alt="" className='w-50' />}
            <a href='#me' className=''>{title}</a>
            <div className='text-gray-500'>{link}</div>
            <div className='flex gap-5'>
            </div>
        </div>
    )
}
