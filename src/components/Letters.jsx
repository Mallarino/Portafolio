import React from 'react'
import { Link } from 'react-router-dom'

export default function Letters() {
    return (
        <Link to={"/"}>
            <div className="flex text-4xl font-montserrat tracking-wide">
                <h1 className='font-bold text-blue-600'>M</h1>
                <h1 className='font-bold text-red-600'>a</h1>
                <h1 className='font-bold text-yellow-600'>l</h1>
                <h1 className='font-bold text-blue-600'>l</h1>
                <h1 className='font-bold text-green-600'>a</h1>
                <h1 className='font-bold text-red-600'>r</h1>
                <h1 className='font-bold text-yellow-600'>i</h1>
                <h1 className='font-bold text-blue-600'>n</h1>
                <h1 className='font-bold text-green-600'>o</h1>
            </div>
        </Link>
    )
}
