import React from 'react'
import { Link } from 'react-router-dom'

export default function Letters() {
    return (
        <Link to={"/"}>
            <div className="flex text-4xl font-montserrat tracking-wide">
                <h1 className='font-bold text-blue-500'>M</h1>
                <h1 className='font-bold text-red-500'>a</h1>
                <h1 className='font-bold text-yellow-500'>l</h1>
                <h1 className='font-bold text-blue-500'>l</h1>
                <h1 className='font-bold text-green-500'>a</h1>
                <h1 className='font-bold text-red-500'>r</h1>
                <h1 className='font-bold text-yellow-500'>i</h1>
                <h1 className='font-bold text-blue-500'>n</h1>
                <h1 className='font-bold text-green-500'>o</h1>
            </div>
        </Link>
    )
}
